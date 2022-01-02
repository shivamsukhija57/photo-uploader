import React from 'react';
import Title from './comps/Title';
import Uploadform from "./comps/uploadform"
import ImageGrid from './comps/imageGrid';
import Modal from './comps/modal';
import {useState} from 'react';
function App() {
  const [selectedImg,setSelectedImg] =useState(null);
  return (
    <div className="App">
      <Title/>
      <Uploadform/>
      <ImageGrid setSelectedImg ={setSelectedImg}/>
      {selectedImg && <Modal selectedImg ={selectedImg} setSelectedImg ={setSelectedImg} />}
    </div>
  );
}

export default App;
