import mobil from '../../assets/img/image 1.png'
import Header from '../../components/Header/Header'
import FormPencarian from '../../components/FormPencarian/FormPencarian';
import Footer from '../../components/Footer/Footer'
import calender from '../../assets/Icon/calendar.png'
import users from '../../assets/Icon/users.png'
import Rent from '../../assets/Icon/Rent.png'

function Detail() {

    return (
        <div class="container-fluid" >
         <Header />
          <div class="container style=">
              <FormPencarian />
              <div class="row">
                  <div class="col-7">
                     <h3>Tentang Paket</h3>
                     <p>
                         Include
                         <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                         <li>Sudah termasuk bensin selama 12 jam</li>
                         <li>Sudah termasuk Tiket Wisata</li>
                         <li>Sudah termasuk pajak</li>
                     </p>
                     <p>
                         Exclude
                         <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                         <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                         <li>Tidak termasuk akomodasi penginapan</li>
                     </p>

                     <h3>Refund, Reschedule, Overtime</h3>
                     <ul>
                         <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                         <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                         <li>Tidak termasuk akomodasi penginapan</li>
                         <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                         <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                         <li>Tidak termasuk akomodasi penginapan</li>
                         <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                         <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                         <li>Tidak termasuk akomodasi penginapan</li>
                     </ul>
                  </div>

                  <div class="col-5">
                  <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img src={mobil} alt="hasilmobil" />
                        </h5>
                        <p>Nama/Tipe Mobil</p>
                        <h6>Rp 430.000 / hari</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            <img src={users} alt="user" />4 orang
                            <img src={Rent} alt="rent" />Manual
                            <img src={calender} alt="cal" />Tahun 2020

                        </p>
                        <div class="btn-group" aria-label="Basic example">
                            <button type="button" class="btn btn-danger">
                                {/* <img src={pilih} alt="icon-trash" />Pilih Mobil */}
                                <p>Pilih Mobil</p>
                            </button>                            
                        </div>
                    </div>
                  </div>
                  </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}
export default Detail;