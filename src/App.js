import { useLayoutEffect, useState, useEffect } from 'react';

//CSS
import './App.css';

//COMPONENTS
import CanvasPage from './components/Canvas';
import ConsoleText from './components/ConsoleText';
import MatrixBackground from './components/MatrixBackground';
import ScrollText from './components/ScrollText';
import ScrollConsoleText from './components/ScrollConsoleText';
import ScrollContainer from './components/ScrollContainer';

import FirstTopic from './components/FirstTopic';
import SecondTopic from './components/SecondTopic';
import ThirdTopic from './components/ThirdTopic';
import ComercialProjects from './components/ComercialProjects';

//pic
import foto from "./pic/foto.jpg";


function App() {


  
  //TOPIC OPACITY (when img loaded)
  const [mainOpacity, setMainOpacity] = useState(0);

  //TEXT 1
  const text1 = "Welcome to my page";
  const text1FontSize = 30;
  const text1Weight = "bold"; 
  const timing1 = 100;

  //TEXT 2
  const text2 = "I made this page to show my skill set and portfolio, hope you gonna like it :)";
  const text2FontSize = 17;
  const text2Weight = "500"; 
  const timing2 = 30;

  //WHEN IMG LOADED
  const fotoImage = new Image();
  fotoImage.src = foto

  useLayoutEffect(() => {
      fotoImage.onload = () => {
          setMainOpacity(1);
      }
  },[])



  return (
    <div  className="App">
      <FirstTopic foto={foto} mainOpacity={mainOpacity}/>
      <SecondTopic foto={foto} mainOpacity={mainOpacity}/>
      <ThirdTopic foto={foto} mainOpacity={mainOpacity}/>
      <ComercialProjects foto={foto} mainOpacity={mainOpacity}/>

    </div>
  );
}

export default App;
