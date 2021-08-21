import React, {useState} from 'react';
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default   ({title,items}) =>{
  const [scrollX,setScrollX] = useState(0 )

  const handleLeftArrow = ()=>{
  }

  const handleRightArrow = ()=>{

  }
  return(
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow-left" onCick={handleLeftArrow}>
          <NavigateBeforeIcon style={{fontSize:50}}/>
      </div>
      <div className="movieRow-right">
          <NavigateNextIcon style={{fontSize:50}}/>
      </div>

      <div className="movieRow-listArea" onCick={handleRightArrow}>
        <div className="movieRow-list" style={{
          marginLeft: scrollX,
          width: items.results.length *150
          }}>
        {items.results.length > 0 && items.results.map((item,key)=>(
          <div key={key} className="movieRow-item">
           <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />

          </div>
    
        ))}
        </div>
      
      </div>
    </div>
  )
}