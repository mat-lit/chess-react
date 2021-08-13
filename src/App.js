import light from './assets/square brown light.svg'
import dark from './assets/square brown dark.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row g-0">
          <div class="col-sm">
            <img src={light} ></img>
          </div>
          <div class="col-sm">
            <img src={dark} ></img>
          </div>
          <div class="col-sm">
            <img src={light} ></img>
          </div>
          <div class="col-sm">
            <img src={dark} ></img>
          </div>
          <div class="col-sm">
            <img src={light} ></img>
          </div>
          <div class="col-sm">
            <img src={dark} ></img>
          </div>
          <div class="col-sm">
            <img src={light} ></img>
          </div>
          <div class="col-sm">
            <img src={dark} ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;