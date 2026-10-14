export default function WhatsAppFloat() {
    return (
        <a href="https://wa.me/573117083648?text=Hola!%20Vengo%20desde%20el%20sitio%20web%20y%20me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa%20para%20elegir%20mi%20colch%C3%B3n."
           target="_blank"
           rel="noopener noreferrer"
           className="fixed bottom-6 right-6 z-50 bg-wa-green hover:bg-wa-hover text-white p-4 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 transform hover:scale-110 group cursor-pointer"
           aria-label="Contactar por WhatsApp">
            <i className="fa-brands fa-whatsapp text-3xl"></i>
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-medium pr-1 text-sm">
                ¡Chatea con nosotros!
            </span>
        </a>
    )
}
