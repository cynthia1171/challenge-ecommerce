import React, { Component } from "react";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
const mock = require('./../../../../data/mock.json');



class ContainerProductos extends Component {
  
  render() { 
    return (
        <CardDeck>
          {
            mock.catalog.map((producto) => {
              return  <Card className="test" id={producto.id} key={producto.id}>
                        <CardImg src={producto.imageURL} alt="Card image cap" />
                        <CardBody>
                          <CardTitle>Card title</CardTitle>
                          <CardSubtitle>{producto.name}</CardSubtitle>
                          <CardText>${producto.price}</CardText>
                          <Button color="danger">Agregar</Button>
                        </CardBody>
                      </Card>
                      ;
            })
          }
        </CardDeck>
    ); 
  }
}

export default ContainerProductos;