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
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {

  getHomeList: async()=>{
return[
  {
    slug:'originals',
    title:'Originais da Netflix',
    items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
  },
  {
    slug:'trending',
    title:'Recomendados para Você!',
    items:[]
  },
  {
    slug:'toprated',
    title:'Em Alta',
    items:[]
  },
  {
    slug:'action',
    title:'Filmes de Ação',
    items:[]
  },
  {
    slug:'drama',
    title:'Filmes de Drama',
    items:[]
  },
  {
    slug:'horror',
    title:'Filmes de Terror',
    items:[]
  },
  {
    slug:'romance',
    title:'Filmes de Romance',
    items:[]
  },
  {
    slug:'documentary',
    title:'Documentários',
    items:[]
  },
]
  }
}