import React from 'react'
import {FaReact} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <h3>About this App</h3>
        <p>Developed with React.js</p>
        <p>API: https://programming-quotes-api.herokuapp.com/</p>
        <address>
          <p>Developer: Dave Araya</p>
          <p>Email: dave.webdeveloper@gmail.com</p>
        </address>
      </section>
      <div className="logos">
        <FaReact size={48}/>

      </div>
    </footer>
  )
}

export default Footer
