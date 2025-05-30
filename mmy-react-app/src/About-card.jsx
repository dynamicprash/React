import profilepic from './assets/download (2).jpeg'
function Card(){
    return(
        <div className="card">
            <img className='CardImange' src={profilepic} alt="Profile Picture" ></img>
            <h2 className="CardTitle">Prashant Paudel</h2>
            <p  className='CardText'>HI! My name is Prashant. I am a Computer Scidence(CS) student from Kathmandu.</p>

        </div>
    );
}

export default Card