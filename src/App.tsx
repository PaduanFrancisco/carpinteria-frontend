import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Admin from './pages/Admin'

function Home() {
  // ← Aquí está el fix: le decimos a TS el tipo correcto
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    fetch('https://carpinteria-backend.vercel.app/api/productos')
      .then(res => res.json())
      .then(data => {
        const array = Array.isArray(data) ? data : [data]
        setProducts(array)
      })
      .catch(() => setProducts([]))
  }, [])

  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <section className="py-20 px-6">
        <h2 className="text-center text-5xl md:text-7xl font-black text-amber-900 mb-16">
          NUESTROS PRODUCTOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.length === 0 ? (
            <p className="col-span-full text-center text-3xl text-amber-900">
              Cargando productos...
            </p>
          ) : (
            products.map((p) => (
              <ProductCard
                key={p.id}
                product={{
                  nombre: p.nombre,
                  precio: Number(p.precio),
                  tipomadera: p.tipomadera,
                  medidas: p.medidas
                }}
              />
            ))
          )}
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