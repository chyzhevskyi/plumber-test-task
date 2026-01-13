import "../assets/scss/home.scss";
import "../assets/scss/media.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import manPlumber from "../assets/img/man-plumber.png";
import benefitItem1 from "../assets/img/benefits/1.png";
import benefitItem2 from "../assets/img/benefits/2.png";
import benefitItem3 from "../assets/img/benefits/3.png";
import benefitItem4 from "../assets/img/benefits/4.png";
import Slider from "react-slick";

function AppHome () {
    var sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section className="welcome-block">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="welcome-block-content d-flex flex-column flex-lg-row justify-content-between align-items-lg-start align-items-center">
                                    <div className="text-block">
                                        <h1 className="page-title">Reliable Plumbing <span>Services</span></h1>
                                        <p className="page-subtitle">Your Trusted Local Plumber</p>
                                        <div className="buttons-block d-none d-lg-flex flex-column flex-sm-row justify-content-between align-items-center">
                                            <a href="#" className="request-service">Request Service</a>
                                            <a href="tel:1234567890" className="call-now">
                                                <p className="text-label">Call Now</p>
                                                <p className="phone-number">123-456-7890</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="illustration-block">
                                        <div className="buttons-block d-lg-none d-flex flex-column justify-content-start align-items-center">
                                            <a href="#" className="request-service">Request Service</a>
                                            <a href="tel:1234567890" className="call-now">
                                                <p className="text-label">Call Now</p>
                                                <p className="phone-number">123-456-7890</p>
                                            </a>
                                        </div>
                                        <img src={manPlumber} alt="Plumber" width={480}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="benefits">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="benefits-content">
                                    <div className="benefits-items d-none d-md-flex flex-row justify-content-between align-items-stretch">
                                        <div className="benefit-item">
                                            <img src={benefitItem1} alt="Benefit"/>
                                        </div>
                                        <span className="sep"></span>
                                        <div className="benefit-item">
                                            <img src={benefitItem2} alt="Benefit"/>
                                        </div>
                                        <span className="sep"></span>
                                        <div className="benefit-item">
                                            <img src={benefitItem3} alt="Benefit"/>
                                        </div>
                                        <span className="sep"></span>
                                        <div className="benefit-item">
                                            <img src={benefitItem4} alt="Benefit"/>
                                        </div>
                                    </div>
                                    <div className="benefits-mobile-slider d-md-none">
                                        <Slider {...sliderSettings}>
                                            <div>
                                                <img src={benefitItem1} alt="Benefit"/>
                                            </div>
                                            <div>
                                                <img src={benefitItem2} alt="Benefit"/>
                                            </div>
                                            <div>
                                                <img src={benefitItem3} alt="Benefit"/>
                                            </div>
                                            <div>
                                                <img src={benefitItem4} alt="Benefit"/>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="empty-background-fill"></div>
        </>
    )
}

export default AppHome
