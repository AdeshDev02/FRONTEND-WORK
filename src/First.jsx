
import Footer from "./Footer";

function First() {

    function dan() {
        alert('hello')
        
    }

    return(
        <>
            This is First component
            <Footer place="Abuja" name="Adesh" frank={dan}/>
            
        {/* <h1 style={{color:"blue" , fontFamily:"monospace"}}>Welcome to react</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab dicta reprehenderit reiciendis veritatis tenetur, perferendis commodi amet explicabo, voluptate repellendus magnam voluptatibus excepturi fugit aspernatur, voluptatum placeat. Nam, error?
        </p>
        <div className="john"></div> */}
        </>

    )
    
}
export default First