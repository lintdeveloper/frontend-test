import classes from "./Hero.module.css";

import hero_img from "../../assets/media/hero-image.png";

function Hero() {
  return (
    <section className={classes["hero--section"]}>
      <div className={classes["hero--section-left"]}>
        <h1 className={classes["hero--heading"]}>
          Making data more <br /> open-source for developers <br /> in
          the creator economy
        </h1>
        <p className={classes["hero--description"]}>
          Open /API/ is a platform that creates APIs that can be
          easily accessed and integrated by developers working in the
          creative space. Our goal is to increase quality data
        </p>
        <div tabIndex="0" className={classes["subscribe--box"]}>
          <input
            placeholder="Email Address"
            type="text"
            className={classes["subscribe--input"]}
          />
          <button className={classes["subscribe--btn"]}>
            Get Started
          </button>
        </div>
      </div>
      <div className={classes["hero--section-right"]}>
        <img src={hero_img} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
