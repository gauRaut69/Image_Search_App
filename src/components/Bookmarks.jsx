import React, {useContext} from 'react'
import './Bookmark.css';
import { PhotoDataContext } from "./Context"


const Image = () => {
  const { photoData, setPhotoData } = useContext(PhotoDataContext);
  // console.log(adminCarData)
  return (
    <div>
        <h1>Your Bookmarks</h1>

        <div className="display-container">
          {photoData.map((value)=>{
            return (
              <>
                <div className="image-container" >
                  <a href="#" className='image-link' > 
                    <img className='display-img' src={value.urls.small} alt="" />
                  </a>
                </div>
              </>
            )
          })}
        </div>
    </div>
  )
}

export default Image