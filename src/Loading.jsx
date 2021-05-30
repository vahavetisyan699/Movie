import React, { Component } from "react";


export default class Loading extends Component {
  render() {
    return (
      <>
        <div className="loadingDiv">
          <img src="https://opticart.ru/bitrix/upload/preloader.gif" alt="loading..." />
        </div>
      </>
    );
  }
}
