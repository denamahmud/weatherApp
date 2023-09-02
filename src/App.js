 
import { useState } from 'react'; 
import './App.css';
import Content from './components/Content';
import Search from './components/Search';

function App() {

  const api_key = '21a20ce6658e304dfba602b8d20990ca'

  const [data, setData] = useState({})
  const [query, setQuery] = useState('')

 
  
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${api_key}`)
        .then(res => res.json())
        .then(result => {
          setData(result); 
          setQuery('')
          console.log(result);
        });


    }
    localStorage.setItem('query', query)
  }
  return (
  
    <div className={(typeof data.main != "undefined") ? 'illustarion same-class'  : 'nature same-class '}>
        <div className='cover-black pt-20'>
            <Search query={query} setQuery={setQuery} search={search}/>
            <Content data={data} />
        
        </div>
    </div> 
  );
}

export default App;
