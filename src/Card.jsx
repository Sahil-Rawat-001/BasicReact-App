import photo from  './assets/photo.jpg'

function Card(){

    return(

        <div className='card'>
          <img className='photo-class' src={photo} alt="img" />
          <h2 className='card-title'>Sahil Rawat</h2>
          <p className='card-desc'>I am most powerfull person ever.</p>
        </div>
    );

}

export default Card