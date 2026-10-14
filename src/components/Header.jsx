import { useState } from 'react'

const NAV_LINKS = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#catalogo', label: 'Productos' },
    { href: '#como-comprar', label: '¿Cómo Comprar?' },
    { href: '#nosotros', label: 'Empresa' },
    { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-40 w-full glass-nav border-b border-brand-100 shadow-sm transition-all duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* BRAND LOGO */}
                    <a href="#" className="flex items-center gap-3 group">
                        <img src="/amasleep_logo.png" alt="ama sleep" className="w-12 h-12 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-black tracking-wider text-brand-600 leading-none">ama</span>
                            <span className="text-xs font-semibold tracking-widest text-brand-400 uppercase">sleep</span>
                            <span className="text-[11px] font-medium italic text-brand-500 tracking-wide leading-none mt-1">Ideal Para Soñar</span>
                        </div>
                    </a>

                    {/* DESKTOP MENU */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <a key={link.href} href={link.href} className="text-gray-700 hover:text-brand-500 font-medium transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA HEADER BUTTON */}
                    <div className="hidden lg:flex items-center">
                        <a href="https://wa.me/573117083648?text=Hola,%20quisiera%20asesor%C3%ADa%20personalizada%20sobre%20sus%20colchones."
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                            <i className="fa-brands fa-whatsapp text-lg"></i>
                            <span>Asesoría Directa</span>
                        </a>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button onClick={() => setMenuOpen((open) => !open)}
                            className="md:hidden text-brand-700 hover:text-brand-500 focus:outline-none p-2"
                            aria-label="Abrir menú">
                        <i className="fa-solid fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>

            {/* MOBILE NAV DROPDOWN */}
            {menuOpen && (
                <div className="md:hidden bg-white border-b border-brand-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700 hover:text-brand-500 font-medium">
                            {link.label}
                        </a>
                    ))}
                    <a href="https://wa.me/573117083648?text=Hola,%20quisiera%20cotizar%20un%20producto."
                       target="_blank"
                       rel="noopener noreferrer"
                       className="w-full bg-wa-green text-white text-center font-semibold py-3 rounded-xl shadow flex items-center justify-center gap-2 mt-4">
                        <i className="fa-brands fa-whatsapp text-xl"></i>
                        <span>Cotizar por WhatsApp</span>
                    </a>
                </div>
            )}
        </header>
    )
}
