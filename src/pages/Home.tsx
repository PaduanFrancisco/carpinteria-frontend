import { useState, useEffect } from 'react';

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://carpinteria-backend.vercel.app/api/productos')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    // ... todo tu JSX de la página queda igual, solo cambiás esta parte:
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">
        NUESTROS PRODUCTOS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {productos.map((producto: any) => (
          <div key={producto.id} className="bg-amber-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <div className="bg-gradient-to-b from-amber-200 to-amber-300 h-48 flex items-center justify-center">
              <span className="text-6xl">Wood Icon</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-900">{producto.nombre}</h3>
              <p className="text-gray-600">
                {producto.tipomadera} • {producto.medidas}
              </p>
              <p className="text-3xl font-bold text-amber-800 my-4">
                ${Number(producto.precio).toLocaleString()}
              </p>
              <a href={`/producto/${producto.id}`} className="block text-center bg-amber-700 text-white py-2 rounded-full hover:bg-amber-800">
                Ver detalle
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;