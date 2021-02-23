import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import VendorsPage from '../../pages/VendorsPage/VendorsPage';
import StorePage from '../../pages/StorePage/StorePage';
import ProductPage from '../../pages/ProductPage/ProductPage';
import AdminPage from '../../pages/AdminPage/AdminPage';
import CreateStore from '../../components/Admin/CreateStore';
import EditStore from '../../components/Admin/EditStore';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header-footer">
          O Marche
        </header>
        <Switch>
          <Route exact path='/' render={() => 
          <MainPage />
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
          <Route exact path='/admin' render={() => 
          <AdminPage />
          } />
            <Route exact path='/admin/createstore' render={() => 
          <CreateStore />
          } />
           <Route exact path='/editstore' render={() => 
          <EditStore />
          } />
        </Switch>
      </div>
    );
  }

}


export default App;
