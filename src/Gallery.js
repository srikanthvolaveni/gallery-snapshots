import React from 'react'
import './App.css'

const Gallery = ({data}) => {
    return (
        <div className="row">
        {data.map((image) =><div key={image.id} className='col-md-3'>
         <div>
            <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
            height="200" width="250" alt={image.title} className='m-2'/>
         </div>
        </div>)}
        </div>
    )
}
export default Gallery