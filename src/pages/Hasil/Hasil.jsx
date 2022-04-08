import mobil from '../../assets/img/image 1.png'
import Header from '../../components/Header/Header'
import FormPencarian from '../../components/FormPencarian/FormPencarian';
import Footer from '../../components/Footer/Footer'
import calender from '../../assets/Icon/calendar.png'
import users from '../../assets/Icon/users.png'
import Rent from '../../assets/Icon/Rent.png'
// import pilih from '../../assets/img/Button.png'

function Hasil() {
    return (
        <div container>
            <Header />
         <div class="row">
            <FormPencarian />
            <div class="col-4">
                <div class="card" sx={{width: '333px', height: '586px', margin: '0px 24px' }}>
                    <div class="card-body">
                     <h5 class="card-title">
                        <img sx={{position: 'absolute', width: '270px', height: '160px', left: '16px', top: '31px'}} src={mobil} alt="hasilmobil" />
                        </h5>
                        <p>Nama/Tipe Mobil</p>
                        <h6>Rp 430.000 / hari</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        <p class="card-text"><img src={users} alt="user" />4 orang</p>
                        <p class="card-text"><img src={Rent} alt="rent" />Manual</p>
                        <p class="card-text"><img src={calender} alt="cal" />Tahun 2020</p>
``                      </p>
                        <div class="btn-group" aria-label="Basic example">
                            <button type="button" class="btn btn-success">
                                <p>Pilih Mobil</p>
                            </button>                            
                        </div> 
                    </div>
                </div>              
            </div>

            <div class="col-4">
                <div class="card" sx={{width: '333px', height: '586px'}}>
                    <div class="card-body" >
                     <h5 class="card-title">
                        <img src={mobil} alt="hasilmobil" />
                        </h5>
                        <p>Nama/Tipe Mobil</p>
                        <h6>Rp 430.000 / hari</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        <p class="card-text"><img src={users} alt="user" />4 orang</p>
                        <p class="card-text"><img src={Rent} alt="rent" />Manual</p>
                        <p class="card-text"><img src={calender} alt="cal" />Tahun 2020</p>
``                      </p>
                        <div class="btn-group" aria-label="Basic example">
                            <button type="button" class="btn btn-success">
                                <p>Pilih Mobil</p>
                            </button>                            
                        </div> 
                    </div>
                </div>              
            </div>

            <div class="col-4">
                <div class="card" sx={{width: '333px', height: '586px'}}>
                    <div  class="card-body" >
                     <h5 class="card-title">
                        <img src={mobil} alt="hasilmobil" />
                        </h5>
                        <p>Nama/Tipe Mobil</p>
                        <h6>Rp 430.000 / hari</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        <p class="card-text"><img src={users} alt="user" />4 orang</p>
                        <p class="card-text"><img src={Rent} alt="rent" />Manual</p>
                        <p class="card-text"><img src={calender} alt="cal" />Tahun 2020</p>
``                      </p>
                        <div class="btn-group" aria-label="Basic example">
                            <button type="button" class="btn btn-success">
                                <p>Pilih Mobil</p>
                            </button>                            
                        </div> 
                    </div>
                </div>              
            </div>

        </div>
        <Footer />
    )</div>
    )
}
export default Hasil;