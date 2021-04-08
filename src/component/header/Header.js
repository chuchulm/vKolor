import React from 'react'
import logo from '../../image/logo02.png'
import logo1 from '../../image/logo01.png'

export const Header = () => {
    return (
        
        <header className="hero">
            <nav className="nav__hero">
                <div className="container nav__container">
                    <div className="logo">
                       <img src={logo} alt="" className="logo__navBar"/>
                    </div>
                    <div className="links">
                        <a href="#" className="link">Inicio</a>
                        <a href="#" className="link">Servicios</a>
                        <a href="#" className="link">Proyectos</a>
                        
                    </div>
                </div>
            </nav>
    
    
            <section className="container hero__main">  
                <div className="hero__textos">
                    <h1 className="title"> Le damos  <span className="title--active">Color a tus ideas</span></h1> 
                    {/* <p className="copy">Nos encargamos de producir la mejor <span className="copy__active">pintura</span></p> */}
                 
                </div>
                {/* <img src={logo} class="mockup"/> */}
            </section>
        </header>
            
    
    )
}
