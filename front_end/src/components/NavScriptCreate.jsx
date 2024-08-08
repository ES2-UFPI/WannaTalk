import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-[#00B2FF] p-4 shadow-md mx-auto max-w-3xl rounded-lg">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link
            to="/criarRoteiro"
            className="text-white font-semibold hover:text-[#00FF62]"
          >
            Cadastrar Roteiro
          </Link>
        </li>
        <li>
          <Link
            to="/criarDialogo"
            className="text-white font-semibold hover:text-[#00FF62]"
          >
            Editor de Roteiro
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
