import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Datos para la sección de habitaciones
const roomTypes = [
  {
    id: 1,
    type: 'Habitación Individual',
    description: 'Espacio privado con todas las comodidades para garantizar una estancia tranquila y confortable.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    amenities: ['Baño privado', 'TV Smart', 'Wi-Fi', 'Aire acondicionado', 'Cama ajustable eléctrica', 'Sistema de llamada a enfermería']
  },
  {
    id: 2,
    type: 'Habitación Doble',
    description: 'Espaciosa habitación compartida, diseñada para proporcionar confort y privacidad a dos pacientes.',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2074&auto=format&fit=crop',
    amenities: ['Baño compartido', 'TV por paciente', 'Wi-Fi', 'Aire acondicionado', 'Cortinas divisorias', 'Sistema de llamada a enfermería']
  },
  {
    id: 3,
    type: 'Suite Premium',
    description: 'Nuestra opción más exclusiva, con espacio adicional para acompañantes y servicios premium.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
    amenities: ['Sala de estar', 'Baño de lujo', 'TV Smart', 'Wi-Fi de alta velocidad', 'Menú gourmet', 'Cama ajustable eléctrica', 'Sofá-cama para acompañante']
  }
];

// Información de visitas
const visitingInfo = [
  {
    id: 1,
    title: 'Horario General',
    hours: '11:00 - 21:00',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#156582]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'UCI',
    hours: '12:00 - 13:00 / 18:00 - 19:00',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#156582]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Pediatría',
    hours: '10:00 - 20:00 (padres 24h)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#156582]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Neonatología',
    hours: 'Padres 24h / Otros: consultar',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#156582]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
];

// Servicios adicionales
const additionalServices = [
  {
    id: 1,
    title: 'Cafetería',
    description: 'Amplia oferta de comidas y bebidas para pacientes y visitantes.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#156582]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Biblioteca',
    description: 'Espacio de lectura y préstamo de libros para hacer más agradable su estancia.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#156582]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Servicio religioso',
    description: 'Capilla y servicio de atención espiritual para pacientes y familiares.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#156582]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Wi-Fi gratuito',
    description: 'Conexión a Internet de alta velocidad en todas las áreas del hospital.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#156582]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    )
  }
];

const SuEstancia = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#156582] to-[#2c8cb0] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(255, 255, 255, 0.05)" fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,112C672,96,768,96,864,122.7C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Su Estancia</h1>
            <p className="text-xl mb-8">
              En el Hospital San José nos esforzamos para que su estancia sea lo más cómoda y
              agradable posible. Nuestras instalaciones están diseñadas pensando en su bienestar y recuperación.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#156582] hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300">
                Información de ingreso
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-[#156582] px-6 py-3 rounded-md font-medium transition-colors duration-300">
                Preguntas frecuentes
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-20 bg-[#f0f9fd]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#156582] mb-4">Tipos de Habitaciones</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ofrecemos diferentes tipos de habitaciones adaptadas a sus necesidades, todas ellas
              equipadas con las comodidades necesarias para hacer su estancia más agradable.
            </p>
          </motion.div>

          <div className="space-y-16">
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={room.image}
                      alt={room.type}
                      className="w-full h-[300px] md:h-[400px] object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-[#156582] mb-4">{room.type}</h3>
                  <p className="text-gray-600 mb-6">{room.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#156582] mb-3">Comodidades:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {room.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="h-5 w-5 text-[#2c8cb0] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="bg-[#156582] hover:bg-[#0c4054] text-white px-6 py-3 rounded-md transition-colors duration-300">
                    Más información
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visiting Hours Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#156582] mb-4">Horario de Visitas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Para garantizar el descanso y la recuperación de nuestros pacientes, disponemos de horarios
              específicos para las visitas en cada área del hospital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visitingInfo.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f0f9fd] rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-4 rounded-full mb-5 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#156582] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.hours}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-[#e6f5fa] rounded-lg p-6 border-l-4 border-[#156582]"
          >
            <p className="text-gray-700">
              <strong>Nota importante:</strong> Por razones médicas, estos horarios pueden sufrir modificaciones.
              Le recomendamos consultar antes de su visita. El número de visitantes simultáneos está limitado a 2 por paciente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#e6f5fa] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#156582] mb-4">Servicios Adicionales</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Para hacer su estancia más confortable, ponemos a su disposición una serie de servicios adicionales
              pensados tanto para pacientes como para acompañantes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="bg-[#f0f9fd] p-4 rounded-full mr-5">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#156582] mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ and Contact Section */}
      <section className="py-20 bg-[#156582] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">¿Qué debo traer para mi ingreso?</h3>
                  <p className="text-gray-200">
                    Documentación médica, tarjeta sanitaria, artículos de aseo personal, pijama o camisón, bata y zapatillas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">¿Se permite el acompañamiento nocturno?</h3>
                  <p className="text-gray-200">
                    Sí, se permite un acompañante por paciente durante la noche. Disponemos de sillones reclinables en todas las habitaciones.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">¿Puedo elegir el menú?</h3>
                  <p className="text-gray-200">
                    Ofrecemos diferentes opciones de menú adaptadas a las necesidades dietéticas de cada paciente.
                  </p>
                </div>
              </div>
              <button className="mt-8 bg-white text-[#156582] hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300">
                Ver todas las preguntas
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contacto para Ingresos</h2>
              <p className="mb-6">
                Si tiene alguna pregunta sobre su próximo ingreso o desea información adicional,
                no dude en contactar con nuestro departamento de admisiones.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+34 912 123 456 (Admisiones)</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>admisiones@hospital-sanjose.es</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Lunes a viernes: 8:00 - 20:00h</span>
                </div>
              </div>
              <button className="bg-white text-[#156582] hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300">
                Formulario de contacto
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SuEstancia;
