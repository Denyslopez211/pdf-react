import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { DocumentPDF } from './DocumentPDF';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

function App() {

  const [poema, setPoema] = useState(null);

  function fetchPoema() {
    fetch('https://www.poemist.com/api/v1/randompoems')
    .then((response) => response.json())
    .then((data) => {
      setPoema(data[0]);
      console.log(data[0])
    })
  }
  useEffect( () => {
    fetchPoema(); 
  }, []);
  const Menu = () => {
    return (
      <nav>
        <PDFDownloadLink document={<DocumentPDF poema={poema} />} fileName="prueba.pdf">
          <Button>Descargar PDF</Button>
        </PDFDownloadLink>
      </nav>
    )
  }
  return (
    <div style={{ minHeight: '100vh'}} >
      <Menu />
      { poema &&
          <PDFViewer style={ { width: '100%', height: '90vh'}}> 
            <DocumentPDF poema={poema} /> 
          </PDFViewer> 
      }
    </div>
  );
}
export default App;
