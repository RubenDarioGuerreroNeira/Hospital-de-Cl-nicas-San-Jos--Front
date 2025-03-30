import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Definición de los enlaces principales
    const mainLinks = [
        { to: '/', label: 'Inicio' },
        { to: '/su-estancia', label: 'Su Estancia' },
        { to: '/carreras', label: 'Carreras' },
        { to: '/nuestro-hospital', label: 'Nuestro Hospital' },
        { to: '/medicina-enfermeria', label: 'Escuela de Enfermería' },
        { to: '/especialidades', label: 'Especialidades' },
    ];

    // Definición de los enlaces secundarios
    const secondaryLinks = [
        { to: '/informacion', label: 'Información' },
        { to: '/actualidad', label: 'Actualidad' },
        { to: '/citas', label: 'Citas' },
        { to: '/donaciones', label: 'Donaciones' },
    ];

    return (
        <header className="w-full bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] dark:from-gray-900 dark:to-gray-800 border-b border-gray-100 dark:border-gray-700 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-2 md:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <div className="w-8 h-8 md:w-12 md:h-12 mr-2 md:mr-3 transform transition-transform group-hover:scale-105">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="#2563eb" className="dark:fill-blue-400" />
                                <path
                                    d="M30 30 L70 30 L70 70 L30 70 Z"
                                    fill="#fff"
                                    stroke="#2563eb"
                                    strokeWidth="4"
                                    className="dark:stroke-blue-400"
                                />
                                <path d="M50 20 L50 80" stroke="#3b82f6" strokeWidth="8" className="dark:stroke-blue-500" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-lg md:text-xl font-bold text-[#1e40af] dark:text-blue-400 uppercase tracking-wider">
                                Hospital San José
                            </h1>
                            <p className="text-[10px] md:text-xs text-[#64748b] dark:text-gray-400">Hermanas del Redentor</p>
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
                                className="text-[#334155] dark:text-gray-200 hover:text-[#1e40af] dark:hover:text-blue-400 font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#2563eb] dark:after:bg-blue-400 after:transition-all hover:after:w-full"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Items */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <ThemeToggle /> {/* Movido aquí */}
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-[#64748b] dark:text-gray-400"
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
                        <div className="flex space-x-4">
                            {secondaryLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="text-[#64748b] dark:text-gray-400 hover:text-[#334155] dark:hover:text-gray-200 text-sm transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <div className="flex space-x-3">
                            <Link
                                to="/emergencia"
                                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                            >
                                EMERGENCIA
                            </Link>
                            <Link
                                to="/consultas"
                                className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white px-4 py-2 rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                            >
                                CONSULTAS
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center space-x-2">
                        <ThemeToggle /> {/* Agregado aquí para móvil */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-[#1e40af] dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none transition-colors duration-200"
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
                            className="lg:hidden fixed left-0 right-0 top-[60px] md:top-[72px] bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 shadow-lg"
                        >
                            {/* ... resto del código del menú móvil con clases dark: agregadas ... */}
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;








// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const mainLinks = [
//         { to: '/', label: 'Inicio' },
//         { to: '/su-estancia', label: 'Su Estancia' },
//         { to: '/carreras', label: 'Carreras' },
//         { to: '/nuestro-hospital', label: 'Nuestro Hospital' },
//         { to: '/medicina-enfermeria', label: 'Escuela de Enfermería' },
//         { to: '/especialidades', label: 'Especialidades' },
//     ];

//     const secondaryLinks = [
//         { to: '/informacion', label: 'Información' },
//         { to: '/actualidad', label: 'Actualidad' },
//         { to: '/citas', label: 'Citas' },
//         { to: '/donaciones', label: 'Donaciones' },
//     ];

//     return (
//         <header className="w-full bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
//             <div className="container mx-auto px-4 py-2 md:py-4">
//                 <div className="flex items-center justify-between">
//                     {/* Logo */}
//                     <Link to="/" className="flex items-center group">
//                         <div className="w-8 h-8 md:w-12 md:h-12 mr-2 md:mr-3 transform transition-transform group-hover:scale-105">
//                             <svg viewBox="0 0 100 100" className="w-full h-full">
//                                 <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="#2563eb" />
//                                 <path
//                                     d="M30 30 L70 30 L70 70 L30 70 Z"
//                                     fill="#fff"
//                                     stroke="#2563eb"
//                                     strokeWidth="4"
//                                 />
//                                 <path d="M50 20 L50 80" stroke="#3b82f6" strokeWidth="8" />
//                             </svg>
//                         </div>



//                         <div>
//                             <h1 className="text-lg md:text-xl font-bold text-[#1e40af] uppercase tracking-wider">
//                                 Hospital San José
//                             </h1>
//                             <p className="text-[10px] md:text-xs text-[#64748b]">Hermanas del Redentor</p>
//                         </div>
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <nav
//                         className="hidden lg:flex items-center space-x-8"
//                         role="navigation"
//                         aria-label="Main Navigation"
//                     >
//                         {mainLinks.map((link) => (
//                             <Link
//                                 key={link.to}
//                                 to={link.to}
//                                 className="text-[#334155] hover:text-[#1e40af] font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#2563eb] after:transition-all hover:after:w-full"
//                             >
//                                 {link.label}
//                             </Link>
//                         ))}
//                     </nav>

//                     {/* Right Side Items */}
//                     <div className="hidden lg:flex items-center space-x-6">
//                         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5 text-[#64748b]"
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
//                         <div className="flex space-x-4">
//                             {secondaryLinks.map((link) => (
//                                 <Link
//                                     key={link.to}
//                                     to={link.to}
//                                     className="text-[#64748b] hover:text-[#334155] text-sm transition-colors duration-200"
//                                 >
//                                     {link.label}
//                                 </Link>
//                             ))}
//                         </div>
//                         <div className="flex space-x-3">
//                             <Link
//                                 to="/emergencia"
//                                 className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
//                             >
//                                 EMERGENCIA
//                             </Link>
//                             <Link
//                                 to="/consultas"
//                                 className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white px-4 py-2 rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
//                             >
//                                 CONSULTAS
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Mobile menu button */}
//                     <button
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         className="lg:hidden p-2 rounded-md text-[#1e40af] hover:bg-blue-50 focus:outline-none transition-colors duration-200"
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
//                         className="lg:hidden fixed left-0 right-0 top-[60px] md:top-[72px] bg-white border-b border-gray-100 shadow-lg"
//                     >
//                         <div className="container mx-auto px-4 py-4">
//                             <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
//                                 {mainLinks.map((link) => (
//                                     <Link
//                                         key={link.to}
//                                         to={link.to}
//                                         className="text-[#334155] hover:text-[#1e40af] font-medium transition-colors duration-200 py-2"
//                                         onClick={() => setIsMenuOpen(false)}
//                                     >
//                                         {link.label}
//                                     </Link>
//                                 ))}
//                                 <div className="pt-4 flex flex-col space-y-2 border-t border-gray-100">
//                                     {secondaryLinks.map((link) => (
//                                         <Link
//                                             key={link.to}
//                                             to={link.to}
//                                             className="text-[#64748b] hover:text-[#334155] text-sm transition-colors duration-200 py-2"
//                                             onClick={() => setIsMenuOpen(false)}
//                                         >
//                                             {link.label}
//                                         </Link>
//                                     ))}
//                                 </div>
//                                 <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
//                                     <Link
//                                         to="/emergencia"
//                                         className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-3 rounded-md font-medium text-center shadow-sm hover:shadow-md transition-all duration-200"
//                                         onClick={() => setIsMenuOpen(false)}
//                                     >
//                                         EMERGENCIA
//                                     </Link>
//                                     <Link
//                                         to="/consultas"
//                                         className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white px-4 py-3 rounded-md font-medium text-center shadow-sm hover:shadow-md transition-all duration-200"
//                                         onClick={() => setIsMenuOpen(false)}
//                                     >
//                                         CONSULTAS
//                                     </Link>
//                                 </div>
//                             </nav>
//                         </div>
//                     </motion.div>
//                 )}
//             </div>
//         </header>
//     );
// };

// export default Navbar;





// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const mainLinks = [
//         { to: '/', label: 'Inicio' },
//         { to: '/su-estancia', label: 'Su Estancia' },
//         { to: '/carreras', label: 'Carreras' },
//         { to: '/nuestro-hospital', label: 'Nuestro Hospital' },
//         { to: '/medicina-enfermeria', label: 'Escuela de Enfermería' },
//         { to: '/especialidades', label: 'Especialidades' },
//     ];

//     const secondaryLinks = [
//         { to: '/informacion', label: 'Información' },
//         { to: '/actualidad', label: 'Actualidad' },
//         { to: '/citas', label: 'Citas' },
//         { to: '/donaciones', label: 'Donaciones' },
//     ];

//     return (
//         <header className="w-full bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] border-b border-gray-100">
//             <div className="container mx-auto px-4 py-4">
//                 <div className="flex items-center justify-between">
//                     {/* Logo */}
//                     <Link to="/" className="flex items-center group">
//                         <div className="w-12 h-12 mr-3 transform transition-transform group-hover:scale-105">
//                             <svg viewBox="0 0 100 100" className="w-full h-full">
//                                 <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="#2563eb" />
//                                 <path
//                                     d="M30 30 L70 30 L70 70 L30 70 Z"
//                                     fill="#fff"
//                                     stroke="#2563eb"
//                                     strokeWidth="4"
//                                 />
//                                 <path d="M50 20 L50 80" stroke="#3b82f6" strokeWidth="8" />
//                             </svg>
//                         </div>
//                         <div>
//                             <h1 className="text-xl font-bold text-[#1e40af] uppercase tracking-wider">
//                                 Hospital San José
//                             </h1>
//                             <p className="text-xs text-[#64748b]">Hermanas del Redentor</p>
//                         </div>
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <nav
//                         className="hidden lg:flex items-center space-x-8"
//                         role="navigation"
//                         aria-label="Main Navigation"
//                     >
//                         {mainLinks.map((link) => (
//                             <Link
//                                 key={link.to}
//                                 to={link.to}
//                                 className="text-[#334155] hover:text-[#1e40af] font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#2563eb] after:transition-all hover:after:w-full"
//                             >
//                                 {link.label}
//                             </Link>
//                         ))}
//                     </nav>

//                     {/* Right Side Items */}
//                     <div className="hidden lg:flex items-center space-x-6">
//                         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5 text-[#64748b]"
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
//                         <div className="flex space-x-4">
//                             {secondaryLinks.map((link) => (
//                                 <Link
//                                     key={link.to}
//                                     to={link.to}
//                                     className="text-[#64748b] hover:text-[#334155] text-sm transition-colors duration-200"
//                                 >
//                                     {link.label}
//                                 </Link>
//                             ))}
//                         </div>
//                         <div className="flex space-x-3">
//                             <Link
//                                 to="/emergencia"
//                                 className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
//                             >
//                                 EMERGENCIA
//                             </Link>
//                             <Link
//                                 to="/consultas"
//                                 className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white px-4 py-2 rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
//                             >
//                                 CONSULTAS
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Mobile menu button */}
//                     <button
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         className="lg:hidden p-2 rounded-md text-[#64748b] hover:bg-gray-100 focus:outline-none transition-colors duration-200"
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
//                         className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4"
//                     >
//                         <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
//                             {mainLinks.map((link) => (
//                                 <Link
//                                     key={link.to}
//                                     to={link.to}
//                                     className="text-[#334155] hover:text-[#1e40af] font-medium transition-colors duration-200"
//                                     onClick={() => setIsMenuOpen(false)}
//                                 >
//                                     {link.label}
//                                 </Link>
//                             ))}
//                             <div className="pt-4 flex flex-col space-y-2">
//                                 {secondaryLinks.map((link) => (
//                                     <Link
//                                         key={link.to}
//                                         to={link.to}
//                                         className="text-[#64748b] hover:text-[#334155] text-sm transition-colors duration-200"
//                                         onClick={() => setIsMenuOpen(false)}
//                                     >
//                                         {link.label}
//                                     </Link>
//                                 ))}
//                             </div>
//                             <div className="flex flex-col space-y-2 pt-4">
//                                 <Link
//                                     to="/emergencia"
//                                     className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-md font-medium text-center shadow-sm hover:shadow-md transition-all duration-200"
//                                     onClick={() => setIsMenuOpen(false)}
//                                 >
//                                     EMERGENCIA
//                                 </Link>
//                                 <Link
//                                     to="/consultas"
//                                     className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white px-4 py-2 rounded-md font-medium text-center shadow-sm hover:shadow-md transition-all duration-200"
//                                     onClick={() => setIsMenuOpen(false)}
//                                 >
//                                     CONSULTAS
//                                 </Link>
//                             </div>
//                         </nav>
//                     </motion.div>
//                 )}
//             </div>
//         </header>
//     );



// };

// export default Navbar;







// original funciona perfecto-----

// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const mainLinks = [
//         { to: '/', label: 'Inicio' },
//         { to: '/su-estancia', label: 'Su Estancia' },
//         { to: '/carreras', label: 'Carreras' },
//         { to: '/nuestro-hospital', label: 'Nuestro Hospital' },
//         { to: '/medicina-enfermeria', label: 'Escuela de Enfermería' },
//         { to: '/especialidades', label: 'Especialidades' },
//     ];

//     const secondaryLinks = [
//         { to: '/informacion', label: 'Información' },
//         { to: '/actualidad', label: 'Actualidad' },
//         { to: '/citas', label: 'Citas' },
//         { to: '/donaciones', label: 'Donaciones' },
//     ];

//     return (
//         <header className="w-full bg-white shadow-sm">
//             <div className="container mx-auto px-4 py-3">
//                 <div className="flex items-center justify-between">
//                     {/* Logo */}
//                     <Link to="/" className="flex items-center">
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
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <nav
//                         className="hidden lg:flex items-center space-x-8"
//                         role="navigation"
//                         aria-label="Main Navigation"
//                     >
//                         {mainLinks.map((link) => (
//                             <Link
//                                 key={link.to}
//                                 to={link.to}
//                                 className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium transition-colors"
//                             >
//                                 {link.label}
//                             </Link>
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
//                                 <Link
//                                     key={link.to}
//                                     to={link.to}
//                                     className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
//                                 >
//                                     {link.label}
//                                 </Link>
//                             ))}
//                         </div>
//                         <div className="flex space-x-2">
//                             <Link to="/emergencia" className="bg-[#69b1cd] text-white px-4 py-2 rounded font-medium transition-transform hover:scale-105">
//                                 EMERGENCIA
//                             </Link>
//                             <Link to="/consultas" className="bg-[#3a8ca8] text-white px-4 py-2 rounded font-medium transition-transform hover:scale-105">
//                                 CONSULTAS
//                             </Link>
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
//                                 <Link
//                                     key={link.to}
//                                     to={link.to}
//                                     className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium transition-colors"
//                                     onClick={() => setIsMenuOpen(false)}
//                                 >
//                                     {link.label}
//                                 </Link>
//                             ))}
//                             <div className="pt-4 flex flex-col space-y-2">
//                                 {secondaryLinks.map((link) => (
//                                     <Link
//                                         key={link.to}
//                                         to={link.to}
//                                         className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
//                                         onClick={() => setIsMenuOpen(false)}
//                                     >
//                                         {link.label}
//                                     </Link>
//                                 ))}
//                             </div>
//                             <div className="flex space-x-2 pt-2">
//                                 <Link
//                                     to="/emergencia"
//                                     className="bg-[#69b1cd] text-white px-4 py-2 rounded font-medium"
//                                     onClick={() => setIsMenuOpen(false)}
//                                 >
//                                     EMERGENCIA
//                                 </Link>
//                                 <Link
//                                     to="/consultas"
//                                     className="bg-[#3a8ca8] text-white px-4 py-2 rounded font-medium"
//                                     onClick={() => setIsMenuOpen(false)}
//                                 >
//                                     CONSULTAS
//                                 </Link>
//                             </div>
//                         </nav>
//                     </motion.div>
//                 )}
//             </div>
//         </header>
//     );
// };

// export default Navbar;

