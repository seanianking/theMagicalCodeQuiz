import React from "react";

class CardBody extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
      <div className="card-body">
          <p className="card-text">Click Count: {this.props.count}</p>
          <button className="btn btn-primary" onClick={this.props.increment}>
            Increment
          </button>
        <button className="btn btn-primary" onClick={this.props.decrement}>
          Decrement
        </button>
      </div>
      </div>
    );
  }
}

export default CardBody;
