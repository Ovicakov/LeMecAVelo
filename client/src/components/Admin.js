import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'
import garbage from './images/red_garbage.png'

import './Admin.css'

export default function Admin() {
  // ADD
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageLink, setImageLink] = useState('')
  const [categorie, setCategorie] = useState([])
  const [article, setArticle] = useState([])
  const [categoryId, setCategoryId] = useState()

  // DELETE
  const [getArticles, setGetArticles] = useState([])

  // ADD NEW ARTICLE

  useEffect(() => {
    axios.get('http://localhost:4000/article')
      .then(res => setArticle(res.data))

    axios.get('http://localhost:4000/categorie')
      .then(res => setCategorie(res.data))

  }, [])

  const articleByCat = (event) => {
    const { value } = event.target
    axios.get(`http://localhost:4000/article/getCatId/${value}`)
      .then(res => setArticle(res.data))

    setCategoryId(parseInt(value))
  }

  const onChangeTitle = (event) => {
    const { value } = event.target
    setTitle(value)
  }

  const onChangeDescription = (event) => {
    const { value } = event.target
    setDescription(value)
  }

  const onChangeImageLink = (event) => {
    const { value } = event.target
    setImageLink(value)
  }

  const handleSubmitAdd = () => {
    axios.post('http://localhost:4000/article/', {
      art_name: title,
      art_description: description,
      art_photo: imageLink,
      art_cat_id: categoryId,
    })
      .then(function (response) {
        console.log('then', response);
      })
      .catch(function (error) {
        console.log('catch', error);
      });
  }

  // DELETE

  useEffect(() => {
    axios.get('http://localhost:4000/article')
      .then(res => setGetArticles(res.data))
  }, [])

  const deleteArticle = (artId) => {
    axios.delete(`http://localhost:4000/article/${artId}`)
      .then(function (response) {
        console.log('then', response);
      })
      .catch(function (error) {
        console.log('catch', error);
      });

    setTimeout(() => 200, window.location.reload())
  }

  const renderDescription = (description) => (
    <p className="textDescriptionAdmin">
      {description}
    </p>
  )

  // MODIFY



  return (
    <div className='Admin'>
      <div className="addArticle">
        <div>Ajouter un article</div>
        <label>Titre de l'article :</label>
        <input placeholder='titre' value={title} onChange={onChangeTitle} />
      </div>
      <div className="descriptionForm">
        <div className="textDescriptionForm">Description de l'article :</div>
        <textarea
          placeholder="Décrivez votre article en quelques mots"
          id="story"
          name="story"
          rows="5"
          cols="138"
          value={description}
          onChange={onChangeDescription}
        />
      </div>
      <div className="photoLinkForm">
        <label>Lien de l'image</label>
        <input placeholder="lien de l'image" value={imageLink} onChange={onChangeImageLink} />
      </div>
      <div className="articleCategory">
        <label>Catégorie de l'article</label>
        <select className="selectCards" onChange={(e) => articleByCat(e)}>
          {categorie && categorie.map((categorie) =>
            <option value={categorie.cat_id}>{categorie.cat_name}</option>
          )}
        </select>
      </div>
      <button onClick={handleSubmitAdd}>Ajouter cet article</button>

      <div className="cardsContentAdmin">
        {getArticles && getArticles.map(article => (
          <Cards
            key={article.art_id}
            value={article.art_id}
            name={article.art_name}
            photo={article.art_photo}
            description={renderDescription(article.art_description)}
            isAdmin={true}
            onDelete={deleteArticle}
          />
        ))}
      </div>
    </div>
  )
}
