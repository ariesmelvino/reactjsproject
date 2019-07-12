import React, { Component } from 'react';
import './App.css';
import Utama from './components/utama';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content, Footer } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Company Profile" scroll>
                  <Navigation>
                      <Link to="/beranda">Beranda</Link>
                      <Link to="/partner">Pelanggan</Link>
                      <Link to="/produk">Produk</Link>
                      <Link to="/kontak">Kontak</Link>
                  {/*<Link to="/kontak">Login</Link>*/}
                  </Navigation>
              </Header>
              <Drawer title="Company Profile"> 
                  <Navigation>
                  <Link to="/beranda">Beranda</Link>
                  <Link to="/partner">Pelanggan</Link>
                  <Link to="/produk">Produk</Link>
                  <Link to="/kontak">Kontak</Link>
                  {/*<Link to="/kontak">Login</Link>*/}
              </Navigation>
              </Drawer>
              <Content>
                <div className="page-content" />
                <Utama />
              </Content>
            <Footer>
              <div className="copyright" />
            </Footer>
          </Layout>
      </div>
    );
  }
}

export default App;
