import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './Admin.css'

export default function Admin() {
  // ADD
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageLink, setImageLink] = useState('')
  const [categorie, setCategorie] = useState([])
  const [article, setArticle] = useState([])
  const [categoryId, setCategoryId] = useState()
  const [price, setPrice] = useState()

  // DELETE
  const [articleByCategory, setArticleByCategory] = useState([])

  // MODIFY
  const [modal, setModal] = useState(false)
  const [modifyArticle, setModifyArticle] = useState()
  const [modifyContent, setModifyContent] = useState('')
  const [putId, setPutId] = useState()

  // ADD NEW ARTICLE

  useEffect(() => {
    axios.get('http://localhost:4000/article')
      .then(res => setArticle(res.data))

    axios.get('http://localhost:4000/article')
      .then(res => setArticleByCategory(res.data))

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

  const onChangePrice = (event) => {
    const { value } = event.target
    setPrice(value)
  }

  const handleSubmitAdd = () => {
    axios.post('http://localhost:4000/article/', {
      art_name: title,
      art_description: description,
      art_price: price,
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

  const articleWithCat = (e) => {
    axios.get(`http://localhost:4000/article/getCatId/${e.target.value}`)
      .then(res => setArticleByCategory(res.data))
  }

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

  const onChangeArticle = (event) => {
    const { value } = event.target
    setModifyContent(value)
  }

  const onCloseModal = () => setModal(false)

  const toggleModalByArticle = (id) => {
    axios.get(`http://localhost:4000/article/${id}`)
      .then(res => (setModifyArticle(res.data[0])))

    axios.get(`http://localhost:4000/article/${id}`)
      .then(res => (setModifyContent(res.data[0].art_description)))

    setPutId(id)
    setModal(!modal)
  }

  const onInsertDescription = () => {
    axios.put(`http://localhost:4000/article/${putId}`, {
      art_description: modifyContent,
    })
      .then(res => console.log(res.status))
      .catch(error => console.log(error))

    setModal(!modal)
  }

  return (
    <div className='Admin'>
      <div className="addArticle">
        <div className="titleReal">
          <div className="titleAddArticle">Ajouter un article</div>
          <label>Titre de l'article :</label>
          <input placeholder='Titre' value={title} onChange={onChangeTitle} />
        </div>
        <div className="descriptionForm">
          <div className="textDescriptionForm">Description de l'article :</div>
          <textarea
            placeholder="Décrivez votre article en quelques mots"
            id="story"
            name="story"
            rows="5"
            cols="50"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="photoLinkForm">
          <label>Lien de l'image :</label>
          <input placeholder="Lien de l'image" value={imageLink} onChange={onChangeImageLink} />
        </div>
        <div className="priceDiv">
          <label>Prix de l'article :</label>
          <input placeholder="Prix de l'article" value={price} onChange={onChangePrice} />
        </div>
        <div className="articleCategory">
          <label>Catégorie de l'article :</label>
          <select className="selectCards" onChange={(e) => articleByCat(e)}>
            <option>Choisissez votre catégorie</option>
            {categorie && categorie.map((category) =>
              <option value={category.cat_id}>{category.cat_name}</option>
            )}
          </select>
        </div>
        <Button className="addArticleButton" outline color="success" onClick={handleSubmitAdd}>Ajouter cet article</Button>
      </div>

      <div className="deleteCards">
        <div className="carsTitleDelete">Supprimer ou modifier un article :</div>
        <select className="selectCards" onChange={(e) => articleWithCat(e)}>
          <option>Choisissez votre catégorie</option>
          {categorie && categorie.map((category) =>
            <option value={category.cat_id}>{category.cat_name}</option>
          )}
        </select>
        <div className="cardsContentAdmin">
          {articleByCategory && articleByCategory.map(article => (
            <Cards
              key={article.art_id}
              value={article.art_id}
              name={article.art_name}
              photo={article.art_photo}
              description={renderDescription(article.art_description)}
              isAdmin={true}
              onDelete={deleteArticle}
              onToggle={toggleModalByArticle}
            />
          ))}
          <Modal isOpen={modal}>
            <ModalHeader>{modifyArticle?.art_name}</ModalHeader>
            <ModalBody>
              <textarea
                value={modifyContent}
                id="description"
                rows="8"
                cols="48"
                onChange={onChangeArticle}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={onInsertDescription}>Valider</Button>
              <Button color="secondary" onClick={onCloseModal}>Annuler</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  )
}
