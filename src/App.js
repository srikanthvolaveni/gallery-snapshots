import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Gallery from './Gallery'
import './App.css';

const App = () => {
  const [search,setSearch]=useState('')
  const [data,setData]=useState([])
  const apikey="636e1481b4f3c446d26b8eb6ebfe7127"

  const onChangeSearch = event =>{
    setSearch(event.target.value)
  }

  useEffect(()=>{},[])

  const onSubmitForm = event =>{
    event.preventDefault()
    axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response=>{setData(response.data.photos.photo)})
      .catch(err => console.log('Error occured while fetching the data',err))
  }
  return (
    <div className="App">
      <center>
        <h2 className='text-primary'>Gallery SnapShots</h2><br/>
        <form onSubmit={onSubmitForm}>
          <input size="30" type="text" onChange={onChangeSearch} value={search}/> <br/> <br/>
          <input type="submit" name='search'/>
        </form><br/> <br />
        {data.length>=1 ? <Gallery data={data}/> : <h3>No Data Found</h3>}
      </center>
    </div>
  );
}

export default App;
