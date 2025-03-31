import { motion } from 'framer-motion';

// Datos de noticias de ejemplo
const newsItems = [
  {
    id: 1,
    title: 'Nuevo servicio de cardiología inaugurado',
    date: '15 de marzo de 2025',
    excerpt: 'Con la tecnología más moderna, el nuevo servicio de cardiología ofrece opciones ampliadas de diagnóstico y tratamiento para nuestros pacientes.',
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2012&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Formación para futuros enfermera(o)s',
    date: '2 de abril de 2025',
    excerpt: 'En nuestra escuela de enfermería ofrecemos nuevos cursos de formación para futuros enfermeros. Próximo inicio del curso: mayo 2025.',
    image: 'https://images.unsplash.com/photo-1590105577767-e21a1067899f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'Jornada de puertas abiertas en Consultas',
    date: '20 de abril de 2025',
    excerpt: 'Visite nuestro Centro Médico y conozca a nuestros especialistas. Con conferencias sobre temas actuales de salud.',
    image: 'https://images.unsplash.com/photo-1704228367455-642cb657daf5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#3a8ca8] mb-4">Noticias</h2>
          <div className="w-20 h-1 bg-[#69b1cd] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-[#3a8ca8] mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="text-[#4aa3c1] font-medium hover:text-[#3a8ca8] transition-colors flex items-center">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-[#4aa3c1] hover:bg-[#3a8ca8] text-white px-6 py-3 rounded transition-colors duration-300">
            Todas las noticias
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
