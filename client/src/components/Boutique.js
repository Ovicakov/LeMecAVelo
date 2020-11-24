import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'
import './Boutique.css'

export default function Boutique() {

  const [article, setArticle] = useState([])
  const [categorie, setCategorie] = useState([])

  const articleByCat = (e) => {
    axios.get(`http://localhost:4000/article/getCatId/${e.target.value}`)
      .then(res => setArticle(res.data))
  }

  useEffect(() => {
    axios.get('http://localhost:4000/article')
      .then(res => setArticle(res.data))

    axios.get('http://localhost:4000/categorie')
      .then(res => setCategorie(res.data))

  }, [])

  const renderDescription = (description) => (
    <p className="textDescription">
      {description}
    </p>
  )


  return (
    <div className="Boutique">
      <div className="cardsContainer">
        <p className="title">Choisissez votre catégorie :</p>
        <select className="selectCards" onChange={(e) => articleByCat(e)}>
          <option>Choisissez votre catégorie</option>
          {categorie && categorie.map((categorie) =>
            <option value={categorie.cat_id}>{categorie.cat_name}</option>
          )}
        </select>
      </div>
      <div className="cardsContent">
        {article && article.map(article => (
          <Cards
            key={article.art_id}
            value={article.art_id}
            name={article.art_name}
            photo={article.art_photo}
            description={renderDescription(article.art_description)}
          />
        ))}
      </div>
    </div>
  )
}


