import React from 'react'
import { Link } from 'react-router-dom'

const Navbar11 = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark gradient-custom">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <h3 className="nav-item">
                                <Link to="/return" className="nav-link active" aria-current="page" href="#">HOME</Link>
                            </h3>
                      
                            <h3 className="nav-item">
                                <Link  to="/addProduct" className="nav-link active" aria-current="page" href="#">POST</Link>
                            </h3>



                        </ul>

                    </div>
                </div>
            </nav>
    )
}

export default Navbar11;