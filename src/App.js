import { useLayoutEffect, useState } from 'react';

//CSS
import './App.css';

//COMPONENTS
import Introduction from './components/Introduction';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import ComercialProjects from './components/ComercialProjects';
import Footer from './components/Footer';

//pic
import foto from "./pic/foto.jpg";

export default function App() {
  
  //TOPIC OPACITY (when img loaded)
  const [mainOpacity, setMainOpacity] = useState(0);

  //WHEN IMG LOADED
  const fotoImage = new Image();
  fotoImage.src = foto

  useLayoutEffect(() => {
      fotoImage.onload = () => {
          setMainOpacity(1);
      }
  },[])

  return (
    <div  className="App" >
      <Introduction foto={foto} mainOpacity={mainOpacity}/>
      <MySkills mainOpacity={mainOpacity}/>
      <MyProjects foto={foto} mainOpacity={mainOpacity}/>
      <ComercialProjects foto={foto} mainOpacity={mainOpacity}/>
      <Footer mainOpacity={mainOpacity}/>
    </div>
  );
}
