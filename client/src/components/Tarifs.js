import React, { useEffect, useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { debounce } from "debounce";
import './Tarifs.css'

const Tarifs = () => {
  const [isOpenTransmission, setisOpenTransmission] = useState(false);
  const [isOpenFreinageCable, setisOpenFreinageCable] = useState(false);
  const [isOpenfreinageHydraulique, setisOpenfreinageHydraulique] = useState(false);
  const [isOpenRoue, setisOpenRoue] = useState(false);
  const [isOpenMontageCadre, setisOpenMontageCadre] = useState(false);
  const [isOpenMoyeu, setisOpenMoyeu] = useState(false);
  const [isOpenPoseAccessoire, setisOpenPoseAccessoire] = useState(false);
  const [isOpenGraissage, setisOpenGraissage] = useState(false);

  const handleCollapseTransmission = () => setisOpenTransmission(!isOpenTransmission)
  const handleCollapseFreinageCable = () => setisOpenFreinageCable(!isOpenFreinageCable)
  const handleCollapseFreinageHydraulique = () => setisOpenfreinageHydraulique(!isOpenfreinageHydraulique)
  const handleCollapseRoue = () => setisOpenRoue(!isOpenRoue)
  const handleCollapseMontageCadre = () => setisOpenMontageCadre(!isOpenMontageCadre)
  const handleCollapseMoyeu = () => setisOpenMoyeu(!isOpenMoyeu)
  const handleCollapsePoseAccessoire = () => setisOpenPoseAccessoire(!isOpenPoseAccessoire)
  const handleCollapseGraissage = () => setisOpenGraissage(!isOpenGraissage)

  // Debounce resize
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth
  })

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        width: window.innerWidth
      });
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);

    return () => window.removeEventListener("resize", debouncedHandleResize)
  });

  const transmission = [
    { type: "réglage dérailleur", prix: 15 },
    { type: "réglage dérailleur avant", prix: 15 },
    { type: "changement dérailleur avant", prix: 15 },
    { type: "changement dérailleur arrière", prix: 20 },
    { type: "changement cassette", prix: 10 },
    { type: "changement chaîne", prix: 10 },
    { type: "changement plateau", prix: 25 },
    { type: "changement manette de dérailleur avant", prix: 15 },
    { type: "changement manette de dérailleur arrière", prix: 15 },
    { type: "changement câble et gaine dérailleur avant", prix: 15 },
    { type: "changement câble et gaine dérailleur arrière", prix: 15 },
    { type: "changement galet dérailleur", prix: 10 },
    { type: "remise en place de la pâte de dérailleur", prix: 15 },
    { type: "changement pédalier", prix: 20 },
    { type: "changement boitier pédalier", prix: 30 },
    { type: "tension chaîne BMX / single-speed", prix: 10 },
    { type: "pose d'une transmission single-speed", prix: 40 },
    { type: "changement roue libre neuve", prix: 10 },
  ]

  const freinageCable = [
    { type: "réglage frein cantilever ou ancien", prix: 20 },
    { type: "réglage frein v brake", prix: 15 },
    { type: "réglage frein à disque mécanique", prix: 15 },
    { type: "changement patins", prix: 15 },
    { type: "changement câble et gaine frein arrière", prix: 15 },
    { type: "changement câble et gaine frein avant", prix: 15 },
  ]

  const freinageHydraulique = [
    { type: "centrage d'étrier frein", prix: 5 },
    { type: "changement plaquettes", prix: 10 },
    { type: "purge frein avant ou arrière", prix: 25 },
    { type: "coupe d'une durite", prix: 25 },
    { type: "changement kit freinage hydraulique", prix: 25 },
    { type: "changement kit freinage à câble", prix: 15 },
    { type: "entretien frein à disque piston et joint", prix: 40 },
    { type: "démontage remontage disque", prix: 10 },
  ]

  const roue = [
    { type: "rayonnage roue", prix: 45 },
    { type: "dévoilage roue", prix: 20 },
    { type: "centrage roue", prix: 15 },
    { type: "changement d'un rayon roue avant", prix: 5 },
    { type: "changement d'un rayon roue arrière", prix: 5 },
    { type: "changement d'un pneu", prix: 10 },
    { type: "changement fond de jante", prix: 5 },
  ]

  const montageCadre = [
    { type: "réglage jeu de direction", prix: 5 },
    { type: "changement jeu de direction", prix: 20 },
    { type: "changement potence", prix: 5 },
    { type: "changement tige de selle", prix: 5 },
    { type: "changement de selle", prix: 5 },
    { type: "changement de roue", prix: 20 },
    { type: "changement de fourche", prix: 30 },
    { type: "changement cintre (guidon)", prix: 20 },
    { type: "changement guidoline", prix: 25 },
    { type: "changement grip", prix: 5 },
  ]

  const moyeu = [
    { type: "changement corps de cassette", prix: 20 },
    { type: "changement chambre air", prix: 20 },
    { type: "graissage moyeu avant", prix: 15 },
    { type: "graissage moyeu arrière VTT", prix: 15 },
    { type: "graissage moyeu route", prix: 15 },
    { type: "changement bille moyeu", prix: 30 },
    { type: "changement roulement annulaire", prix: 30 },
    { type: "réglage du jeu moyeu", prix: 10 },
  ]

  const poseAccessoire = [
    { type: "pose d'un compteur", prix: 10 },
    { type: "pose d'une béquille", prix: 5 },
    { type: "changement de pédale", prix: 10 },
    { type: "changement pile compteur", prix: 5 },
    { type: "pose porte-guidon", prix: 5 },
    { type: "pose GPS", prix: 30 },
    { type: "pose de bar en (embout de guidon)", prix: 5 },
  ]

  const graissage = [
    { type: "graissage direction", prix: 10 },
    { type: "graissage boitier pédalier", prix: 30 },
    { type: "graissage tige de selle", prix: 5 },
  ]

  return (
    <div className="tarifsContainer">

      {/* --------- TRANSMISSION TABLE --------------- */}
      {dimensions.width < 550 ?
        <div style={{ width: '95%' }}>
          <Button color="secondary" onClick={handleCollapseTransmission} style={{ marginBottom: '1rem', marginTop: '1rem' }}>Transmission</Button>
          <Collapse isOpen={isOpenTransmission}>
            <Card>
              <CardBody>
                {transmission.map(item => {
                  return (
                    <tr>
                      <td>{item.type}</td>
                      <td>.......</td>
                      <td>{item.prix}</td>
                    </tr>
                  )
                })}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        :
        <div className="transmission">
          <table>
            <h2>Transmission</h2>
            <tbody>
              {transmission.map(item => {
                return (
                  <tr>
                    <td>{item.type}</td>
                    <td>..................................</td>
                    <td>{item.prix}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>}

      {/* --------- FREINAGE A CABLE TABLE --------------- */}
      {dimensions.width < 550 ?
        <div style={{ width: '95%' }}>
          <Button color="secondary" onClick={handleCollapseFreinageCable} style={{ marginBottom: '1rem' }}>Freinage à câble</Button>
          <Collapse isOpen={isOpenFreinageCable}>
            <Card>
              <CardBody>
                {freinageCable.map(item => {
                  return (
                    <tr>
                      <td>{item.type}</td>
                      <td>.......</td>
                      <td>{item.prix}</td>
                    </tr>
                  )
                })}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        :
        <div className="freinageCableTable">
          <table>
            <h2>Freinage à câble</h2>
            <tbody>
              {freinageCable.map(item => {
                return (
                  <tr>
                    <td>{item.type}</td>
                    <td>..................................</td>
                    <td>{item.prix}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>}

      {/* --------- FREINAGE HYDRAULIQUE --------------- */}
      {dimensions.width < 550 ?
        <div style={{ width: '95%' }}>
          <Button color="secondary" onClick={handleCollapseFreinageHydraulique} style={{ marginBottom: '1rem' }}>Freinage hydraulique</Button>
          <Collapse isOpen={isOpenfreinageHydraulique}>
            <Card>
              <CardBody>
                {freinageHydraulique.map(item => {
                  return (
                    <tr>
                      <td>{item.type}</td>
                      <td>.......</td>
                      <td>{item.prix}</td>
                    </tr>
                  )
                })}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        :
        <div className="freinageHydrauliqueTable">
          <table>
            <h2>Freinage hydraulique</h2>
            <tbody>
              {freinageHydraulique.map(item => {
                return (
                  <tr>
                    <td>{item.type}</td>
                    <td>..................................</td>
                    <td>{item.prix}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>}

      {/* --------- ROUE --------------- */}
      {dimensions.width < 550 ?
        <div style={{ width: '95%' }}>
          <Button color="secondary" onClick={handleCollapseRoue} style={{ marginBottom: '1rem' }}>Roue</Button>
          <Collapse isOpen={isOpenRoue}>
            <Card>
              <CardBody>
                {roue.map(item => {
                  return (
                    <tr>
                      <td>{item.type}</td>
                      <td>.......</td>
                      <td>{item.prix}</td>
                    </tr>
                  )
                })}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        :
        <div className="roueTable">
          <table>
            <h2>Roue</h2>
            <tbody>
              {roue.map(item => {
                return (
                  <tr>
                    <td>{item.type}</td>
                    <td>..................................</td>
                    <td>{item.prix}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>}

      {/* --------- MONTAGE CADRE --------------- */}
      {dimensions.width < 550 ?
        <div style={{ width: '95%' }}>
          <Button color="secondary" onClick={handleCollapseMontageCadre} style={{ marginBottom: '1rem' }}>Montage cadre</Button>
          <Collapse isOpen={isOpenMontageCadre}>
            <Card>
              <CardBody>
                {montageCadre.map(item => {
                  return (
                    <tr>
                      <td>{item.type}</td>
                      <td>.......</td>
                      <td>{item.prix}</td>
                    </tr>
                  )
                })}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        :
        <div className="montageCadre">
          <table>
            <h2>Montage cadre et réglage</h2>
            <tbody>
              {montageCadre.map(item => {
                return (
                  <tr>
                    <td>{item.type}</td>
                    <td>..................................</td>
                    <td>{item.prix}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>}

      {/* --------- MOYEU --------------- */}
      {dimensions.width < 550 ?
        <div style={{ width: '95%' }}>
          <Button color="secondary" onClick={handleCollapseMoyeu} style={{ marginBottom: '1rem' }}>Moyeu</Button>
          <Collapse isOpen={isOpenMoyeu}>
            <Card>
              <CardBody>
                {moyeu.map(item => {
                  return (
                    <tr>
                      <td>{item.type}</td>
                      <td>.......</td>
                      <td>{item.prix}</td>
                    </tr>
                  )
                })}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        :
        <div className="moyeu">
          <table>
            <h2>Moyeu</h2>
            <tbody>
              {moyeu.map(item => {
                return (
                  <tr>
                    <td>{item.type}</td>
                    <td>..................................</td>
                    <td>{item.prix}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>}

      {/* --------- POSE ACCESSOIRE --------------- */}
      {dimensions.width < 550 ?
        <div style={{ width: '95%' }}>
          <Button color="secondary" onClick={handleCollapsePoseAccessoire} style={{ marginBottom: '1rem' }}>Pose accessoire</Button>
          <Collapse isOpen={isOpenPoseAccessoire}>
            <Card>
              <CardBody>
                {poseAccessoire.map(item => {
                  return (
                    <tr>
                      <td>{item.type}</td>
                      <td>.......</td>
                      <td>{item.prix}</td>
                    </tr>
                  )
                })}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        :
        <div className="poseAccessoire">
          <table>
            <h2>Pose accessoire</h2>
            <tbody>
              {poseAccessoire.map(item => {
                return (
                  <tr>
                    <td>{item.type}</td>
                    <td>..................................</td>
                    <td>{item.prix}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>}

      {/* --------- GRAISSAGE --------------- */}
      {dimensions.width < 550 ?
        <div style={{ width: '95%' }}>
          <Button color="secondary" onClick={handleCollapseGraissage} style={{ marginBottom: '1rem' }}>Graissage</Button>
          <Collapse isOpen={isOpenGraissage}>
            <Card>
              <CardBody>
                {graissage.map(item => {
                  return (
                    <tr>
                      <td>{item.type}</td>
                      <td>.......</td>
                      <td>{item.prix}</td>
                    </tr>
                  )
                })}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        :
        <div className="graissage">
          <table>
            <h2>Graissage</h2>
            <tbody>
              {graissage.map(item => {
                return (
                  <tr>
                    <td>{item.type}</td>
                    <td>..................................</td>
                    <td>{item.prix}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>}
    </div>
  )
}

export default Tarifs