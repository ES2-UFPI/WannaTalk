import React, { useState, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import 'tailwindcss/tailwind.css';
import NavBar from './NavBar';

const ItemType = 'BLOCK';

// Define o título e as vozes disponíveis
const defaultTitle = "Viagem à Lua";
const defaultVoices = ['Voz 1', 'Voz 2', 'Voz 3'];

const Block = ({ block, index, moveBlock, handleVoiceChange, handleTextChange, handleDeleteBlock, handleColorChange, handleTestVoice }) => {
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
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
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
            className={`block ${isDragging ? 'opacity-80' : ''} flex flex-col p-4 my-2 mx-auto max-w-xl rounded cursor-move transition-opacity duration-200`}
            style={{ backgroundColor: block.color || '#007BFF' }}
        >
            <div className="block-inputs w-full">
                <div className="block-inputs-select flex mb-2">
                    <select
                        value={block.voice || ''}
                        onChange={(event) => handleVoiceChange(index, event)}
                        className="mr-2 p-2 border-none rounded bg-white shadow"
                    >
                        <option value="">Escolha o personagem...</option>
                        {defaultVoices.map((voice, idx) => (
                            <option key={idx} value={voice}>{voice}</option>
                        ))}
                    </select>
                    <select
                        value={block.color || '#007BFF'}
                        onChange={(event) => handleColorChange(index, event)}
                        className="p-2 border-none rounded bg-white shadow"
                    >
                        <option value="#007BFF">Azul</option>
                        <option value="#28A745">Verde</option>
                        <option value="#DC3545">Vermelho</option>
                        <option value="#FFC107">Amarelo</option>
                        <option value="#6C757D">Cinza</option>
                    </select>
                </div>
                <textarea
                    value={block.text || ''}
                    onChange={(event) => handleTextChange(index, event)}
                    placeholder="Digite o texto narrado..."
                    className="h-24 p-2 border-none rounded bg-white shadow resize-none mb-2 w-full"
                />
                <button
                    className="border border-green-500 bg-green-500 transition duration-200 hover:bg-transparent text-white p-2 rounded"
                    onClick={() => handleTestVoice(block.voice, block.text)}
                >
                    Testar Voz
                </button>
            </div>
            <div className="remover mt-2">
                <button
                    className="border border-red-500 bg-red-500 transition duration-200 hover:bg-transparent text-white p-2 rounded w-full"
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
    const [blocks, setBlocks] = useState([{ voice: '', text: '', color: '#007BFF' }]);

    const handleAddBlock = () => {
        const lastBlock = blocks[blocks.length - 1];
        if (lastBlock && lastBlock.voice && lastBlock.text && lastBlock.color) {
            setBlocks([...blocks, { voice: '', text: '', color: '#007BFF' }]);
        } else {
            alert("Preencha todas as informações do bloco antes de adicionar um novo.");
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
            utterance.voice = speechSynthesis.getVoices().find(v => v.name === voice);
            speechSynthesis.speak(utterance);
        } else {
            alert("Preencha a voz e o texto antes de testar.");
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/scripts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: defaultTitle,
                    blocks: blocks,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="main-container mx-10">
                <nav className="nav-container flex justify-center gap-5 p-4">
                    <div className="nav-item flex font-bold text-sm items-center p-1 text-gray-400 border-b border-gray-400">
                        <label>ICON</label>
                        <p>Cadastrar Roteiro</p>
                    </div>
                    <div className="nav-item flex items-center p-1 text-gray-900 border-b border-gray-900">
                        <label>ICON</label>
                        <p>Editor de Roteiro</p>
                    </div>
                </nav>
                <div className="section-title flex justify-center mb-6">
                    <div className="title bg-blue-500 text-white px-11 py-3 rounded-xl shadow-lg flex items-center">
                        <h2 className="text-lg font-bold m-0">{defaultTitle}</h2>
                    </div>
                </div>

                <DndProvider backend={HTML5Backend}>
                    <div className="app-container bg-gray-100 p-8 my-8 mx-auto max-w-3xl rounded shadow max-h-96 overflow-y-auto">
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
                        <button
                            className="border border-blue-500 bg-blue-500 transition duration-200 hover:bg-transparent text-white p-2 rounded w-full mt-2"
                            onClick={handleAddBlock}
                        >
                            Adicionar Bloco
                        </button>
                        <button
                            className="border border-blue-500 bg-blue-500 transition duration-200 hover:bg-transparent text-white p-2 rounded w-full mt-2"
                            onClick={handleSubmit}
                        >
                            Enviar
                        </button>
                    </div>
                </DndProvider>
            </div>
        </div>
    );
};

export default ScriptEditor;
