import list from '../../assets/img/list item.png'
import segi from '../../assets/img/Rectangle 74.png'

const styles = {
    style: {
        height: '128px',
        width: '1141px',
        left: '173px',
        top: '672px',
        borderradius: '0px',
        justify: 'space-between',
        marginBottom: '10px',
    },
}

function Footer() {
    return (
        <section class={"flex-direction:row justify-content-space-between align-items-flex-start"} >
        <div class="container" className="margin-bottom:0px">
            <div class="row my-5">
                <div class="col-12">
                    <div class="d-flex" sx={styles.style}>
                        <div class="col-3">
                            <div class="wrapper-col-1">
                                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                                <p>binarcarrental@gmail.com</p>
                                <p>081-233-334-808</p>
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="wrapper-col-1">
                                <p>Our services</p>
                                <p>Why Us</p>
                                <p>Testimonial</p>
                                <p>FAQ</p>
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="wrapper-col-1">
                                <p>Connect with us</p>
                                <img src={list} alt='ngelist'/>
                            </div>
                        </div>

                        <div class="col-3">
                            <p>Copyright Binar 2022</p>
                            <img src={segi} alt='persegi' />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
    )
}
export default Footer;