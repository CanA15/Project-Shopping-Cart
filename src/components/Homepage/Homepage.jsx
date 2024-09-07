import { Link } from "react-router-dom";
import style from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <div>
        <div className={style.homeContainer}>
          <img src="./imgs/HomepagePicture.jpeg"></img>
          <div className={style.textContainer}>
            <h1>The fastest and easiest way to order food</h1>
            <p>Choose the food you want to eat and we take care of the rest!</p>
            <div className={style.link}>
              <Link to="/Store">Order Now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
