import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import CloseButton from 'react-bootstrap/CloseButton';
import './StaticExample.module.css';
import lindanCV from '../pages/lindaOsala';
import tomminCV from '../pages/tommiLinna';
import teemunCV from '../pages/teemuKarvonen';
import NestedList from './NestedList';

function getCV(name){
    switch (name){
        case ("Tommi Linna"):
            return tomminCV;
        case ("Linda Osala"):
            return lindanCV;
        case ("Teemu Karvonen"):
            return teemunCV;
        default:
            return 0;
    }
}
function MyModal({name}){
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const proCV = getCV(name);
    console.log('proCV: ', proCV);
    const proName = ('GolfPro ').concat(name);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }

      return (
        <>  
            <Button className="me-2 mb-2" onClick={() => handleShow()}>
              LUE LISÄÄ
            </Button>
          
          <Modal class="modalStatic" show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{proName}</Modal.Title>
            </Modal.Header>
            <Modal.Body><NestedList items={proCV} /></Modal.Body>
          </Modal> 
          
        </>
      );  
}
export default MyModal;