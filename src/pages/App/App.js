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

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const position = [51.505, -0.09]


class App extends Component {

  state = {
    user: null,
    store: [],
    product: [],
    lat: null,
    lng: null,
    temp: null,
    icon: ''
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
  };

  getCurrentLatLng() {
    console.log("function is executing")
    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(pos => resolve({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      }));
    });
  }

  async componentDidMount() {

    let {lat, lng} = await this.getCurrentLatLng()
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=501a06495d77adca55164be4b5807bf4`;
    let fetchResult = await fetch(endpoint);
    let weatherData = await fetchResult.json();
    this.setState({
      lat,
      lng,
      temp: Math.round(weatherData.main.temp),
      icon: weatherData.weather[0].icon
    });
    console.log(Math.round(weatherData.main.temp));
   // storeApi part of ComponentDidMount
    const store = await storeApi.getStores();
    console.log(store)
    this.setState({store});
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


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => 
            <MainPage 
              handleLogout={this.handleLogout} 
              user={this.state.user}
            >
            <div>
              <div style= {
                {height: "200px"}
              }>
                <MapContainer id="mapid" center={position} zoom={13} scrollWheelZoom={false}>
                  <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                  <Popup>
                    Here you are! <br />
                  </Popup>
                  </Marker>
                </MapContainer>
                </div>
              <header className='App-header'>
                 <div>{this.state.temp}&deg;</div>
                  {this.state.icon && 
                  <img
                    src={`https://openweathermap.org/img/w/${this.state.icon}.png`}
                    alt='Current Conditions'
                  />
                }
              </header>
            </div> 
    </MainPage>
  }
/>
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
