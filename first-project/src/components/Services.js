import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg"
export function Services(){
    return (
       <div >
            <Carousel infiniteLoop  autoPlay showStatus ={false} showArrows = {false} interval={1000} showThumbs = {false}>
                <div>
                    <img src={img1} alt = "Item1"></img>
                    <p className="legend">Full Stack </p>

                </div>
                <div>
                    <img src={img2} alt="Item2"></img>
                    <p className="legend"> Backend Export </p>
                </div>
            </Carousel>
       </div>
    );
} 