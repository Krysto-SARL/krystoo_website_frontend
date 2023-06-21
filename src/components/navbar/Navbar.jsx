import { useState } from "react"
import { Link} from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={"../../../public//logo192.png"} alt="" />
                </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar