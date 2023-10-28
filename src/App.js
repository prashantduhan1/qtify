import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Album from './components/Album/Album';

function App() {

  const [newAlbum, setNewAlbum] = useState([])
  const [topAlbum,setTopAlbum]=useState([])

  useEffect(() => {
    performApiCall();
  }, []);
  const performApiCall = async () => {
    const result = await axios.get('https://qtify-backend-labs.crio.do/albums/new')
    setNewAlbum(result.data)

    const res=await axios.get("https://qtify-backend-labs.crio.do/albums/top")
    setTopAlbum(res.data);
  }


  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Album album={topAlbum} type={"Top Album"}/>
      <hr className='horizontal-line'/>
      <Album album={newAlbum} type={"New Album"} />
      <hr className='horizontal-line'/>
    </div>
  );
}

export default App;
