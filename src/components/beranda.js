import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Beranda extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="beranda-grid">
          <Cell col={12}>
            <img
              src="https://i.ibb.co/gZx1N9t/logo-1-5x.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <p><b>TENTANG KAMI</b><br/>PT. MITRA INTI KREASINDO adalah perusahaan yang bergerak di bidang MERCHANDISING atau penyuplai kebutuhan marketing support bagi perusahaan dan perorangan. Berdiri sejak tahun 2015 di Kota Depok. Merchandise yang ditawarkan meliputi berbagai jenis boneka, maskot, tas, payung, aksesories, dan lain-lain. <br/>PT. MITRA INTI KREASINDO selalu konsisten dalam bidang yang dijalani dan selalu mengutamakan kepuasan pelanggan, kualitas produk, harga yang terjangkau dan ketepatan waktu.</p>
                 
              
            </div>
            <div className="banner-text2">
            <p><b>VISI KAMI</b><br/>Menjadi perusahaan merchandising terdepan yang selalu mengutamakan kepuasan pelanggan dengan memberikan produk berkualitas terbaik.</p>
            </div>
            <div className="banner-text3">
            <p><b>MISI KAMI</b><br/>1. Menjalankan perusahaan secara profesional<br/>2. Menghasilkan produk merchandising yang inovatif dan berkualitas<br/>3. Memberikan pelayanan terbaik dan solusi yang lebih kreatif, inovatif dan kompetitif kepada seluruh pelanggan<br/>4. Membangun kemitraan yang baik dengan para pelanggan dan saling menguntungkan sebagai partner<br/>5. Meningkatkan kontribusi positif kepada home industri</p>
            </div>
            <div className="banner-text4">
            <p><b>PRODUK KAMI</b><br/>Produk kami adalah produk dengan kualitas yang sudah terjamin, dengan selalu menawarkan solusi yang kreatif, inovatif dan kompetitif yaitu antara lain sbb :<br/>➢ Boneka dan boneka maskot<br/>➢ Merchandise bahan boneka<br/>➢ Bermacam jenis tas, payung<br/>➢ Produk support marketing lainnya</p>
            </div>
            <div className="banner-text4">
            <p><b>MENGAPA PILIH KAMI</b><br/>Memilih bermitra dengan kami, maka anda :<br/>• Berada di tangan yang tepat<br/>• Mendapatkan tawaran yang selalu kompetitif namun tetap mengutamakan solusi terbaik yang kreatif dan inovatif<br/>• Mendapatkan jaminan mutu produk yang kami cek langsung sebelum dikirim<br/>• Memastikan kemitraan yang saling menguntungkan sebagai partner</p>
            </div>
            <div className="banner-text4">
            <p><b>TEMUKAN KAMI DI</b></p>
              <div className="social-links">
                <a href="https://www.facebook.com/ariesmelvino" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                <a href="https://twitter.com/ariesmelvino" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                <a href="https://github.com/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com/channel/UCkaw4sSw99RBuAjtKaaPvMQ" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
                </div>
             </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Beranda;
