import './App.css'
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Mechanical Keyboard Switches</h1>
      <div className='cards'>
        <Card
          name = "EMT V2 Switches"
          image = {'./public/1.jpg'} 
          type = "Linear"
          link = "https://mechsandco.com/products/emt-v2-betty-switches" 
          />
          <Card
          name = "Invokey Black Sesame Switches"
          image = {'./public/2.jpg'} 
          type = "Linear"
          link = "https://invokeys.com/products/invokeys-black-sesame-switches" 
          />
          <Card
          name = "Invokey Blueberry Chiffon Switches"
          image = {'./public/3.jpg'} 
          type = "Linear"
          link = "https://invokeys.com/products/invokeys-blueberry-chiffon-switches" 
          />
          <Card
          name = "JWICK Semi Silent Switches"
          image = {'./public/4.jpg'} 
          type = "Linear"
          link = "https://divinikey.com/products/jwick-semi-silent-linear-switches" 
          />
          <Card
          name = "Kinetic Labs Gecko Switches"
          image = {'./public/5.jpg'} 
          type = "Linear"
          link = "https://kineticlabs.com/switches/kinetic/gecko-silent-linear-switches" 
          />
          <Card
          name = "Mode Tomorrow Switches"
          image = {'./public/6.jpg'} 
          type = "Linear"
          link = "https://modedesigns.com/products/tomorrow-tactile-switches" 
          />
          <Card
          name = "Novelkey Cream+ Switches"
          image = {'./public/7.jpg'} 
          type = "Linear"
          link = "https://novelkeys.com/products/cream-plus-switches" 
          />
          <Card
          name = "Novelkey Dream Cream Switches"
          image = {'./public/8.jpg'} 
          type = "Linear"
          link = "https://novelkeys.com/products/nk-cream-series?variant=42671702311079" 
          />
          <Card
          name = "RAMAWORKS Duck Switches"
          image = {'./public/9.jpg'} 
          type = "Linear"
          link = "https://ramaworks.store/products/duck-switches" 
          />
          <Card
          name = "TKC Blackberry Switches"
          image = {'./public/10.jpg'} 
          type = "Linear"
          link = "https://thekey.company/products/tkc-blackberry-switches-2022" 
          />
      </div>

    </div>
  )
}

export default App