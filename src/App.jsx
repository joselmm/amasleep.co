import { useCallback, useState } from 'react'
import { products } from './data/products.js'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import BookBanner from './components/BookBanner.jsx'
import Catalog from './components/Catalog.jsx'
import HowToBuy from './components/HowToBuy.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProductModal from './components/ProductModal.jsx'

export default function App() {
    const [selectedProduct, setSelectedProduct] = useState(null)

    const openProduct = useCallback((id) => {
        setSelectedProduct(products.find((p) => p.id === id) || null)
    }, [])

    const closeProduct = useCallback(() => setSelectedProduct(null), [])

    return (
        <>
            <WhatsAppFloat />
            <Header />
            <main className="flex-grow">
                <Hero onOpenProduct={openProduct} />
                <BookBanner />
                <Catalog onOpenProduct={openProduct} />
                <HowToBuy />
                <About />
                <Contact />
            </main>
            <Footer />
            <ProductModal product={selectedProduct} onClose={closeProduct} />
        </>
    )
}
