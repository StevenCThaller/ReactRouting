import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="nav-title">This is my Single Page Application</span>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cards">Cards</Link>
      {/* <a href="/">Home</a> */}
      {/* <a href="/about">About</a> */}
      {/* <a href="/cards">All Cards</a> */}
    </nav>
  )
}

export default Navbar