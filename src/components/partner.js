import React, { Component } from 'react';
import { Grid, Cell, Card } from 'react-mdl';

class Pelanggan extends Component {
  render() {
    return(
      <div className="content-body">
        <Grid className="content-grid2">
        <Cell col={3}>
          <div className="content-list">
            <img
              src="http://mitraintikreasindo.co.id/wp-content/uploads/2018/07/logosaja.jpg"
              alt="avatar"
              className="avatar-img"
               />
          <hr style={{borderTop: '4px solid #833fb2'}}/>
          <p>Alamat:</p>
          <p>Jl. Karawaci Residence No.B3/55</p>
          <p>Phone: 088899977755</p>
          <p>Email: aries.melvino@gmail.com</p>
          <p>Web: http://mitraintikreasindo.co.id</p>
          </div>
        </Cell>

        <Cell className="resume-right-col" col={9}>
            <h3>Klien Kami</h3>
            <h6>Kami telah berpengalaman dalam bermitra dengan beberapa klien yang mendapatkan kepuasan, antara lain klien kami adalah:</h6>
            <Grid>
              <Cell col={1}>
                <p>1</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>PT. Novell Pharmaceutical Laboratories</h5>
              </Cell>
            </Grid>
            <Grid>
              <Cell col={1}>
                <p>2</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>PT. Darya Varia Laboratories</h5>
              </Cell>
            </Grid>
            <hr style={{borderTop: '3px solid #e22947'}} />
            <Grid>
              <Cell col={1}>
                <p>3</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>PT. Sarihusada Generasi Mahardhika</h5>
              </Cell>
            </Grid>
            <Grid>
            <Cell col={1}>
                <p>4</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{marginTop:'0px'}}>PT. Jungleland Asia</h5>
              </Cell>
              </Grid>
              
        </Cell>
        </Grid>
       
        {/*<div className="content-body">
        <Grid className="content-grid">*/}
        {/*</Grid><Cell col={12}>*/}
        <Cell col={12}>
         <div className="projects-grid">

        {/* Project 1 */}
        <Card shadow={5} style={{width: '240px', height: '240px', background: 'url(https://i.ibb.co/XWdH9Gj/NOVELL.jpg) center / cover', margin: 'auto'}}>
        </Card>
           
                    
        {/* Project 2 */}
        <Card shadow={5} style={{width: '350px', height: '150px', background: 'url(https://i.ibb.co/ZYxhyKQ/1470217796darya-varia.jpg) center / cover', margin: 'auto'}}>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{width: '580px', height: '260px', background: 'url(https://i.ibb.co/BZgkX8w/SAIHUSADA.png) center / cover', margin: 'auto'}}>
        </Card>
      
        {/* Project 4 */}
        <Card shadow={5} style={{width: '250px', height: '160 px', background: 'url(https://i.ibb.co/HYJgKJY/jungleland.png) center / cover', margin: 'auto'}}>
        </Card>
        </div>
       </Cell>
       {/*</Grid>

       
       </div>*/}
         
      </div>
    )
  }

}

export default Pelanggan;
