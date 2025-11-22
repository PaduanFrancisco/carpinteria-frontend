import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Admin from './pages/Admin'

function Home() {
  const [products] = useState([
    { nombre: "Mesa Familiar", precio: 680000, tipomadera: "Roble", medidas: "200x90 cm" },
    { nombre: "Silla Érica", precio: 125000, tipomadera: "Pino", medidas: "45x90 cm" },
    { nombre: "Rack TV", precio: 420000, tipomadera: "Paraíso", medidas: "150x40 cm" },
    { nombre: "Biblioteca Alta", precio: 890000, tipomadera: "Roble", medidas: "100x200 cm" },
  ])

  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <section className="py-20 px-6">
        <h2 className="text-center text-5xl md:text-7xl font-black text-amber-900 mb-16">
          NUESTROS PRODUCTOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </section>
    </main>
  )
}

function App() {
  const isAdmin = window.location.pathname === '/admin'

  return (
    <>
      <Navbar />
      {isAdmin ? <Admin /> : <Home />}
    </>
  )
}

export default App