const API_KEY ='ba2a7e0f31a59ada8f45879e6bc01ce0';
const API_BASE ='https://api.themoviedb.org/3';



/*
-Series originais da netflix
-Recomendados
-Em alta
-Lista Ação
-Lista Drama
-Lista Terror
-Lista Romance
-Lista Documentários
*/

const basicFetch = async (endpoint)=>{
  return (await fetch(`${API_BASE}${endpoint}`)).json();
}

export default {

  getHomeList : async()=>{
return [
  {
    slug:'originals',
    title:'Originais da Netflix',
    items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
  },
  {
    slug:'trending',
    title:'Recomendados para Você!',
    items: await basicFetch(`/trending/all/week?&language=pt-BR&api_key=${API_KEY}`)

  },
  {
    slug:'toprated',
    title:'Em Alta',
    items: await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)

  },
  {
    slug:'action',
    title:'Filmes de Ação',
    items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)

  },
  {
    slug:'drama',
    title:'Filmes de Drama',
    items: await basicFetch(`/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`)

  },
  {
    slug:'horror',
    title:'Filmes de Terror',
    items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)

  },
  {
    slug:'romance',
    title:'Filmes de Romance',
    items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)

  },
  {
    slug:'documentary',
    title:'Documentários',
    items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)

  },
]
  },
  getMovieInfo: async (movieId, type) =>{
    let info ={}
      if(movieId) {
        switch(type){
          case 'movie':
            info = await  basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
          case 'tv':
            info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
          default:
            info=null
            break;
        }
      }
      
      return info;
    
  }
}
