export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">

                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center p-1">
                                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white" strokeWidth="4">
                                    <circle cx="50" cy="50" r="44" />
                                    <circle cx="50" cy="42" r="32" fill="#5375ba" />
                                    <path d="M50,48 C50,48 38,36 38,29 C38,24 42,20 47,22 C50,24 50,24 50,24 C50,24 50,24 53,22 C58,20 62,24 62,29 C62,36 50,48 50,48 Z" fill="white" />
                                </svg>
                            </div>
                            <span className="text-2xl font-black tracking-wider text-white">ama <span className="text-brand-300 font-normal">sleep</span></span>
                        </div>
                        <p className="text-gray-400 text-sm max-w-md">
                            Fabricación y Comercialización de Espuma Flexible de Poliuretano, Cassata y Productos para el descanso de alta calidad.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="#catalogo" className="hover:text-white transition-colors">Colchones &amp; Colchonetas</a></li>
                            <li><a href="#como-comprar" className="hover:text-white transition-colors">¿Cómo Comprar?</a></li>
                            <li><a href="#nosotros" className="hover:text-white transition-colors">Sobre Ama Sleep</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Contacto Directo</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><i className="fa-solid fa-phone text-brand-400 mr-2"></i> 311 708 36 48</li>
                            <li><i className="fa-solid fa-envelope text-brand-400 mr-2"></i> euroespumas@gmail.com</li>
                            <li><i className="fa-solid fa-shield text-brand-400 mr-2"></i> Productos con Garantía Oficial</li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                    <p>&copy; 2026 ama sleep. Todos los derechos reservados.</p>
                    <p className="flex items-center gap-1">
                        Atención principal vía WhatsApp <i className="fa-brands fa-whatsapp text-wa-green"></i>
                    </p>
                </div>
            </div>
        </footer>
    )
}
