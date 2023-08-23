import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
// import Home from './Home';
// import Emp from './Emp';
import Dashboard from './Dashboard';
import TestInput from './TestInput';
import Sample from './Sample';
import Demo from './Demo';
import Launch from './Launch';


// debugger;

const root = 
  ReactDOM.createRoot(document.getElementById('root'));


 // debugger;
// root.render(<Home></Home>);
//console.log("Inside INDEX JS")
// root.render(<Emp></Emp>)
// root.render(<Dashboard></Dashboard>)
// root.render(<TestInput></TestInput>)

// root.render(<Sample></Sample>)

// root.render(<Demo></Demo>)

root.render(<BrowserRouter>
              <Launch/>
            </BrowserRouter>)

