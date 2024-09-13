import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import gsap from 'gsap'

const Navbar = () => {

    useEffect(()=>{
        gsap.from("nav",{
            y: -100,
            opacity: 0,
            duration: 0.5,
            delay: 0.5,
        })
    },[])

    return (
        <div>
            <nav className="navbar navbar-expand-lg py-3" style={{backgroundColor: "#AF0E38 "}}>
                <div className="container d-flex">
                    <Link style={{textDecoration: "none"}} className="navbar-brand fw-bold fs-3 text-white" to="/">Quick Press</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link style={{textDecoration: "none"}} className="nav-link active text-white fs-5" aria-current="page" to="/home">Home</Link>
                            <Link style={{textDecoration: "none"}} className="nav-link text-white fs-5" to="/browse">Browse</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
