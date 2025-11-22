// src/pages/Admin.tsx
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

type Product = {
  id?: number
  nombre: string
  precio: string | number
  tipomadera?: string
  medidas?: string
}

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [form, setForm] = useState({ nombre: '', precio: '', tipomadera: '', medidas: '' })

  // Password simple (cámbiala por la que quieras)
  const ADMIN_PASS = "carpinteria2025"

  useEffect(() => {
    if (isLoggedIn) {
      fetch('https://carpinteria-backend.vercel.app/api/productos')
        .then(r => r.json())
        .then(data => setProducts(Array.isArray(data) ? data : []))
        .catch(() => setProducts([]))
    }
  }, [isLoggedIn])

  const login = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASS) setIsLoggedIn(true)
  }

  const addProduct = (e: React.FormEvent) => {
    e.preventDefault()
    const newProduct = {
      nombre: form.nombre,
      precio: Number(form.precio),
      tipomadera: form.tipomadera || "Madera",
      medidas: form.medidas || "N/D"
    }
    setProducts([...products, { ...newProduct, id: Date.now() }])
    setForm({ nombre: '', precio: '', tipomadera: '', medidas: '' })
    // Aquí mañana conectarás POST a tu backend real
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-amber-900 flex items-center justify-center">
        <form onSubmit={login} className="bg-white p-12 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-black text-amber-800 mb-8 text-center">PANEL ADMIN</h2>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full px-6 py-4 text-xl border-2 border-amber-600 rounded-xl mb-6"
          />
          <button className="w-full bg-amber-700 hover:bg-amber-600 text-white font-bold py-4 text-xl rounded-xl">
            INGRESAR
          </button>
        </form>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-amber-800 to-orange-900 pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-black text-white mb-10">PANEL ADMINISTRADOR</h1>

          {/* Form agregar producto */}
          <form onSubmit={addProduct} className="bg-white p-8 rounded-2xl shadow-2xl mb-12">
            <div className="grid md:grid-cols-4 gap-6">
              <input placeholder="Nombre" required value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} className="px-4 py-3 border-2 border-amber-600 rounded-xl" />
              <input placeholder="Precio" type="number" required value={form.precio} onChange={e => setForm({...form, precio: e.target.value})} className="px-4 py-3 border-2 border-amber-600 rounded-xl" />
              <input placeholder="Tipo madera" value={form.tipomadera} onChange={e => setForm({...form, tipomadera: e.target.value})} className="px-4 py-3 border-2 border-amber-600 rounded-xl" />
              <input placeholder="Medidas" value={form.medidas} onChange={e => setForm({...form, medidas: e.target.value})} className="px-4 py-3 border-2 border-amber-600 rounded-xl" />
            </div>
            <button className="mt-6 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-12 rounded-xl text-xl">
              + AGREGAR PRODUCTO
            </button>
          </form>

          {/* Lista de productos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </>
  )
}