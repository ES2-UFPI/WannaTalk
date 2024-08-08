import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import "tailwindcss/tailwind.css";
import NavBar from "./NavBar";
import NavbarScipt from "./NavScriptCreate";

const ItemType = "BLOCK";

// Define o título e as vozes disponíveis

const defaultVoices = ["Voz 1", "Voz 2", "Voz 3"];

const Block = ({
  block,
  index,
  moveBlock,
  handleVoiceChange,
  handleTextChange,
  handleDeleteBlock,
  handleColorChange,
  handleTestVoice,
}) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();

      if (!clientOffset) {
        return;
      }

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveBlock(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { type: ItemType, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));
  return (
    <div
      ref={ref}
      className={`block ${
        isDragging ? "opacity-80" : ""
      } flex flex-col p-4 my-2 mx-auto max-w-xl rounded-lg cursor-move transition-opacity duration-200 bg-white shadow-lg`}
      style={{ backgroundColor: block.color || "#007BFF" }}
    >
      <div className="block-inputs w-full">
        <div className="block-inputs-select flex mb-2 space-x-4">
          <select
            value={block.voice || ""}
            onChange={(event) => handleVoiceChange(index, event)}
            className="p-2 border-none rounded-lg bg-white shadow-sm"
          >
            <option value="">Escolha o personagem...</option>
            {defaultVoices.map((voice, idx) => (
              <option key={idx} value={voice}>
                {voice}
              </option>
            ))}
          </select>
          <select
            value={block.color || "#007BFF"}
            onChange={(event) => handleColorChange(index, event)}
            className="p-2 border-none rounded-lg bg-white shadow-sm"
          >
            <option value="#007BFF">Azul</option>
            <option value="#28A745">Verde</option>
            <option value="#DC3545">Vermelho</option>
            <option value="#FFC107">Amarelo</option>
            <option value="#6C757D">Cinza</option>
          </select>
        </div>
        <textarea
          value={block.text || ""}
          onChange={(event) => handleTextChange(index, event)}
          placeholder="Digite o texto narrado..."
          className="h-24 p-2 border-none rounded-lg bg-white shadow-sm resize-none mb-2 w-full"
        />
        <button
          className="border border-green-500 bg-green-500 transition duration-200 hover:bg-transparent text-white p-2 rounded-lg"
          onClick={() => handleTestVoice(block.voice, block.text)}
        >
          Testar Voz
        </button>
      </div>
      <div className="remover mt-2">
        <button
          className="border border-red-500 bg-red-500 transition duration-200 hover:bg-transparent text-white p-2 rounded-lg w-full"
          onClick={() => handleDeleteBlock(index)}
        >
          Remover Bloco
        </button>
      </div>
    </div>
  );
};

// Componente principal
const ScriptEditor = () => {
  const location = useLocation();
  const title = location.state?.novoRoteiro?.title;
  const [defaultTitle] = useState(title);
  const [blocks, setBlocks] = useState([
    { voice: "", text: "", color: "#007BFF" },
  ]);

  const handleAddBlock = () => {
    const lastBlock = blocks[blocks.length - 1];
    if (lastBlock && lastBlock.voice && lastBlock.text && lastBlock.color) {
      setBlocks([...blocks, { voice: "", text: "", color: "#007BFF" }]);
    } else {
      alert(
        "Preencha todas as informações do bloco antes de adicionar um novo."
      );
    }
  };

  const handleDeleteBlock = (index) => {
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index, 1);
    setBlocks(updatedBlocks);
  };

  const handleVoiceChange = (index, event) => {
    const { value } = event.target;
    const updatedBlocks = [...blocks];
    updatedBlocks[index].voice = value;
    setBlocks(updatedBlocks);
  };

  const handleTextChange = (index, event) => {
    const { value } = event.target;
    const updatedBlocks = [...blocks];
    updatedBlocks[index].text = value;
    setBlocks(updatedBlocks);
  };

  const handleColorChange = (index, event) => {
    const { value } = event.target;
    const updatedBlocks = [...blocks];
    updatedBlocks[index].color = value;
    setBlocks(updatedBlocks);
  };

  const moveBlock = (fromIndex, toIndex) => {
    const updatedBlocks = update(blocks, {
      $splice: [
        [fromIndex, 1],
        [toIndex, 0, blocks[fromIndex]],
      ],
    });
    setBlocks(updatedBlocks);
  };

  const handleTestVoice = (voice, text) => {
    if (voice && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = speechSynthesis
        .getVoices()
        .find((v) => v.name === voice);
      speechSynthesis.speak(utterance);
    } else {
      alert("Preencha a voz e o texto antes de testar.");
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const formattedData = blocks
      .map((block) => {
        const voiceId = defaultVoices.indexOf(block.voice) + 1;
        return `{${voiceId}}${block.text}{/}`;
      })
      .join("");

    const finalData = `${formattedData}`;
    console.log(finalData);
    try {
      const response = await fetch("http://localhost:5000/api/scripts", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: finalData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.text();
      console.log("Success:", data);
      console.log(finalData); // to mostrando o formato da string que está sendo enviada
      navigate("/roteiroCriado");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col items-center">
        <div className="w-full max-w-3xl px-10 py-6">
          <NavbarScipt className="mb-20" />
          <div className="section-title flex justify-center mt-6 mb-6">
            <div className="title bg-[#00B2FF] text-white px-11 py-3 rounded-xl shadow-lg flex items-center">
              <h2 className="text-lg font-bold m-0">{defaultTitle}</h2>
            </div>
          </div>

          <DndProvider backend={HTML5Backend}>
            <div className="app-container bg-gray-100 p-8 mx-auto rounded-xl shadow-lg overflow-y-auto">
              {blocks.map((block, index) => (
                <Block
                  key={index}
                  index={index}
                  block={block}
                  moveBlock={moveBlock}
                  handleVoiceChange={handleVoiceChange}
                  handleTextChange={handleTextChange}
                  handleDeleteBlock={handleDeleteBlock}
                  handleColorChange={handleColorChange}
                  handleTestVoice={handleTestVoice}
                />
              ))}
              <div className="flex justify-between space-x-4 mt-4">
                <button
                  className="border border-blue-500 bg-[#00B2FF] text-white transition duration-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white p-2 rounded-lg w-full"
                  onClick={handleAddBlock}
                >
                  Adicionar Bloco
                </button>
                <button
                  className="border border-blue-500 bg-[#00B2FF] text-white transition duration-200 hover:bg-blue-600 hover:border-blue-600 hover:text-white p-2 rounded-lg w-full"
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              </div>
            </div>
          </DndProvider>
        </div>
      </div>
    </>
  );
};

export default ScriptEditor;
