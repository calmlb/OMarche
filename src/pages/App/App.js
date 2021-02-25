import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as storeApi from '../../utils/storeApi';
import * as productApi from '../../utils/productApi'
import MainPage from '../../pages/MainPage/MainPage';
import VendorsPage from '../../pages/VendorsPage/VendorsPage';
import StorePage from '../../pages/StorePage/StorePage';
import ProductPage from '../../pages/ProductPage/ProductPage';
import AdminPage from '../../pages/AdminPage/AdminPage';
import CreateStore from '../../components/Admin/CreateStore';
import EditStore from '../../components/Admin/EditStore';
import SignupPage from './SignupPage/SignupPage';
import LoginPage from './LoginPage/LoginPage';
import userService from '../../utils/userService';
// import tokenService from '../../utils/tokenService';


class App extends Component {

  state = {
    user: null,
    store: [],
    product: []
  };

  // *** STORE HANDLERS ***
  handleAddStore = async newStoreData => {
    const newStore = await storeApi.createStore(newStoreData);
    this.setState(state => ({
      store: [...state.store, newStore]
    }),
    () => this.props.history.push('/admin'));
  };

  handleUpdateStore = async updatedStoreData => {
    const updatedStore = await storeApi.updateStore(updatedStoreData);
    const newStoreArray = this.state.store.map(p => 
      p._id === updatedStore._id ? updatedStore : p 
    );
    this.setState(
      {store: newStoreArray},
      () => this.props.history.push('/admin')
    );
  }

  handleDeleteStore = async id => {
    await storeApi.deleteStore(id);
    this.setState(state => ({
      store: state.store.filter(p => p._id !== id)
    }), () => this.props.history.push('/admin'));
  }

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

  // *** PRODUCT HANDLERS ****


  // *** Lifecycle Methods *** 
  async componentDidMount() {
    const store = await storeApi.getStores();
    console.log(store)
    this.setState({store});
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header-footer">
          O Marche
        </header>
        <Switch>
          <Route exact path='/' render={() => 
            <MainPage 
              handleLogout={this.handleLogout} 
              user={this.state.user}
            />
          } />
          <Route exact path='/vendors' render={() => 
            <VendorsPage 
              store={this.state.store}
            />
          } />
          <Route exact path='/store' render={() => 
            <StorePage  
            />
          } />
          <Route exact path='/product' render={() => 
            <ProductPage />
          } />
          <Route exact path='/admin' render={() => 
            <AdminPage 
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/admin/createstore' render={({history}) => 
            <CreateStore 
              history={history}
              handleAddStore={this.handleAddStore}
            />
          } />
          <Route exact path='/editstore' render={() => 
            <EditStore 
              handleUpdateStore={this.handleUpdateStore}
            />
          } />
          <Route exact path ='/signup' render={({history}) =>
            <SignupPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          :
          <Redirect to='/login'/>
        </Switch>
      </div>
    );
  }

}


export default App;
