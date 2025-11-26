// il fatto di aver aggiunto bootstrap come DIPENDENZA del progetto
// non significa che sia stato AUTOMATICAMENTE inserito tra i fogli di stile
// della pagina!
import 'bootstrap/dist/css/bootstrap.min.css'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'

import RestaurantNavbar from './components/RestaurantNavbar'
import Home from './components/Home'
import BookATable from './components/BookATable'
import Bookings from './components/Bookings'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import PastaDetails from './components/PastaDetails'

// questa riga fa in modo che il foglio css di bootstrap venga aggiunto a App
// e di conseguenza a tutti i componenti React

// un COMPONENTE REACT può anche essere semplicemente una FUNZIONE
// che RITORNA del J S X
// JSX è una sintassi molto simile ad HTML con qualche differenza sintattica:
// - class -> className
// - for -> htmlFor
// - onclick -> onClick
// JSX permette una facile interpolazione di variabili tramite {  }

// parliamo di react-router-dom
// React Router è stato installato come dipendenza in questo progetto
// tramite "npm i react-router-dom". Ci permetterà di suddividere
// i nostri componenti in diverse "rotte", in modo da ripulire le schermate
// e di caricare un componente alla volta. In questo modo andremo a simulare
// un'esperienza di "navigazione multipagina" nella nostra SPA.

// per cominciare, importate nel vostro componente "contenitore" 3
// componenti da react-router-dom: BrowserRouter, Routes e Route.
// a) BrowserRouter è un contenitore virtuale che abiliterà le funzionalità
// di routing nel suo contenuto. Mettetelo agli estremi dei vostri elementi.
// b) Routes va inserito all'interno di un BrowserRouter e servirà a circondare
// le parti "dinamiche" di contenuto che andranno montate/smontate in base all'indirizzo

function App() {
  return (
    <BrowserRouter>
      {/* qui vorrei illuminare Home */}
      <RestaurantNavbar illuminaLink="Home" />
      {/* qui vorrei illuminare Prenota */}
      {/* <RestaurantNavbar illuminaLink="Prenota" /> */}
      {/* qui vorrei illuminare Admin */}
      {/* <RestaurantNavbar illuminaLink="Admin" /> */}

      <Routes>
        {/* Inseriamo qui il nostro componente di "home" */}
        <Route path="/" element={<Home />} />
        {/* la rotta principale, es. localhost:5173, www.giangiorgio.com */}

        {/* Inseriamo qui il nostro componente di "backoffice" */}
        <Route path="/admin" element={<Bookings />} />

        {/* Inseriremo qui il nostro form di prenotazione */}
        <Route path="/prenota" element={<BookATable />} />

        {/* Inseriremo qui il nostro componente del menu */}
        <Route path="/menu" element={<Menu />} />

        {/* Inseriremo qui il nostro componente dettagli */}
        <Route path="/details/:pastaID" element={<PastaDetails />} />

        {/* Inseriamo qui un componente NotFound che dovròà venire mostrato
        ogni volta che uno dei percorsi prefissati NON venga colpito */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
