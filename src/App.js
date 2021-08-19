import React,{useEffect, useState} from 'react';
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow';
import './App.css'
export default ()=>{

  const [movieList, setMovieList] = useState([])
  useEffect(()=>{
    const loadAll = async()=>{
      let lista = await Tmdb.getHomeList();
      setMovieList(lista)
    }
    loadAll();
  },[])
  return(
   <div className="page">
     <section className="listas">
       {movieList.map((item,key)=>(
        <MovieRow key={key} title={item.title} items={item.items} />
       ))}
     </section>
   </div>

  )
}