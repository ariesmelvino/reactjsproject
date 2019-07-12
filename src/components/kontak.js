import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Iframe from 'react-iframe'

class Kontak extends Component {
  render() {
    return(
      <div className="content-body">
        <Grid className="content-grid">
        <Cell col={5}>
          <h3>Hubungi Saya</h3>
          <hr/>
          <div className="content-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  0878-7135-4445
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-fax" aria-hidden="true"/>
                 (021) XXXXXXX
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  aries.melvino@mitraintikreasindo.co.id
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                  <i className="fa fa-globe" aria-hidden="true"/>
                  mitraintikreasindo.co.id
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>

        <Cell col={7}>
            <h3>Alamat Kantor</h3>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
             <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1012512422944!2d106.60463181476923!3d-6.250387595475753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc69f254ca59%3A0xe03d492e1c7a87ed!2sMelvinsoft+MIK!5e0!3m2!1sid!2sid!4v1561128866170!5m2!1sid!2sid"
                     width="450px"
                     height="400px"
                     id="myId"
                     className="myClassname"
                     display="initial"
                     position="relative"
                     allowFullScreen/>
            </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Kontak;
