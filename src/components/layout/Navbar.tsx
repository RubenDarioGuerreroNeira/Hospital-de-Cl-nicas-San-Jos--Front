


//------------ original--------------

import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-12 h-12 mr-3">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <path
                                    d="M50 0 L100 50 L50 100 L0 50 Z"
                                    fill="#4aa3c1"
                                />
                                <path
                                    d="M30 30 L70 30 L70 70 L30 70 Z"
                                    fill="#fff"
                                    stroke="#4aa3c1"
                                    strokeWidth="4"
                                />
                                <path
                                    d="M50 20 L50 80"
                                    stroke="#69b1cd"
                                    strokeWidth="8"
                                />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-[#4aa3c1] uppercase tracking-wider">Hospital San José</h1>
                            <p className="text-xs text-gray-500">Hermanas del Redentor</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <a href="#medizin" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium">Medicina y Enfermería</a>
                        <a href="#aufenthalt" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium">Su Estancia</a>
                        <a href="#karriere" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium">Carreras</a>
                        <a href="#unser-haus" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium">Nuestro Hospital</a>
                        <a href="#pflegeschule" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium">Escuela de Enfermería</a>
                    </nav>

                    {/* Right Side Items */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <div className="flex space-x-3">
                            <a href="#info" className="text-gray-600 hover:text-gray-800 text-sm">Información</a>
                            <a href="#news" className="text-gray-600 hover:text-gray-800 text-sm">Actualidad</a>
                            <a href="#termine" className="text-gray-600 hover:text-gray-800 text-sm">Citas</a>
                            <a href="#spenden" className="text-gray-600 hover:text-gray-800 text-sm">Donaciones</a>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-[#69b1cd] text-white px-4 py-2 rounded font-medium">EMERGENCIA</button>
                            <button className="bg-[#3a8ca8] text-white px-4 py-2 rounded font-medium">CONSULTAS</button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:hidden mt-4 pb-4"
                    >
                        <nav className="flex flex-col space-y-4">
                            <a href="#medizin" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium">Medicina y Enfermería</a>
                            <a href="#aufenthalt" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium">Su Estancia</a>
                            <a href="#karriere" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium">Carreras</a>
                            <a href="#unser-haus" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium">Nuestro Hospital</a>
                            <a href="#pflegeschule" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium">Escuela de Enfermería</a>
                            <div className="pt-4 flex flex-col space-y-2">
                                <a href="#info" className="text-gray-600 hover:text-gray-800 text-sm">Información</a>
                                <a href="#news" className="text-gray-600 hover:text-gray-800 text-sm">Actualidad</a>
                                <a href="#termine" className="text-gray-600 hover:text-gray-800 text-sm">Citas</a>
                                <a href="#spenden" className="text-gray-600 hover:text-gray-800 text-sm">Donaciones</a>
                            </div>
                            <div className="flex space-x-2 pt-2">
                                <button className="bg-[#69b1cd] text-white px-4 py-2 rounded font-medium">EMERGENCIA</button>
                                <button className="bg-[#3a8ca8] text-white px-4 py-2 rounded font-medium">CONSULTAS</button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
