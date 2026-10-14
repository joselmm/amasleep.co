export default function Hero({ onOpenProduct }) {
    return (
        <section id="inicio" className="hero-gradient py-12 lg:py-20 overflow-hidden relative border-b border-brand-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
                            <i className="fa-solid fa-bed"></i> Colección Black &amp; White
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                            TU DESCANSO IDEAL, <br className="hidden sm:inline" />
                            <span className="text-brand-500">A UN CLIC DE DISTANCIA</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                            Diseñados para ofrecer el equilibrio perfecto entre confort, soporte ortopédico y durabilidad. Espumas de alta densidad y resortes de máxima calidad para un sueño reparador.
                        </p>

                        {/* HERO ACTION BUTTONS */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <a href="https://wa.me/573117083648?text=Hola!%20Me%20interesa%20recibir%20informaci%C3%B3n%20y%20cotizar%20un%20colch%C3%B3n%20ama%20sleep."
                               target="_blank"
                               rel="noopener noreferrer"
                               className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-lg">
                                <i className="fa-brands fa-whatsapp text-2xl text-wa-green bg-white rounded-full p-1"></i>
                                <span>COTIZA POR WHATSAPP AHORA</span>
                            </a>
                            <a href="#catalogo"
                               className="w-full sm:w-auto bg-white hover:bg-brand-50 text-brand-600 border-2 border-brand-200 font-semibold px-8 py-4 rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2">
                                <span>Ver Catálogo Completo</span>
                                <i className="fa-solid fa-arrow-down"></i>
                            </a>
                        </div>

                        {/* HIGHLIGHT FEATURES */}
                        <div className="pt-8 grid grid-cols-3 gap-4 border-t border-brand-200/60 max-w-lg mx-auto lg:mx-0">
                            <div>
                                <p className="text-2xl font-black text-brand-600">Hasta 5 años</p>
                                <p className="text-xs text-gray-500 font-medium">Garantía Directa</p>
                            </div>
                            <div>
                                <p className="text-2xl font-black text-brand-600">Cassata / Resortes</p>
                                <p className="text-xs text-gray-500 font-medium">Tecnología Certificada</p>
                            </div>
                            <div>
                                <p className="text-2xl font-black text-brand-600">Diseño Plegable</p>
                                <p className="text-xs text-gray-500 font-medium">Opción Tipo Libro</p>
                            </div>
                        </div>
                    </div>

                    {/* HERO IMAGE / DISPLAY */}
                    <div className="lg:col-span-5 relative flex justify-center">
                        <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-brand-100">
                            <div className="absolute -top-4 -right-4 bg-brand-500 text-white text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full shadow-lg">
                                Destacado
                            </div>
                            <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80"
                                 alt="Colchón Luxury White Ama Sleep"
                                 className="rounded-2xl w-full h-64 object-cover mb-4" />
                            <div className="space-y-2">
                                <span className="bg-brand-50 text-brand-600 text-xs font-bold px-2.5 py-1 rounded-md">Línea Luxury</span>
                                <h3 className="text-xl font-bold text-gray-900">Colchón Luxury White / Black</h3>
                                <p className="text-sm text-gray-600">Firmeza que se siente, confort que perdura. Doble Pillow Top &amp; Espuma Cassata.</p>
                                <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                                    <span className="text-xs font-semibold text-gray-500"><i className="fa-solid fa-shield-halved text-brand-500"></i> 5 Años Garantía</span>
                                    <button onClick={() => onOpenProduct('luxury-white')} className="text-brand-500 hover:text-brand-700 font-semibold text-sm flex items-center gap-1">
                                        Ver detalles <i className="fa-solid fa-chevron-right text-xs"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
