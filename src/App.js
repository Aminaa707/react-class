import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Counters from './components/counters';
import './App.css';
import Nav from './components/Nav';
import UserData from './components/UserData';
import { Navigate, Outlet } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Form from './components/Form';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { Auth: true }
  //   const prop = props;
  // }



  render() {
    // const PrivateRoute = ({ component: Component, ...rest }) => {
    //   <Route {...rest} render={(props) => (
    //     this.state.Auth === false ?
    //       <component {...rest} /> :
    //       <Navigate to="/" />
    //   )} />
    // }


    return (
      <div className="App">
        <Nav />
        <Form/>
        <BrowserRouter>
          <Routes>

            <Route exact path="/" element={<Counters />} />
            
  <Route exact path='/user' element={<PrivateRoute/>}>
            <Route exact path='/user' element={<UserData/>}/>
          </Route>

            <Route path="*" element={<><h1>NOT FOUND 404</h1> <span> <a href="/"> GO TO HOME</a> </span>  </>} />

          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}



export default App;