import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import swagimg from "../../assets/SwagImg.png";
import "./Carousel.scss";

export default function Carouse() {
  return (
    <div className="Carouse">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={swagimg} alt="Image One" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={swagimg} alt="Image Two" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
