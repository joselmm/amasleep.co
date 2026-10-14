import { useMemo, useState } from 'react'
import { products } from '../data/products.js'
import ProductCard from './ProductCard.jsx'

const FILTERS = [
    { key: 'todos', label: 'Todos' },
    { key: 'colchones', label: 'Colchones' },
    { key: 'colchonetas', label: 'Colchonetas' },
    { key: 'black', label: 'Línea Black' },
    { key: 'white', label: 'Línea White' },
]

export default function Catalog({ onOpenProduct }) {
    const [activeFilter, setActiveFilter] = useState('todos')

    const filteredProducts = useMemo(() => {
        if (activeFilter === 'todos') return products
        if (activeFilter === 'colchones' || activeFilter === 'colchonetas') {
            return products.filter((p) => p.category === activeFilter)
        }
        return products.filter((p) => p.line === activeFilter)
    }, [activeFilter])

    return (
        <section id="catalogo" className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">NUESTRO PORTAFOLIO DE DESCANSO</h2>
                    <p className="text-gray-600 mt-3 text-base">
                        Encuentra el colchón o colchoneta ideal para tus necesidades. Espumas de alta densidad, sistemas ortopédicos de resortes y acabados de lujo.
                    </p>

                    {/* FILTER BUTTONS */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                        {FILTERS.map((filter) => {
                            const isActive = activeFilter === filter.key
                            return (
                                <button
                                    key={filter.key}
                                    onClick={() => setActiveFilter(filter.key)}
                                    className={
                                        isActive
                                            ? 'bg-brand-500 text-white font-medium px-5 py-2.5 rounded-full text-sm shadow-sm transition-all hover:bg-brand-600'
                                            : 'bg-white text-gray-700 hover:bg-brand-50 font-medium px-5 py-2.5 rounded-full text-sm border border-gray-200 transition-all'
                                    }
                                >
                                    {filter.label}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} onOpenProduct={onOpenProduct} />
                    ))}
                </div>

            </div>
        </section>
    )
}
