import React, { Component } from 'react';

class Exercise1 extends Component {
  constructor() {
    super()
    this.state = {
      images: [
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA3Ni85MTYvb3JpZ2luYWwvc3BpbmFjaC5qcGc=",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
      currentImg: 0
    }
  }
  shiftImageBack = () => {
    let prevImg
    this.state.currentImg == 0 ? prevImg = this.state.images.length - 1 : prevImg = this.state.currentImg-1
    this.setState({currentImg: prevImg}) 
  }
  shiftImageForward = () => {
    let nextImg
    this.state.currentImg == (this.state.images.length - 1) ? nextImg = 0 : nextImg = this.state.currentImg+1
    this.setState({currentImg: nextImg})
  }

  render() {
    return (
      <div >
          <button className="back" onClick={this.shiftImageBack}>Previous</button>
          <img src={this.state.images[this.state.currentImg]}></img>
          <button className="forward" onClick={this.shiftImageForward}>Next</button>
      </div>
    );
  }
}

export default Exercise1;
