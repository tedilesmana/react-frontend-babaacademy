import React, { Component } from 'react';
import ImgMediaCard from '../component/home/cardCourse';
import '../style/VHome.css';
import axios from 'axios';
import { Link } from "react-router-dom";

class VHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: []
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        // setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
    }

    componentDidMount() {
        let currentComponent = this;
        console.log(this.state.post);

        axios.get('http://ec2-18-217-70-47.us-east-2.compute.amazonaws.com/api/course')
            .then(function(response) {
                // handle success
                console.log(response.data.response);
                currentComponent.setState({
                    post: response.data.response
                })
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
            .finally(function() {
                // always executed
            })
    }

    render() {
        return (
            <div>

    
    <div className="banner">
        <div className="container">
            <div className="banner__content">
                <h1>Kursus Online Digital marketing<br />Programing dan Desain<br />Telah di ikuti 133 ribu alumni</h1>
            </div>
        </div>
    </div>
    <div className="partner-item">
        <div className="container text-center">
            <h6>Pernah Di Liput Oleh:</h6>
            <ul className="partner__list">
                <li><img src={require('../assets/img/001.png')} className="img-fluid" alt="partner-logo" /></li>
                <li><img src={require('../assets/img/002.png')} className="img-fluid" alt="partner-logo" /></li>
                <li><img src={require('../assets/img/003.png')} className="img-fluid" alt="partner-logo" /></li>
                <li><img src={require('../assets/img/004.png')} className="img-fluid" alt="partner-logo" /></li>
                <li><img src={require('../assets/img/005.png')} className="img-fluid" alt="partner-logo" /></li>
            </ul>
        </div>
    </div>
    <div className="video-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12 pr-5">
                    <div className="video__iframe" id="portal-embed">
                        <iframe width="554" height="340" src="https://www.youtube.com/embed/k8XN5iCJFhI" frameBorder="0" allowFullScreen="" title="myFrame" id="iframe"></iframe>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 pl-5">
                    <div className="video__description pt-5">
                        <div className="video__content pt-4">
                            <h2>Liputan Babastudio E-Learning di kompas TV bersama alumni</h2>
                            <h5 className="text_secondary">Kompas TV melipus Babastudio E-Learning karena, memberikan kursus pada lebih 500 orang setiap harinya.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="slider-section">
        <div className="container">
            <div className="slider__content">
                <div className="slider__title">
                    <div className="clearfix">
                        <h4 className="float-left">Kursus Terpopuler di <strong>Design</strong></h4>
                        <Link className="float-right" to="https://academy.babastudio.com/course-package-frontend?category=4"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> Lihat Semua</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="col-md-12">
            <div className="row">
                {
                  this.state.post.map(post => {
                  return  <div className="col-md-3 mb-5" id="card" key={post._id} >
                            <ImgMediaCard title={post.title} harga={post.price} image={post.url_image} desc={post.desc} diskon={post.diskon}/>
                          </div>
                  })
                }
            </div>
        </div>
    </div>
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-sm-5 col-xs-12">
                    <div className="widget">
                        <div className="widget__title">
                            <Link to="https://academy.babastudio.com">
                                <img src={require('../assets/img/logo.png')} alt="vector logo" className="img-fluid" />
                            </Link>
                        </div>
                        <div className="widget__description">
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12">
                    <div className="widget">
                        <div className="widget__title">
                            <h3>Tentang</h3>
                        </div>
                        <div className="widget__description">
                            <ul>
                                <li><Link to="#">Kupon</Link></li>
                                <li><Link to="https://academy.babastudio.com/course-package-frontend">Kursus</Link></li>
                                <li><Link to="https://academy.babastudio.com/login">Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12">
                    <div className="widget">
                        <div className="widget__title">
                            <h3>Customer Service</h3>
                        </div>
                        <div className="widget__description">
                            <ul>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="https://academy.babastudio.com/contact-us">Kontak Kami</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                    <div className="widget">
                        <div className="widget__title">
                            <h3>Subscribe</h3>
                        </div>
                        <div className="widget__description">
                            <p>Ikuti berita kami</p>
                            <form className="form-inline" action="https://academy.babastudio.com/suscribe" method="post">
                                <input type="hidden" name="_token" value="oPY89Rpiab2iFV9anlv4CLqqBgsoaS4lckwOfnzK" />
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email" />
                                </div>
                            </form>
                            <p className="pt-4">Terkoneksi dengan kami</p>
                            <ul className="media">
                                <li><Link to="#facebook" className="facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="#twitter" className="twitter"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to="#gplus" className="gplus"><i className="fab fa-google-plus-g"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr color="grey" />
        <div className="copyright">
            <div className="container">
                <div className="copyright__text text-center pt-3">
                    <p>Copyright @2018 <Link to="https://academy.babastudio.com">techfor.id</Link>, All right reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</div>
        )
    }
}
export default VHome;