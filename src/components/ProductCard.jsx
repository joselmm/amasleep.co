import { WHATSAPP_NUMBER } from '../data/products.js'

export default function ProductCard({ product, onOpenProduct }) {
    const waMessage = encodeURIComponent(`Hola, quisiera cotizar el ${product.name} (Garantía ${product.warranty}, Altura ${product.height}).`)
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`

    return (
        <div className="bg-white rounded-3xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div>
                {/* CARD HEADER & IMAGE */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute top-4 left-4 flex flex-col gap-1">
                        <span className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                            {product.height}
                        </span>
                        {product.optionFoldable && (
                            <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">Plegable Tipo Libro</span>
                        )}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-brand-700 text-xs font-bold px-3 py-1 rounded-lg shadow">
                        <i className="fa-solid fa-shield-halved text-brand-500 mr-1"></i> {product.warranty}
                    </div>
                </div>

                {/* CARD BODY */}
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">{product.pillow}</span>
                        <span className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded font-medium">{product.firmness}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">{product.description}</p>

                    <div className="text-xs text-gray-500 space-y-1 border-t border-gray-100 pt-3">
                        <p><strong className="text-gray-700">Soporte:</strong> {product.weight}</p>
                        <p><strong className="text-gray-700">Sistema:</strong> {product.system}</p>
                    </div>
                </div>
            </div>

            {/* CARD FOOTER BUTTONS */}
            <div className="p-6 pt-0 space-y-2">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full bg-wa-green hover:bg-wa-hover text-white font-bold py-3 px-4 rounded-xl shadow flex items-center justify-center gap-2 transition-colors text-sm">
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                    <span>Cotizar por WhatsApp</span>
                </a>
                <button onClick={() => onOpenProduct(product.id)} className="w-full bg-brand-50 hover:bg-brand-100 text-brand-700 font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors">
                    Ver Ficha Técnica Completa
                </button>
            </div>
        </div>
    )
}
