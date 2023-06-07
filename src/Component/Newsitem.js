import React, { useEffect, useState } from 'react';
import News from './News';
function Newsitem () {
    
  const  [movies,setmovies]= useState([])
    
    

     const show =async ()=>{
    // let url = await  "https://api.tvmaze.com/search/shows?q=all";
            let data  = await fetch("https://api.tvmaze.com/search/shows?q=all");
             data = await data.json();
            console.log(data)
            setmovies(data)
            console.log(movies)
    } 
    useEffect(()=>{
    show();

},[])
    
           
       

 
        return (

            <div className="container my-4">
                <div className="row">
                    {movies.map((element) => {
                        console.log(element)
                       return  <div className="col-md-4" key={element.score}>
                            <News name={element.show.name} description={element.show.language} imageurl={element.show.image.original? element.show.image : "https://static.tvmaze.com/uploads/images/medium_portrait/128/321026.jpg"} newsurl={element.show.url}></News>

                        </div>

                    })}
                   


                </div>



            // </div>

        );

    }


export default Newsitem;