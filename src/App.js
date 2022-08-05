import './App.css';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';
import Row from './Row';
import {useState} from 'react'

function App() {
  const [obj, setObj] = useState();

  const handleClick = num => {
    // 👇️ take parameter passed from Child component
    setObj(num);
  };

  return (
    <div className="App">
      <Navbar handleClick={handleClick}/>
      <Banner/>
      <header className="App-header">
        <Row obj={obj}  title="NETFLIX ORIGINALS" fetchUrl={requests.fetchRomanceMovies} isLargeRow={true}/>
        <Row obj={obj} title= "Trending now" fetchUrl={requests.fetchTrending}/>
        <Row obj={obj} title= "TopRated Movies" fetchUrl={requests.fetchTopRated}/>
        <Row obj={obj} title= "ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
        <Row obj={obj} title= "HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row obj={obj} title= "RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row obj={obj} title= "SciFi Movies" fetchUrl={requests.fetchSciFi}/>
        <Row obj={obj} title= "Western Movies" fetchUrl={requests.fetchWestern}/>
        <Row obj={obj} title= "Animation Movies" fetchUrl={requests.fetchAnimation}/>
      </header>
    </div>
  );
}

export default App;
