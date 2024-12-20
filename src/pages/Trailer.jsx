import React from 'react'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
import  { useEffect, useRef } from 'react';
import YTPlayer from 'youtube-iframe';import { useState } from 'react';


function Trailer() {
  const {id}=useParams()
  const baseUrl='https://image.tmdb.org/t/p/original/';
  const [trailerUrl,setTrailerUrl]=useState('');
  const opts={
    height:'300',
    width:'100%',
    playerVars:{
      autopla:1,
    }
  }
  return (
    <div style={{background:'white',height:'800px'}}>
     {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}




      

      </div>
  )
}

export default Trailer