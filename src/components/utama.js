import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Beranda from './beranda';
import Pelanggan from './partner';
import Produk from './produk';
import Kontak from './kontak';
import Login from './logincomponent';
//import Login from './Login';
//import Homestay from './homestay';

const Utama = () => (
  <Switch>
    <Route exact path="/" component={Beranda} />
    <Route path="/beranda" component={Beranda} />
    <Route path="/partner" component={Pelanggan} />
    <Route path="/produk" component={Produk} />
    <Route path="/kontak" component={Kontak} />
    <Route path="/logincomponent" component={Login} />
    {/*<Route path="/Login" component={Login} />*/}
  </Switch>
)

export default Utama;
