import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Admin from './pages/Admin'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://carpinteria-backend.vercel.app/api/productos')
      .then(res => res.json())
      .then(data => {
        console.log('Datos del backend:', data) // para que veas qué llega
        setProducts(data)
      })
      .catch(err => console.error('Error:', err))
  }, [])

  // Si todavía no cargó o hay error, mostramos algo para que no quede en blanco
  if (products.length === 0) {
    return (
      <main className="pt-24 min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 flex items-center justify-center">
        <p className="text-2xl text-amber-900">Cargando productos...</p>
      </main>
    )
  }

  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <section className="py-20 px-6">
        <h2 className="text-center text-5xl md:text-7xl font-black text-amber-900 mb-16">
          NUESTROS PRODUCTOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              product={{
                nombre: product.nombre || 'Sin nombre',
                precio: Number(product.precio),
                tipomadera: product.tipomadera || product.tipomadera || 'Madera',
                medidas: product.medidas || 'Medidas no especificadas'
              }}
            />
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