import React, { useContext, useState } from 'react'
import './Main.css'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { PhotoDataContext } from "./Context"



const Main = () => {
  const { photoData, setPhotoData } = useContext(PhotoDataContext);
  // console.log(adminCarData)
    const [images, setImages] = useState("");
    const [result, setResult] = useState([]);

    const data = (e)=> {
        
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${images}&client_id=JMAefRC5zD7WhqH43XffJJi9-eKVNfFxhtmbx8-D4wA`)
        .then((res)=> {
          // console.log(res.data)
          // e.preventDefault();
          setResult(res.data.results);
        })
    }

    const handleImage = (value) =>{
      
      setPhotoData([...photoData,value])
      console.log(photoData);
      alert("Bookmarked Image!")
    }

  return (
    <div className='container'>
        <div className="main">
            <h1 className='header'>React Photo Search</h1>
            <div className="bookmark">
                 <Link to='/bookmark'><button className='bookmark-btn' >Bookmark</button></Link> 
            </div>
            <div className="search">
                <input type='search' value={images} onChange={(e)=>{setImages(e.target.value)}} className='search-bar' placeholder='Search free high resolution images' />
                <button className='search-btn' onClick={data()}>Search</button>
            </div>
        </div>

        <div className="display-container">
          {result.map((value)=>{
            return (
              <>
                <div className="image-container" >
                  <a href="#" className='image-link' > 
                    <img className='display-img' onClick={()=> {handleImage(value)}}  src={value.urls.small} alt="" />
                  </a>
                </div>
              </>
            )
          })}
        </div>
    </div>
  )
}

export default Main