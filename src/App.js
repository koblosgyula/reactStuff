import Image from "./components/Image";
import "./styles.scss";

const imageArray = [
  "/images/mushroom1x.jpg",
  "/images/mushroom2x.jpg 2x",
  "/images/mushroom3x.jpg 3x"
];
const imageString = "/images/mushroom3x.jpg";

export default function App() {
  return (
    <div className="App">
      {/* Use imageArray || imageString */}
      <Image srcSet={imageArray} />
      <Image srcSet={imageString} />
    </div>
  );
}
