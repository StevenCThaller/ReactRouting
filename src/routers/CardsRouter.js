import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import CardsInfo from '../pages/CardsInfo'
import AllCards from '../pages/AllCards'
import RandomCard from '../pages/RandomCard'

// router for all routes starting with /cards
const CardsRouter = () => {
  return (
    <>
      <nav>
        <Link to="/cards">Cards Central</Link>&nbsp;
        <Link to="/cards/all">All Cards</Link>&nbsp;
        <Link to="/cards/random">Random Card</Link>
      </nav>
      <Routes>
        <Route path="" element={<CardsInfo />} />
        <Route path="all" element={<AllCards />} />
        <Route path="random" element={<RandomCard />} />
      </Routes>
    </>
  )
}

export default CardsRouter