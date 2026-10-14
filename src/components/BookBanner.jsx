export default function BookBanner() {
    return (
        <section className="bg-brand-500 text-white py-8 border-b border-brand-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex bg-white/10 p-4 rounded-2xl">
                            <i className="fa-solid fa-box-archive text-3xl text-brand-100"></i>
                        </div>
                        <div>
                            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Innovación ama</span>
                            <h2 className="text-xl sm:text-2xl font-bold mt-1">LA COMODIDAD DE SIEMPRE, AHORA MÁS FÁCIL DE LLEVAR</h2>
                            <p className="text-brand-100 text-sm">Diseño Tipo Libro Plegable disponible en referencias Deluxe y Luxury. Fácil transporte y acceso a espacios reducidos.</p>
                        </div>
                    </div>
                    <a href="https://wa.me/573117083648?text=Hola,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20el%20Dise%C3%B1o%20Plegable%20Tipo%20Libro."
                       target="_blank"
                       rel="noopener noreferrer"
                       className="whitespace-nowrap bg-white text-brand-700 hover:bg-brand-50 font-bold px-6 py-3 rounded-xl shadow transition-colors text-sm">
                        Consultar Referencias
                    </a>
                </div>
            </div>
        </section>
    )
}
