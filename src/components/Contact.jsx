export default function Contact() {
    return (
        <section id="contacto" className="py-16 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="space-y-6">
                        <span className="text-brand-500 font-bold uppercase text-xs tracking-widest">Cotizaciones Directas</span>
                        <h2 className="text-3xl font-extrabold text-gray-900">¿Tienes dudas o necesitas una medida especial?</h2>
                        <p className="text-gray-600">
                            Nuestro equipo está listo para asesorarte en la elección del colchón perfecto según tus necesidades de peso, postura y preferencia de firmeza.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-wa-green/10 text-wa-green rounded-xl flex items-center justify-center text-xl">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-500 uppercase">Línea Directa / WhatsApp</p>
                                    <a href="https://wa.me/573117083648" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-gray-900 hover:text-brand-500">
                                        311 708 36 48
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-50 text-brand-500 rounded-xl flex items-center justify-center text-xl">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-500 uppercase">Correo Electrónico</p>
                                    <a href="mailto:euroespumas@gmail.com" className="text-lg font-bold text-gray-900 hover:text-brand-500">
                                        euroespumas@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-50 text-brand-500 rounded-xl flex items-center justify-center text-xl">
                                    <i className="fa-solid fa-building"></i>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-500 uppercase">Empresa</p>
                                    <p className="text-base font-bold text-gray-900">Ama Sleep</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QUICK CONTACT CARD WITH WHATSAPP ACTION */}
                    <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Cotización Inmediata por WhatsApp</h3>
                            <p className="text-sm text-gray-600 mb-6">
                                Haz clic en el botón de abajo para iniciar una conversación automatizada con nuestro canal de ventas.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-sm text-gray-700">
                                    <i className="fa-solid fa-check-circle text-wa-green text-lg"></i>
                                    <span>Respuesta rápida y asesoría experta</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700">
                                    <i className="fa-solid fa-check-circle text-wa-green text-lg"></i>
                                    <span>Precios directos de fábrica</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700">
                                    <i className="fa-solid fa-check-circle text-wa-green text-lg"></i>
                                    <span>Información detallada de envíos a tu ciudad</span>
                                </div>
                            </div>
                        </div>

                        <a href="https://wa.me/573117083648?text=Hola,%20me%20gustar%C3%ADa%20recibir%20el%20cat%C3%A1logo%20de%20precios%20y%20asesor%C3%ADa."
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-full bg-wa-green hover:bg-wa-hover text-white text-center font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 text-base">
                            <i className="fa-brands fa-whatsapp text-2xl"></i>
                            <span>CHATEAR AHORA CON UN ASESOR</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}
