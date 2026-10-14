import { useEffect } from 'react'
import { WHATSAPP_NUMBER } from '../data/products.js'

export default function ProductModal({ product, onClose }) {
    useEffect(() => {
        if (!product) return
        document.body.style.overflow = 'hidden'
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            document.body.style.overflow = 'auto'
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [product, onClose])

    if (!product) return null

    const waMessage = encodeURIComponent(`Hola, quisiera solicitar cotización y asesoría personalizada sobre el ${product.name}.`)
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`

    return (
        <div id="product-modal"
             className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
             onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
            <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden relative my-8">

                {/* CLOSE BUTTON */}
                <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center transition-colors">
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button>

                <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <div>
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-2xl shadow-md mb-4" />
                            <div className="bg-brand-50 p-4 rounded-2xl border border-brand-100 space-y-2">
                                <h4 className="font-bold text-brand-800 text-sm">Medidas Disponibles:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes.map((size) => (
                                        <span key={size} className="bg-white border border-brand-200 text-brand-700 text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">{size} cm</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="bg-brand-100 text-brand-700 text-xs font-bold px-2.5 py-1 rounded-md uppercase">{product.pillow}</span>
                                    <span className="text-xs font-bold text-gray-500"><i className="fa-solid fa-shield text-brand-500"></i> {product.warranty} Garantía</span>
                                </div>
                                <h3 className="text-2xl font-extrabold text-gray-900 mt-2">{product.name}</h3>
                                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                            </div>

                            <div className="space-y-2 border-t border-b border-gray-100 py-3 text-sm text-gray-700">
                                <p><strong>Altura total:</strong> {product.height}</p>
                                <p><strong>Nivel de firmeza:</strong> {product.firmness}</p>
                                <p><strong>Capacidad de soporte:</strong> {product.weight}</p>
                                {product.optionFoldable && (
                                    <p className="text-emerald-700 font-semibold"><i className="fa-solid fa-book-open mr-1"></i> Disponible en formato Plegable Tipo Libro (Fácil Transporte)</p>
                                )}
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 text-sm mb-2">Tecnología y Confort en cada capa:</h4>
                                <ul className="space-y-1.5 text-xs text-gray-600">
                                    {product.layers.map((layer, index) => (
                                        <li key={index} className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-500"></i> {layer}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-2">
                                <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full bg-wa-green hover:bg-wa-hover text-white font-bold py-3.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm transition-colors">
                                    <i className="fa-brands fa-whatsapp text-xl"></i>
                                    <span>Solicitar Cotización por WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
