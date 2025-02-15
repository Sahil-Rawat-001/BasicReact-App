

function ProfilePicture(){

    const imageUrl = './src/assets/photo.jpg';
    const handleClick = (e) => e.target.style.display = "none";


    return(

        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="image" />
    );
}

export default ProfilePicture