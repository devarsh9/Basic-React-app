import React, { Component } from "react";
import classes from "./App.module.css";
import img from "./amazon.png";
import ProductReview from "./ProductReview/ProductReview.js";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductData from "./ProductData";

class App extends Component {
  state = {
    productData: ProductData,
    imageUrl: "https://imgur.com/iOeUBV7.png",
    currentPreviewImagePos: 0,
    showHeartBeat: false,
  };

  onColorClick = (pos) => {
    this.setState({ currentPreviewImagePos: pos });
  };

  onFeatureItemClick = (pos) => {
    let updatedState = false;
    if (pos === 1) {
      updatedState = true;
    }
    this.setState({ showHeartBeat: updatedState });
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.currentPreviewImagePos === this.state.currentPreviewImagePos
    ) {
      return false;
    }
    return true;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className={classes.topBar}>
            <img src={img} alt="Amazon Logo"></img>
          </nav>
        </header>
        <div className={classes.MainContainer}>
          <ProductReview
            currentPreviewImage={
              this.state.productData.colorOptions[
                this.state.currentPreviewImagePos
              ].imageUrl
            }
            showHeartBeat={this.state.showHeartBeat}
          />
          <ProductDetails
            data={this.state.productData}
            onColorClick={this.onColorClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            onFeatureItemClick={this.onFeatureItemClick}
            showHeartBeat={this.state.showHeartBeat}
          />
        </div>
      </div>
    ); //
  }
}

export default App;
