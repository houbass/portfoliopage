import { useRef } from 'react';
import './App.css';


//components
import CanvasPage from './components/Canvas';
import ConsoleText from './components/ConsoleText';

function App() {

  //TEXT 1
  const text1 = "Welcome to my pagE";
  const text1FontSize = 30;
  const text1Weight = "bold"; 
  const timing1 = 100;

  //TEXT 2
  const text2 = "I made this page to show my skill set and portfolio, hope you gonna like it :)";
  const text2FontSize = 17;
  const text2Weight = "200"; 
  const timing2 = 50;

  return (
    <div  className="App">
      <div className="header">
        <CanvasPage />
        <ConsoleText textInput={text1} textFontSize={text1FontSize} textFontWeight={text1Weight} timing={timing1}/>
      </div>
      <ConsoleText textInput={text2} textFontSize={text2FontSize} textFontWeight={text2Weight} timing={timing2}/>

    </div>
  );
}

export default App;
