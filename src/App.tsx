import './App.css';
import { getData } from './jest/getData/getData';


function App() {
  getData('users').then(res => {
    console.log(res, 'res')
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
