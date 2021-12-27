import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import Form from './Component/Form'
import Validation from './Component/validation';
import Pagination from './Component/Pagination'


function App() {


      return (
         <Router>
            <div className="">
               <Switch>
                  <Route path="/" exact component={Form} />
                  {/* <Route path="/page" exact component={Pagination} /> */}


                  
               </Switch>
            </div>
         </Router>


      );

}


export default App;
