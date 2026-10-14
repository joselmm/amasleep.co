const STEPS = [
    {
        number: 1,
        color: 'bg-brand-500',
        title: 'Explora',
        text: 'Revisa nuestro catálogo en el sitio web y selecciona el modelo con el nivel de firmeza que buscas.',
    },
    {
        number: 2,
        color: 'bg-wa-green',
        title: 'Cotiza por WhatsApp',
        text: 'Haz clic en "Cotizar" en cualquier producto para comunicarte directamente con nuestros asesores.',
    },
    {
        number: 3,
        color: 'bg-brand-500',
        title: 'Confirma',
        text: 'Te ayudamos a elegir las medidas ideales (100x190, 120x190, 140x190, 160x190, 200x200) y el medio de pago.',
    },
    {
        number: 4,
        color: 'bg-brand-500',
        title: 'Recibe',
        text: 'Despachamos tu pedido para que empieces a disfrutar de un descanso verdaderamente reparador.',
    },
]

export default function HowToBuy() {
    return (
        <section id="como-comprar" className="py-16 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-brand-500 font-bold uppercase text-xs tracking-widest">Atención Rápida y Personalizada</span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mt-1">¿CÓMO COMPRAR TU COLCHÓN?</h2>
                    <p className="text-gray-600 text-sm mt-2">Comprar con nosotros es muy sencillo. Solo sigue estos 4 pasos y recibe el descanso que te mereces.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STEPS.map((step) => (
                        <div key={step.number} className="bg-brand-50/50 p-6 rounded-2xl text-center border border-brand-100 relative group hover:bg-brand-50 transition-colors">
                            <div className={`w-14 h-14 ${step.color} text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-md`}>
                                {step.number}
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-600">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
