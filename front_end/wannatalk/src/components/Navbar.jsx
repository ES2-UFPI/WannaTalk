// components/Navbar.js
"use client";

import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 border-b-2 border-gray-300">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">WannaTalk?</span>
                        <h1 className="rounded-md text-xl text-white font-bold hover:text-gray-300">WannaTalk?</h1>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button onClick={toggleMenu} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {/* Aqui tu pode estilizar todos os menus do desktop*/}
                    <div className="md:flex inline mt-2" id="disclosure-1">
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Praticar Roteiro</a>
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Criar Roteiro</a>
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Pesquisar Roteiro</a>
                    </div>
                </div>

            </nav>
            {/* Aqui tu estiliza o menu mobile */}
            {isMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10"></div>
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">WannaTalk?</span>
                                <h1 className='text-white'>WannaTalk?</h1>
                            </a>
                            <button onClick={toggleMenu} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="flex flex-col  mt-2 space-y-2">
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-white">Praticar Roteiro</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-white">Criar Roteiro</a>
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-700 hover:text-white">Criar Roteiro</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
