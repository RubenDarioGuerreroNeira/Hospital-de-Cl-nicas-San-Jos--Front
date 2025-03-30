import { motion } from 'framer-motion';


// Animación para elementos que aparecen al hacer scroll
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Datos de los departamentos médicos
const departments = [
  {
    id: 1,
    name: 'Cardiología',
    description: 'Diagnóstico y tratamiento de enfermedades del corazón con tecnología de vanguardia.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    procedures: ['Ecocardiografía', 'Prueba de esfuerzo', 'Cateterismo cardíaco', 'Monitorización Holter']
  },
  {
    id: 2,
    name: 'Neurología',
    description: 'Especialistas en el diagnóstico y tratamiento de trastornos del sistema nervioso.',
    image: 'https://images.unsplash.com/photo-1559757175-7b21e5afae2a?q=80&w=2071&auto=format&fit=crop',
    procedures: ['Electroencefalograma', 'Resonancia magnética cerebral', 'Punción lumbar', 'Evaluación cognitiva']
  },
  {
    id: 3,
    name: 'Pediatría',
    description: 'Atención médica integral y especializada para bebés, niños y adolescentes.',
    image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=2070&auto=format&fit=crop',
    procedures: ['Revisiones pediátricas', 'Vacunación', 'Evaluación del desarrollo', 'Tratamiento de enfermedades infantiles']
  },
  {
    id: 4,
    name: 'Traumatología',
    description: 'Tratamiento de lesiones y trastornos del sistema musculoesquelético.',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop',
    procedures: ['Artroscopia', 'Rehabilitación física', 'Cirugía ortopédica', 'Tratamiento de fracturas']
  }
];

// Datos del personal sanitario destacado
const featuredStaff = [
  {
    id: 1,
    name: 'Dra. Elena Martínez',
    role: 'Jefa de Cardiología',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop',
    bio: 'Especializada en cardiología intervencionista con más de 15 años de experiencia.'
  },
  {
    id: 2,
    name: 'Dr. Carlos Jiménez',
    role: 'Director Médico',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
    bio: 'Médico internista con amplia experiencia en gestión hospitalaria y medicina preventiva.'
  },
  {
    id: 3,
    name: 'Enfermera Ana López',
    role: 'Supervisora de Enfermería',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2264&auto=format&fit=crop',
    bio: 'Más de 20 años dedicados a la enfermería y a la formación de nuevos profesionales.'
  }
];

const MedicinaEnfermeria = () => {
  return (
    <>


      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#156582] to-[#2c8cb0] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(255, 255, 255, 0.05)" fillOpacity="1" d="M0,160L48,138.7C96,117,192,75,288,69.3C384,64,480,96,576,133.3C672,171,768,213,864,213.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Medicina y Enfermería</h1>
            <p className="text-xl mb-8">
              En el Hospital San José, ofrecemos atención médica integral con los más altos estándares de
              calidad. Nuestro equipo de profesionales altamente cualificados trabaja con la tecnología
              más avanzada para garantizar los mejores resultados para nuestros pacientes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#156582] hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300">
                Pedir cita
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-[#156582] px-6 py-3 rounded-md font-medium transition-colors duration-300">
                Contactar con un especialista
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-[#f0f9fd]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#156582] mb-4">Nuestros Departamentos Médicos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Contamos con departamentos especializados para atender todas las necesidades médicas de nuestros pacientes,
              con instalaciones modernas y equipamiento de última generación.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#156582] mb-3">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#156582] mb-2">Procedimientos principales:</h4>
                    <ul className="ml-5 list-disc text-gray-600">
                      {dept.procedures.map((procedure, i) => (
                        <li key={i}>{procedure}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-2 text-[#156582] hover:text-[#0c4054] font-medium flex items-center">
                    Saber más
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Staff Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#156582] mb-4">Personal Sanitario Destacado</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo está formado por profesionales de la salud altamente cualificados y comprometidos
              con proporcionar la mejor atención posible a todos nuestros pacientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStaff.map((person, index) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f0f9fd] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#156582] mb-1">{person.name}</h3>
                  <p className="text-[#2c8cb0] font-semibold mb-3">{person.role}</p>
                  <p className="text-gray-600">{person.bio}</p>
                  <button className="mt-4 text-[#156582] hover:text-[#0c4054] font-medium flex items-center">
                    Ver perfil completo
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient-Centered Care Section */}
      <section className="py-20 bg-gradient-to-b from-[#e6f5fa] to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#156582] mb-6">Enfoque Centrado en el Paciente</h2>
              <p className="text-gray-600 mb-4">
                En el Hospital San José, el paciente es lo primero. Nuestro enfoque centrado en el paciente
                garantiza que cada persona reciba un tratamiento personalizado y humano.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#2c8cb0] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Atención médica personalizada y adaptada a las necesidades individuales</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#2c8cb0] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Comunicación clara y transparente sobre los tratamientos y opciones</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#2c8cb0] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Enfoque multidisciplinar con especialistas de diferentes áreas</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#2c8cb0] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Seguimiento personalizado después del tratamiento</span>
                </li>
              </ul>
              <button className="mt-2 bg-[#156582] hover:bg-[#0c4054] text-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
                Nuestra filosofía de cuidado
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2880&auto=format&fit=crop"
                  alt="Médico con paciente"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-700 font-bold">4.9/5</span>
                </div>
                <p className="text-gray-600 italic text-sm">
                  "El equipo médico del Hospital San José me ha tratado con profesionalidad y humanidad. Su atención personalizada ha sido fundamental en mi recuperación."
                </p>
                <p className="mt-2 font-semibold text-[#156582]">- María García, paciente</p>
              </div>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesita atención médica especializada?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Nuestro equipo de profesionales está preparado para ofrecerle la atención médica
              que necesita. No dude en contactar con nosotros para concertar una cita.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#156582] hover:bg-gray-100 px-8 py-4 rounded-md font-medium transition-colors duration-300">
                Solicitar cita
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-[#156582] px-8 py-4 rounded-md font-medium transition-colors duration-300">
                Ver especialidades
              </button>
            </div>
          </motion.div>
        </div>
      </section>


    </>
  );
};

export default MedicinaEnfermeria;
