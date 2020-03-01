import React from 'react'
import Quote from '../components/Quote'
import Menu from '../components/Menu';

const fav = {
  en: "Something went wrong, try again... or restart.",
  author: "All IT professionals",
  id: 12314
}


const Favorites = () => {
  return (
    <section className="favorites">
      <Menu/>
      <h1 className="favorites__title">Favorites</h1>
      <div className="favorites__panel">
        <Quote data={fav}/>
        <Quote data={fav}/>
      </div>
    </section>
  )
}

export default Favorites;


// Agregar react-router. listo
// Crear el componente que tendra las rutas.
// Agregar Firebase para almacenar los quotes favoritos.
