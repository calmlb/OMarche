import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import VendorsPage from '../../pages/VendorsPage/VendorsPage';
import StorePage from '../../pages/StorePage/StorePage';
import ProductPage from '../../pages/ProductPage/ProductPage';
import SignupPage from './SignupPage/SignupPage';
import LoginPage from './LoginPage/LoginPage';
import userService from '../../utils/userService';
// import tokenService from '../../utils/tokenService';

class App extends Component {

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }


  
  render() {
    return (
      <div className="App">
        <header className="App-header-footer">
          O Marche
        </header>
        <Switch>
          <Route exact path='/' render={() => 
          <MainPage handleLogout={this.handleLogout}/>
          } />
          <Route exact path='/vendors' render={() => 
          <VendorsPage />
          } />
           <Route exact path='/store' render={() => 
          <StorePage />
          } />
           <Route exact path='/product' render={() => 
          <ProductPage />
          } />
          <Route exact path ='/signup' render={({history}) =>
          <SignupPage history={history}
          handleSignupOrLogin={this.handleSignupOrLogin}
          />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          :
          <Redirect to='/login'/>
        </Switch>
      </div>
    );
  }

}


export default App;
