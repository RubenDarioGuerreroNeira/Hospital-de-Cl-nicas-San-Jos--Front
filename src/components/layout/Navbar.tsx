import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const mainLinks = [
        { to: '/', label: 'Inicio' },
        { to: '/su-estancia', label: 'Su Estancia' },
        { to: '/carreras', label: 'Carreras' },
        { to: '/nuestro-hospital', label: 'Nuestro Hospital' },
        { to: '/medicina-enfermeria', label: 'Escuela de Enfermería' },
        { to: '/especialidades', label: 'Especialidades' },
    ];

    const secondaryLinks = [
        { to: '/informacion', label: 'Información' },
        { to: '/actualidad', label: 'Actualidad' },
        { to: '/citas', label: 'Citas' },
        { to: '/donaciones', label: 'Donaciones' },
    ];

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <div className="w-12 h-12 mr-3">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="#4aa3c1" />
                                <path
                                    d="M30 30 L70 30 L70 70 L30 70 Z"
                                    fill="#fff"
                                    stroke="#4aa3c1"
                                    strokeWidth="4"
                                />
                                <path d="M50 20 L50 80" stroke="#69b1cd" strokeWidth="8" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-[#4aa3c1] uppercase tracking-wider">
                                Hospital San José
                            </h1>
                            <p className="text-xs text-gray-500">Hermanas del Redentor</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav
                        className="hidden lg:flex items-center space-x-8"
                        role="navigation"
                        aria-label="Main Navigation"
                    >
                        {mainLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Items */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                        <div className="flex space-x-3">
                            {secondaryLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <div className="flex space-x-2">
                            <Link to="/emergencia" className="bg-[#69b1cd] text-white px-4 py-2 rounded font-medium transition-transform hover:scale-105">
                                EMERGENCIA
                            </Link>
                            <Link to="/consultas" className="bg-[#3a8ca8] text-white px-4 py-2 rounded font-medium transition-transform hover:scale-105">
                                CONSULTAS
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
                        aria-label="Toggle Menu"
                        aria-expanded={isMenuOpen}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
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
                        <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
                            {mainLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col space-y-2">
                                {secondaryLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex space-x-2 pt-2">
                                <Link
                                    to="/emergencia"
                                    className="bg-[#69b1cd] text-white px-4 py-2 rounded font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    EMERGENCIA
                                </Link>
                                <Link
                                    to="/consultas"
                                    className="bg-[#3a8ca8] text-white px-4 py-2 rounded font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    CONSULTAS
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Navbar;

//------------------original

// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const mainLinks = [
//         { href: '/SuEstancia', label: 'Su Estancia' },
//         { to: '/Carreras', label: 'Carreras' },
//         { href: '#unser-haus', label: 'Nuestro Hospital' },
//         { to: '/MedicinaEnfermeria', label: 'Escuela de Enfermería' },
//         { to: '/Specialties', label: 'Especialidades' },
//     ];

//     const secondaryLinks = [
//         { href: '#info', label: 'Información' },
//         { href: '#news', label: 'Actualidad' },
//         { href: '#termine', label: 'Citas' },
//         { href: '#spenden', label: 'Donaciones' },
//     ];

//     return (
//         <header className="w-full bg-white shadow-sm">
//             <div className="container mx-auto px-4 py-3">
//                 <div className="flex items-center justify-between">
//                     {/* Logo */}
//                     <div className="flex items-center">
//                         <div className="w-12 h-12 mr-3">
//                             <svg viewBox="0 0 100 100" className="w-full h-full">
//                                 <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="#4aa3c1" />
//                                 <path
//                                     d="M30 30 L70 30 L70 70 L30 70 Z"
//                                     fill="#fff"
//                                     stroke="#4aa3c1"
//                                     strokeWidth="4"
//                                 />
//                                 <path d="M50 20 L50 80" stroke="#69b1cd" strokeWidth="8" />
//                             </svg>
//                         </div>
//                         <div>
//                             <h1 className="text-xl font-bold text-[#4aa3c1] uppercase tracking-wider">
//                                 Hospital San José
//                             </h1>
//                             <p className="text-xs text-gray-500">Hermanas del Redentor</p>
//                         </div>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <nav
//                         className="hidden lg:flex items-center space-x-8"
//                         role="navigation"
//                         aria-label="Main Navigation"
//                     >
//                         {mainLinks.map((link) => (
//                             <a
//                                 key={link.href}
//                                 href={link.href}
//                                 className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium transition-colors"
//                             >
//                                 {link.label}
//                             </a>
//                         ))}
//                     </nav>

//                     {/* Right Side Items */}
//                     <div className="hidden lg:flex items-center space-x-4">
//                         <button className="p-2">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5 text-gray-600"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                                 />
//                             </svg>
//                         </button>
//                         <div className="flex space-x-3">
//                             {secondaryLinks.map((link) => (
//                                 <a
//                                     key={link.href}
//                                     href={link.href}
//                                     className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
//                                 >
//                                     {link.label}
//                                 </a>
//                             ))}
//                         </div>
//                         <div className="flex space-x-2">
//                             <button className="bg-[#69b1cd] text-white px-4 py-2 rounded font-medium transition-transform hover:scale-105">
//                                 EMERGENCIA
//                             </button>
//                             <button className="bg-[#3a8ca8] text-white px-4 py-2 rounded font-medium transition-transform hover:scale-105">
//                                 CONSULTAS
//                             </button>
//                         </div>
//                     </div>

//                     {/* Mobile menu button */}
//                     <button
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
//                         aria-label="Toggle Menu"
//                         aria-expanded={isMenuOpen}
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M4 6h16M4 12h16M4 18h16"
//                             />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Mobile Navigation */}
//                 {isMenuOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="lg:hidden mt-4 pb-4"
//                     >
//                         <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
//                             {mainLinks.map((link) => (
//                                 <a
//                                     key={link.href}
//                                     href={link.href}
//                                     className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium transition-colors"
//                                 >
//                                     {link.label}
//                                 </a>
//                             ))}
//                             <div className="pt-4 flex flex-col space-y-2">
//                                 {secondaryLinks.map((link) => (
//                                     <a
//                                         key={link.href}
//                                         href={link.href}
//                                         className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
//                                     >
//                                         {link.label}
//                                     </a>
//                                 ))}
//                             </div>
//                             <div className="flex space-x-2 pt-2">
//                                 <button className="bg-[#69b1cd] text-white px-4 py-2 rounded font-medium">EMERGENCIA</button>
//                                 <button className="bg-[#3a8ca8] text-white px-4 py-2 rounded font-medium">CONSULTAS</button>
//                             </div>
//                         </nav>
//                     </motion.div>
//                 )}
//             </div>
//         </header>
//     );
// };

// export default Navbar;


