import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import {db} from '../firebase'
import {arrayUnion,doc,updateDoc} from 'firebase/firestore'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import { Link, useNavigate,BrowserRouter,Switch,Route,Routes} from 'react-router-dom';
import Trailer from '../pages/Trailer';
import axios from 'axios';



function Movie({item}) {
    const [like,setLike]=useState(false)
    const [saved,setSaved]=useState(false)
    const [urlId, setUrlId] = useState("");
    const API_Key='4e44d9029b1270a757cddc766a1bcb63';


    const {user}=UserAuth();

    const movieID = doc(db, 'users', `${user?.email}`)

    const saveShow=async()=>{
      if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID,{
          savedShows:arrayUnion({
            id:item.id,
            title:item.title,
            img: item.backdrop_path
          })
        })
      }
      else{
        alert('Please log in to save a movie')
      }
    }
    
    //const handleMovie = (id)=>{
      //console.log(id,"iiiiiiiiiiiiiiiiDddd");
        //axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=1`).then(response=>{
          //console.log(response.data);
          //if(response.data.results.length !==0){
           // setUrlId(response.data.results[0])
         // }else{
           // alert('NO Records Found')
         // }
       // }).catch((err)=>{
         // if(err.response){
           // alert('NO Records Found 1')
           // console.log(err)
         // }
         
       // })
   // }

   async function getMovieTrailer() {
    try {
      
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${item.id}`, {
        params: {
          api_key: API_Key,
          append_to_response: 'videos', 
        },
      });
      const movieDetails = response.data;
    const videos = movieDetails.videos.results;

    
    if (videos.length > 0) {
      
      const trailerKey = videos[0].key;

    
      const youtubeUrl = `https://www.youtube.com/watch?v=${trailerKey}&fullscreen=true`;
      window.open(youtubeUrl, '_blank');
    } else {
      console.log('No trailers found for this movie.');
    }
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
}
  
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
        autoplay: 1,
    }
  }



  return (

    
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      
              <img  key={item.id} className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} ></img>
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white' onClick={getMovieTrailer}>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
               <p onClick={saveShow}>
                {like?<FaHeart className='absolute top-4 left-4 text-gray-300'></FaHeart>:<FaRegHeart className='absolute top-4 left-4 text-gray-300'></FaRegHeart>}
                </p>
                

              </div>
              { urlId &&  <YouTube videoId={urlId.key} opts={opts} />  } 
       
              
              
            </div>
            
           
            
            
            
  )
}

export default Movie