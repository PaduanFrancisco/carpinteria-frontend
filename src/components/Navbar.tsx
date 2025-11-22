export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-900/95 backdrop-blur-sm shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">Saw Blade Icon</div>
          <h1 className="text-3xl font-black text-white tracking-wider">
            CARPINTERÍA PADUÁN
          </h1>
        </div>

        <div className="hidden md:flex space-x-10 text-white text-lg font-semibold">
          <a href="#inicio" className="hover:text-amber-300 transition">Inicio</a>
          <a href="#productos" className="hover:text-amber-300 transition">Productos</a>
          <a href="#nosotros" className="hover:text-amber-300 transition">Nosotros</a>
          <a href="#contacto" className="hover:text-amber-300 transition">Contacto</a>
          <a href="/admin" className="hover:text-amber-300 transition">Admin</a>
        </div>
        
        <button className="bg-amber-600 hover:bg-amber-500 px-8 py-3 rounded-full font-bold text-white shadow-lg transition">
          Presupuesto
        </button>
      </div>
    </nav>
  )
}