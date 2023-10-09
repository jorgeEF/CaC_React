import React from 'react'
import ReactDOM from 'react-dom/client'
import {Counter} from './Counter.jsx'
import {Tarjeta} from "./Card.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Counter />
    <Tarjeta />
  </>
)
