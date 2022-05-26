import axios from 'axios'
import { useState, useEffect } from 'react'

const AllCards = () => {
  const [allCards, setAllCards] = useState([])

  useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/cards')
      .then(response => setAllCards(response.data.data))
      .catch(err => console.log("Something went wrong"))
  }, [])


  return (
    <div>
      {
        allCards.map((card) => <img key={card.id} src={card.images.small} alt={card.name}/>)
      }
    </div>
  )
}

export default AllCards