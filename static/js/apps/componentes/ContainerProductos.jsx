import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
const mock = require('./../../../../data/mock.json');

class ContainerProductos extends Component {
  
  render() { 
    return (
      <div className="container">
        <div className="row">
        {
          mock.catalog.map((producto) => {
              return <div className="col-md-2" id={producto.id} key={producto.id}>
                      <img src={producto.imageURL} />
                      <h5>{producto.name}</h5>
                      <p>{producto.price}</p>
                  </div>;
          })
        }
        </div>
      </div>
    ); 
  }
}

export default ContainerProductos;