import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState<Object | null>(null)
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState('')

  const onClick = () => setToggle(prev => !prev)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100)
  }, [])

    
  return (
    <div className="App">
      <h1>Hello World</h1>

      { 
        data ?
        <div style={{color: 'red'}}>
          data
        </div>
        : <></>
      }

      {
        toggle === true &&
        <div data-testid='toggle-elem'>toggle true</div>
      }

      React app
      <a href="https://google.com">Link to google</a>
      <button 
        onClick={onClick}
        data-testid='toggle-btn'
      >
          Click me
      </button>
      <input onChange={onChange} type="text" value={value} placeholder='input text...'/>
      <span data-testid="value-elem">{value}</span>
    </div>
  );
}

export default App;
