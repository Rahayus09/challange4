import React from 'react'
import Header from '../../components/Header/Header'
import FormPencarian from '../../components/FormPencarian/FormPencarian';
import mobil from '../../assets/img/img_car.png'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div class="container-fluid" >
      <Header />
          <div class="container style=">
              <div class="row">
                  <div class="col-6" id="opening">
                      <h1>Sewa & Rental Mobil Terbaik<br/>di Kawasan (Lokasimu)</h1>
                      {/* <p class='pb-3'> */}
                      <p></p>
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br/> terbaik dengan
                          harga terjangkau. selalu siap melayani kebutuhanmu<br/> untuk sewa mobil selama 24 jam. <p/>

                  </div>

                  <div class="col-6">
                    <className sx= {{position: 'absolute'}} />
                        <img class="img-fluid" src={mobil} alt="car images"/>
                  </div>
                  <FormPencarian />
                </div>
          </div>
        <Footer />
  </div>
  );
}

export default Home;