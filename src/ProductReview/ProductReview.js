import React from "react";
import classes from "./ProductReview.module.css";
const ProductReview = (props) => {
  const currentHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const currentmin =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  return (
    <div className={classes.ProductPreview}>
      <img src={props.currentPreviewImage} alt="HI"></img>
      {props.showHeartBeat ? (
        <div className={classes.FeatureHeartBeat}>
          <i className="fas fa-heartbeat"></i>
          <p>78</p>
        </div>
      ) : (
        <div className={classes.FeatureTimesection}>
          <p>{`${currentHour}:${currentmin}`}</p>
        </div>
      )}
    </div>
  );
};

export default ProductReview;
