import React from 'react';
import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 bg-gray-800 hover:bg-gray-400  text-white'>Novo Evento</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;