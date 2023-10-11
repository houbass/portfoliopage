//CSS
import './App.css';

//COMPONENTS
import CanvasPage from './components/Canvas';
import ConsoleText from './components/ConsoleText';
import MatrixBackground from './components/MatrixBackground';
import ScrollText from './components/ScrollText';
import ScrollConsoleText from './components/ScrollConsoleText';

function App() {

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

  return (
    <div  className="App">

      <MatrixBackground />

      <div 
      style={{
        background: "rgba(0,0,0,0.9)",
        width: "700px",
        padding: "50px"
      }}>

      <div className="header">
        <CanvasPage />


        <ConsoleText textInput={text1} textFontSize={text1FontSize} textFontWeight={text1Weight} timing={timing1}/>
      </div>

      <ScrollConsoleText 
      textInput={text2} 
      textFontSize={text2FontSize} 
      textFontWeight={text2Weight} 
      timing={timing2} 
      delay = {0}
      />

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <ScrollConsoleText 
      textInput={text2} 
      textFontSize={text2FontSize} 
      textFontWeight={text2Weight} 
      timing={timing2} 
      delay = {0}
      />

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <ScrollConsoleText 
      textInput={text2} 
      textFontSize={text2FontSize} 
      textFontWeight={text2Weight} 
      timing={timing2}
      delay = {0}
      />

      <br/><br/><br/>
      <ScrollConsoleText 
      textInput={text2} 
      textFontSize={30} 
      textFontWeight={"bold"} 
      timing={timing2} 
      delay = {0}
      />
      <ScrollConsoleText 
      textInput={text2} 
      textFontSize={text2FontSize} 
      textFontWeight={text2Weight} 
      timing={timing2} 
      delay = {500}
      />

      <br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  );
}

export default App;
