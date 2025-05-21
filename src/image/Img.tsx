import cat from "./1.jpg"
import cat2 from "./2.jpg"


const image = () =>{
    return(
        <div>
            <img src={cat} alt="cat"/>
            <img src={cat2} alt="cat2"/>
        </div>
    )
}

export default image;