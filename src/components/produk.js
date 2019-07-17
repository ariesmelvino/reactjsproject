import React, { Component } from 'react';
import { Grid, Cell, Card} from 'react-mdl';

class Produk extends Component {
  render() {
    return(
      <div className="content-body">
        <Grid className="content-grid">
        {/*</Grid><Cell col={12}>*/}
        <Cell col={12}>
          <h3><b>Galery Produk</b></h3>
          <hr /><br />
          <div className="projects-grid">

        {/* Project 1 */}
        <Card shadow={5} style={{width: '256px', height: '380px', background: 'url(https://i.ibb.co/Jj8GgkV/IMG-20180510-WA0063.jpg) center / cover', margin: 'auto'}}>
        <div className="banner-text5">
          <h1><b>Gantungan Kunci Karakter</b></h1>
        </div>
        </Card>
           
                    
        {/* Project 2 */}
        <Card shadow={5} style={{width: '256px', height: '380px', background: 'url(https://i.ibb.co/Btygb72/IMG-20180510-WA0040.jpg) center / cover', margin: 'auto'}}>
        <div className="banner-text5">
          <h1><b>Maskot Jungle</b></h1>
        </div>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{width: '256px', height: '380px', background: 'url(https://i.ibb.co/KLLTNmS/IMG-20180510-WA0060.jpg) center / cover', margin: 'auto'}}>
        <div className="banner-text5">
          <h1><b>Karakter Bear</b></h1>
        </div>
        </Card>
      
        {/* Project 4 */}
        <Card shadow={5} style={{width: '256px', height: '380px', background: 'url(https://i.ibb.co/RjG6hvd/IMG-20180510-WA0030.jpg) center / cover', margin: 'auto'}}>
        <div className="banner-text5">
          <h1><b>Karakter Pinguin</b></h1>
        </div>
        </Card>

       
        </div>
        {<br/>}
        <div className="projects-grid">

        {/* Project 5 */}
        <Card shadow={5} style={{width: '380px', height: '256px', background: 'url(https://i.ibb.co/jTYnbV2/IMG-20180510-WA0061.jpg) center / cover', margin: 'auto'}}>
        <div className="banner-text5">
          <h1><b>Bantal Permen</b></h1>
        </div>
        </Card>

        {/* Project 6 */}
        <Card shadow={5} style={{width: '380px', height: '256px', background: 'url(https://i.ibb.co/fpSk97L/IMG-20180510-WA0029.jpg) center / cover', margin: 'auto'}}>
        <div className="banner-text5">
          <h1><b>Karakter 3 Shio</b></h1>
        </div>
        </Card>

        {/* Project 7 */}
        <Card shadow={5} style={{width: '380px', height: '256px', background: 'url(https://i.ibb.co/PtSn2Rp/IMG-20180510-WA0038.jpg) center / cover', margin: 'auto'}}>
        <div className="banner-text5">
          <h1><b>Karakter Fruits</b></h1>
        </div>
        </Card>
                  
        </div>
        {<br/>}

        <div className="projects-grid">

        {/* Project 8 */}
        <Card shadow={5} style={{width: '380px', height: '298px', background: 'url(https://i.ibb.co/kxhwzPS/IMG-20180510-WA0036.jpg) center / cover', margin: 'auto'}}>
        <div className="banner-text5">
          <h1><b>Bantal Leher Custom</b></h1>
        </div>
        </Card>

        {/* Project 9 */}
        <Card shadow={5} style={{width: '380px', height: '256px', background: 'url(https://i.ibb.co/kGkKkSc/IMG-20180510-WA0057.jpg) center / cover', margin: 'auto'}}>
        <div className="banner-text9">
          <h1><b>Karakter Puppies</b></h1>
        </div>
        </Card>

        {/* Project 10 */}
        <Card shadow={5} style={{width: '380px', height: '256px', background: 'url(https://i.ibb.co/j65bZMJ/IMG-20180510-WA0059.jpg) center / cover', margin: 'auto'}}>
        <div className="banner-text5">
          <h1><b>Bantal Karakter Macan</b></h1>
        </div>
        </Card>
                  
        </div>

              

        

        

        </Cell>
      </Grid>
    
      
    </div>
    )
  }
}

export default Produk;
