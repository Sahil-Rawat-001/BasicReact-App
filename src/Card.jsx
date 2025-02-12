import photo from  './assets/photo.jpg'

function Card(props){

    return(

        <div className='card'>
          <img className='photo-class' src={photo} alt="img" />
          <h2 className='card-title'>{props.name}</h2>
          <p className='card-desc'>{props.desc}</p>
        </div>
    );

}

export default Card