import React, { Component } from 'react';
import ImgMediaCard from '../component/home/cardCourse';
import '../style/VHome.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
class VHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        // setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
    }


    getPostApi = () => {
        let currentComponent = this;
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

    componentDidMount() {
        this.getPostApi()
    }

    handleHapus = (e, data, action) => {
        e.preventDefault();
        axios.delete(`http://ec2-18-217-70-47.us-east-2.compute.amazonaws.com/api/course/${data}?action=${action}`).then((res) => {
            this.getPostApi()
        })
    }
    render() {
        return (
            <div>
    <div className="m-3">
        <Link to="/add_course"><span className="btn btn-outline-success">ADD NEW COURSE</span></Link>
    </div>
    <div className="container mt-5">
        <div className="col-md-12">
            <div className="row">
                {
                this.state.post.map(post => {
                return <div className="col-md-3 mb-5" id="card" key={post._id}>
                    <ImgMediaCard title={post.title} harga={post.price} image={post.url_image} desc={post.desc} diskon={post.diskon} />
                    <Card>
                        <CardActions className="d-flex justify-content-between pr-3 pl-3">
                            <Link to={"edit_course/"+post._id} className="update"><span className="btn btn-sm btn-outline-primary">Edit</span></Link>
                            <div className="hapus" onClick={e=> this.handleHapus(e, post._id, post.image)}>
                                <button className="btn btn-sm btn-outline-danger">Hapus</button>
                            </div>
                        </CardActions>
                    </Card>
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
                                <li>
                                    <Link to="#">Kupon</Link>
                                </li>
                                <li>
                                    <Link to="https://academy.babastudio.com/course-package-frontend">Kursus</Link>
                                </li>
                                <li>
                                    <Link to="https://academy.babastudio.com/login">Login</Link>
                                </li>
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
                                <li>
                                    <Link to="#">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="https://academy.babastudio.com/contact-us">Kontak Kami</Link>
                                </li>
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
                                <li>
                                    <Link to="#facebook" className="facebook"><i className="fab fa-facebook-f"></i></Link>
                                </li>
                                <li>
                                    <Link to="#twitter" className="twitter"><i className="fab fa-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="#gplus" className="gplus"><i className="fab fa-google-plus-g"></i></Link>
                                </li>
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
                    <p>Copyright @2018
                        <Link to="https://academy.babastudio.com">techfor.id</Link>, All right reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</div>
        )
    }
}
export default VHome;