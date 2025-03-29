const Footer = () => {
  return (
    <footer className="bg-[#2c7a96] text-white">
      {/* Footer Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Información del Hospital */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hospital San José</h3>
            <p className="mb-2">Hermanas del Redentor</p>
            <address className="not-italic mb-4">
              Calle Principal 123<br />
              28001 Madrid<br />
              España
            </address>
            <p className="mb-1">Tel: +34 912 123 456</p>
            <p>Email: info@hospital-sanjose.es</p>
          </div>

          {/* Columna 2: Accesos rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Acceso rápido</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#69b1cd] transition-colors">Urgencias</a></li>
              <li><a href="#" className="hover:text-[#69b1cd] transition-colors">Horario de visitas</a></li>
              <li><a href="#" className="hover:text-[#69b1cd] transition-colors">Cómo llegar</a></li>
              <li><a href="#" className="hover:text-[#69b1cd] transition-colors">Ofertas de empleo</a></li>
              <li><a href="#" className="hover:text-[#69b1cd] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Departamentos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Especialidades</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#69b1cd] transition-colors">Medicina Interna</a></li>
              <li><a href="#" className="hover:text-[#69b1cd] transition-colors">Cirugía</a></li>
              <li><a href="#" className="hover:text-[#69b1cd] transition-colors">Ortopedia</a></li>
              <li><a href="#" className="hover:text-[#69b1cd] transition-colors">Cardiología</a></li>
              <li><a href="#" className="hover:text-[#69b1cd] transition-colors">Ginecología</a></li>
            </ul>
          </div>

          {/* Columna 4: Horario de apertura */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horarios</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>08:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>10:00 - 16:00</span>
              </li>
              <li className="mt-4 font-bold">
                Urgencias: 24h
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="bg-[#206683] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Hospital San José. Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#69b1cd] transition-colors">Aviso legal</a>
              <a href="#" className="hover:text-[#69b1cd] transition-colors">Política de privacidad</a>
              <a href="#" className="hover:text-[#69b1cd] transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
