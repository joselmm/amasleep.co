export default function About() {
    return (
        <section id="nosotros" className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 text-brand-500 font-bold text-sm tracking-wider uppercase">
                            <i className="fa-solid fa-industry"></i> Ama Sleep
                        </div>
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Respaldo, Calidad y Tecnología en Espumas
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            En <strong>ama sleep</strong> somos especialistas en la fabricación y comercialización de Espuma Flexible de Poliuretano, Cassata de alta densidad y productos certificados para el descanso.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Cada modelo de nuestro portafolio ha sido meticulosamente estructurado combinando capas de espuma adaptable con soporte extra firme y sistemas ortopédicos para cuidar tu columna.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-brand-50 rounded-xl border border-brand-100">
                                <i className="fa-solid fa-certificate text-brand-500 text-xl mb-1"></i>
                                <h4 className="font-bold text-gray-900 text-sm">Alta Calidad</h4>
                                <p className="text-xs text-gray-500">Materiales resistentes de larga durabilidad.</p>
                            </div>
                            <div className="p-4 bg-brand-50 rounded-xl border border-brand-100">
                                <i className="fa-solid fa-truck-fast text-brand-500 text-xl mb-1"></i>
                                <h4 className="font-bold text-gray-900 text-sm">Envíos Seguros</h4>
                                <p className="text-xs text-gray-500">Logística ágil y atención personalizada.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80"
                             alt="Fábrica y Confort Ama Sleep"
                             className="rounded-2xl shadow-lg w-full h-80 object-cover" />
                        <div className="absolute -bottom-6 -left-6 bg-brand-500 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                            <p className="text-2xl font-black">100%</p>
                            <p className="text-xs text-brand-100">Calidad en descanso garantizada</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
