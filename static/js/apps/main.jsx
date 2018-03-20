import React from 'react';
import { render } from "react-dom";
import ContainerProductos from "./componentes/ContainerProductos";

const App = () => <div id="contenedorProductos"><div className="container"><ContainerProductos/></div></div>;


render(<App/>, document.getElementById('app'));
