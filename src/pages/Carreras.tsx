import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Datos de posiciones abiertas
const openPositions = [
  {
    id: 1,
    title: 'Médico Especialista en Cardiología',
    department: 'Cardiología',
    type: 'Tiempo completo',
    location: 'Madrid',
    description: 'Buscamos un médico especialista en Cardiología para unirse a nuestro equipo. El candidato ideal debe tener experiencia en ecocardiografía y cardiología intervencionista.',
    requirements: [
      'Licenciatura en Medicina y título de especialista en Cardiología',
      'Mínimo 3 años de experiencia como especialista',
      'Experiencia en técnicas intervencionistas',
      'Capacidad de trabajo en equipo'
    ]
  },
  {
    id: 2,
    title: 'Enfermero/a para UCI',
    department: 'Unidad de Cuidados Intensivos',
    type: 'Tiempo completo',
    location: 'Madrid',
    description: 'Se requiere enfermero/a para nuestra Unidad de Cuidados Intensivos. Valoramos experiencia previa en UCI y manejo de pacientes críticos.',
    requirements: [
      'Grado en Enfermería',
      'Experiencia mínima de 1 año en UCI',
      'Conocimientos en ventilación mecánica',
      'Disponibilidad para trabajar en turnos rotativos'
    ]
  },
  {
    id: 3,
    title: 'Técnico de Laboratorio',
    department: 'Laboratorio Clínico',
    type: 'Tiempo completo',
    location: 'Madrid',
    description: 'Necesitamos un técnico de laboratorio para realizar análisis clínicos. El candidato debe tener experiencia en técnicas de bioquímica y hematología.',
    requirements: [
      'Técnico Superior en Laboratorio Clínico',
      'Experiencia mínima de 2 años',
      'Conocimientos de control de calidad',
      'Manejo de sistemas informáticos de laboratorio'
    ]
  },
  {
    id: 4,
    title: 'Fisioterapeuta',
    department: 'Rehabilitación',
    type: 'Media jornada',
    location: 'Madrid',
    description: 'Incorporamos fisioterapeuta para nuestro servicio de rehabilitación. Se valoran conocimientos en terapia manual y rehabilitación neurológica.',
    requirements: [
      'Grado en Fisioterapia',
      'Formación específica en terapia manual',
      'Experiencia en rehabilitación hospitalaria',
      'Capacidad para trabajar con diferentes perfiles de pacientes'
    ]
  }
];

// Datos de los beneficios
const benefits = [
  {
    id: 1,
    title: 'Desarrollo profesional',
    description: 'Formación continua y posibilidades de promoción interna',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4aa3c1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Conciliación',
    description: 'Flexibilidad horaria y medidas para equilibrar vida personal y profesional',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4aa3c1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Salario competitivo',
    description: 'Retribución acorde a la experiencia y responsabilidad',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4aa3c1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Seguro médico',
    description: 'Seguro de salud para empleados y condiciones especiales para familiares',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4aa3c1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Ambiente de trabajo',
    description: 'Entorno colaborativo y orientado al crecimiento profesional',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4aa3c1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Plan de pensiones',
    description: 'Plan de ahorro para la jubilación con aportaciones de la empresa',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4aa3c1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    )
  }
];

// Datos de testimonios
const testimonials = [
  {
    id: 1,
    quote: "Trabajar en el Hospital San José me ha permitido crecer profesionalmente mientras contribuyo a la salud de los pacientes. El ambiente de trabajo y las oportunidades de formación son excepcionales.",
    name: "Dra. Ana Martínez",
    position: "Jefa de Pediatría",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "El hospital apuesta por la conciliación familiar y el desarrollo profesional. Después de 5 años aquí, puedo decir que es un lugar donde realmente se valora el talento y la dedicación.",
    name: "Carlos Rodríguez",
    position: "Enfermero en UCI",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=2067&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "La formación continua y el trabajo en equipo son parte fundamental de nuestra cultura. El hospital invierte en tecnología punta y en el bienestar de sus profesionales.",
    name: "Laura Sánchez",
    position: "Supervisora de Laboratorio",
    image: "https://images.unsplash.com/photo-1614436163996-25cee5f54290?q=80&w=1742&auto=format&fit=crop"
  }
];

const Carreras = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#156582] to-[#2c8cb0] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(255, 255, 255, 0.05)" fillOpacity="1" d="M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,186.7C672,192,768,128,864,117.3C960,107,1056,149,1152,144C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Carreras Profesionales</h1>
            <p className="text-xl mb-8">
              Únete a nuestro equipo y forma parte de una institución comprometida con la excelencia
              en la atención sanitaria. En el Hospital San José valoramos el talento y ofrecemos
              oportunidades de desarrollo profesional en un entorno de trabajo colaborativo.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#156582] hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300">
                Ver ofertas de empleo
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-[#156582] px-6 py-3 rounded-md font-medium transition-colors duration-300">
                Enviar CV
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#156582] mb-6">¿Por qué unirse a nuestro equipo?</h2>
              <p className="text-gray-600 mb-6">
                En el Hospital San José creemos en el valor de nuestros profesionales. Por eso, ofrecemos un
                entorno de trabajo que promueve el desarrollo personal y profesional, con un enfoque centrado
                en la calidad asistencial y el trabajo en equipo.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#4aa3c1] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Formación continua y desarrollo de carrera</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#4aa3c1] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Tecnología e infraestructuras de última generación</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#4aa3c1] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Trabajo multidisciplinar con profesionales de referencia</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#4aa3c1] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Conciliación de la vida personal y profesional</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#4aa3c1] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Paquete de beneficios sociales competitivo</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                  alt="Equipo médico"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#156582] to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Nuestro mayor valor es nuestro equipo</h3>
                  <p className="text-white text-opacity-90">
                    Más de 500 profesionales trabajando juntos por la salud de nuestros pacientes
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#f0f9fd]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#156582] mb-4">Beneficios para empleados</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ofrecemos un completo paquete de beneficios diseñado para mejorar la calidad de vida de nuestros
              profesionales y reconocer su dedicación y compromiso.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#156582] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#156582] mb-4">Posiciones Abiertas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Descubre las oportunidades laborales disponibles actualmente en nuestro hospital.
              Seleccionamos profesionales comprometidos con la excelencia y la atención de calidad.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f0f9fd] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#156582]">{position.title}</h3>
                      <p className="text-gray-600">{position.department}</p>
                    </div>
                    <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                      <span className="inline-block bg-[#e6f5fa] text-[#156582] px-3 py-1 rounded-full text-sm">
                        {position.type}
                      </span>
                      <span className="inline-block bg-[#e6f5fa] text-[#156582] px-3 py-1 rounded-full text-sm">
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{position.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#156582] mb-2">Requisitos:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      {position.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-[#156582] hover:bg-[#0c4054] text-white px-6 py-2 rounded-md transition-colors duration-300">
                      Aplicar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="bg-[#4aa3c1] hover:bg-[#3a8ca8] text-white px-8 py-3 rounded-md transition-colors duration-300">
              Ver todas las vacantes
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-[#e6f5fa] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#156582] mb-4">Lo que dicen nuestros profesionales</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Conoce las experiencias de quienes ya forman parte de nuestro equipo y descubre por qué
              el Hospital San José es un excelente lugar para desarrollar tu carrera profesional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-bold text-[#156582]">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#156582] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para unirte a nuestro equipo?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Si buscas un entorno profesional donde crecer y contribuir a mejorar la salud de los pacientes,
              el Hospital San José es tu lugar. Envíanos tu CV y forma parte de nuestra comunidad.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#156582] hover:bg-gray-100 px-8 py-4 rounded-md font-medium transition-colors duration-300">
                Enviar CV
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-[#156582] px-8 py-4 rounded-md font-medium transition-colors duration-300">
                Ver ofertas de empleo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Carreras;
