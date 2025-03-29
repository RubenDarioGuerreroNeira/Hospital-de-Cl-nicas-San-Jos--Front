import { motion } from 'framer-motion';
import ImageCarousel from '../ui/ImageCarousel';

// Imágenes para el carrusel
const carouselImages = [
  "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2232&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2880&auto=format&fit=crop"
];

const Hero = () => {
  return (
    <section className="relative h-[500px] bg-[#e6f5fa] overflow-hidden">
      {/* Carrusel de imágenes de fondo */}
      <div className="absolute inset-0">
        <ImageCarousel images={carouselImages} interval={6000} />
      </div>

      {/* Contenedor */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-2xl">
          {/* Migajas de pan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <a href="#" className="text-[#69b1cd] font-medium hover:text-white">Medicina y Enfermería</a>
          </motion.div>

          {/* Titular */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            La más alta competencia profesional <br className="hidden md:block" />
            combinada con atención <br className="hidden md:block" />
            humana
          </motion.h2>

          {/* Botón CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-[#69b1cd] hover:bg-[#4aa3c1] text-white px-8 py-3 rounded transition-colors duration-300">
              Más información
            </button>
          </motion.div>
        </div>
      </div>

      {/* Pestañas de navegación inferiores */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-4">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto pb-2">
            <a href="#medizin" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium whitespace-nowrap">Medicina y Enfermería</a>
            <a href="#aufenthalt" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium whitespace-nowrap">Su Estancia</a>
            <a href="#karriere" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium whitespace-nowrap">Carreras</a>
            <a href="#unser-haus" className="text-[#4aa3c1] hover:text-[#3a8ca8] font-medium whitespace-nowrap">Nuestro Hospital</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
