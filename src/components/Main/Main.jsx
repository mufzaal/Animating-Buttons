import React from "react";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <>
      <h1 className={classes.text}>Explore the Buttons by our Contributors.</h1>
      <div className={classes.btns_container}>
        <iframe
          className={classes.container}
          title="abc"
          src="Buttons/Princeton21/index.html"
        ></iframe>
        <iframe
          className={classes.container}
          title="123shuklaayush"
          src="Buttons/123shuklaayush/index.html"
        ></iframe>
        <iframe
          className={classes.container}
          title="abc"
          src="Buttons/Spyware007_4/index.html"
        ></iframe>
        <iframe
          className={classes.container}
          title="abc"
          src="Buttons/Spyware007_6/index.html"
        ></iframe>
        <iframe
          className={classes.container}
          title="abc"
          src="Buttons/Spyware007_5/index.html"
        ></iframe>
      </div>
    </>
  );
};

export default Main;
