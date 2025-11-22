// src/components/ProductCard.tsx
type Product = {
  id?: number
  nombre: string
  precio: string | number
  tipomadera?: string
  medidas?: string
  imagenes?: string[]
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <div className="h-64 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
        <span className="text-6xl">Wood Icon</span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-amber-900 mb-2">
          {product.nombre || "Mesa de Roble"}
        </h3>
        <p className="text-gray-600 mb-4">
          {product.tipomadera || "Roble"} • {product.medidas || "120x80 cm"}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-black text-amber-700">
            ${product.precio || "450.000"}
          </span>
          <button className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition">
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  )
}