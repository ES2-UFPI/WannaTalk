import React, { useState } from "react";

const Pesquisar = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("É obrigatório o preenchimento do título");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center relative w-full max-w-[24rem] rounded-lg shadow"
    >
      <svg
        className="w-6 h-6 text-black absolute left-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
      </svg>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-black py-1 pl-10 flex-grow rounded-lg"
        placeholder="Pesquisar roteiros"
      />
    </form>
  );
};
export default Pesquisar;
