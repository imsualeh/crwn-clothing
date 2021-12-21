import React from 'react';
import {  Routes, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';



class App extends React.Component {
  constructor(){
    super();

    this.state = {

      currentUser : null
    }
  }

  unSubcribeFromAuth = null

  componentDidMount(){
    this.unSubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user })
      console.log(user);

    })
  }

  componentWillUnmount(){
    this.unSubcribeFromAuth();
  }


  render()
    {
      return (
  
        <div>
        <Header currentUser = {this.state.currentUser} />
          <Routes>
          <Route exact path='/' element={ <HomePage />} />
          <Route path='/shop' element={ < ShopPage />  } />
          <Route path='/signin' element={ < SignInAndSignUpPage/>  } />
         </Routes>
        
        </div>
        
      );
    }
  
  
}

export default App;
