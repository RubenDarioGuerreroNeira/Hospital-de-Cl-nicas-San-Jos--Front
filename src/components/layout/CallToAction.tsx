import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-16 bg-[#e6f5fa]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarjeta de emergencia */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-[#d9534f] text-white p-6">
              <h3 className="text-2xl font-bold mb-2">¿Emergencia?</h3>
              <p className="text-white opacity-90">Nuestra sala de emergencias está abierta las 24 horas del día.</p>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#d9534f] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-xl font-bold">+34 912 123 456</span>
              </div>
              <p className="text-gray-600 mb-4">En situaciones potencialmente mortales, llame inmediatamente al 112.</p>
              <button className="bg-[#d9534f] hover:bg-[#c9302c] text-white px-4 py-2 rounded transition-colors duration-300 w-full">
                Información de emergencia
              </button>
            </div>
          </motion.div>

          {/* Tarjeta de citas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-[#4aa3c1] text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Concertar una cita</h3>
              <p className="text-white opacity-90">Programe fácilmente una cita con nosotros.</p>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4aa3c1] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xl font-bold">Online o por teléfono</span>
              </div>
              <p className="text-gray-600 mb-4">Lunes a viernes de 8:00 a 18:00 horas en el +34 912 123 456</p>
              <button className="bg-[#4aa3c1] hover:bg-[#3a8ca8] text-white px-4 py-2 rounded transition-colors duration-300 w-full">
                Reservar cita
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
