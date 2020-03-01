import React from 'react'
import {FaReact} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <h3>About this App</h3>
        <p>Developed with React.js</p>
        <p><span>API:</span> https://programming-quotes-api.herokuapp.com/</p>
        <address>
          <p><span>Developer:</span> Dave Araya</p>
          <p><span>Email:</span> dave.webdeveloper@gmail.com</p>
        </address>
      </section>
      <div className="logos">
        <FaReact size={48} color="darkturquoise"/>
      </div>
    </footer>
  )
}

export default Footer
