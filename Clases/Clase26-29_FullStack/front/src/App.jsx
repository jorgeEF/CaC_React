import React from 'react'
import {Show} from '../src/components/Show.jsx';
import {Create} from '../src/components/Create.jsx';
import {Edit} from '../src/components/Edit.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

export const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Show/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="/delete/:id"/>
          </Routes>        
        </BrowserRouter>  
      </header>  
          
    </div>
  )
}

