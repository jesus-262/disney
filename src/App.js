
import './App.css';
import Header from './component/Header';
import Video from './component/Video';
//import SimpleSlider from './component/Simpleslider';

//import SimpleSlider from './component/Simpleslider';

import images from "./component/images";
import ImageSlider from "./component/ImageSlider";
import Section1 from './component/Section1';
function App() {
  return (
    <div className="App">
      <Header
      foto='comp0-disney'
      ></Header>
      <Video/>
      <ImageSlider images={images}/>
      <Section1
      texto='La mas coqueta de Disney llega a Ela y Ela Kids. La pata Daisy esta aqui para llenar tus dias de diversion y magia'></Section1>


    </div>
  );
}

export default App;
