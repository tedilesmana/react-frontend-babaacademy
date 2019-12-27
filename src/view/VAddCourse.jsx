import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import FormAdd from '../component/add_course/FormAdd';
import { Link } from "react-router-dom";

class VAddCourse extends Component {
    constructor() {
        super();
        this.state = {
            course: {
                title: '',
                desc: '',
                price: '',
                diskon: '',
                image: '',
                url_image: 'http://localhost:8000/image/'
            },
            redirect: false,
            file: null
        }
    }

    handleTambahProduk = (e) => {
        let val = e.target.value;
        let name_val = e.target.name;
        let val_produk = this.state.course;

        val_produk[name_val] = val;

        this.setState({
            course: val_produk
        }, () => {
            console.log(this.state.course);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.postDataToApi();
    }

    postDataToApi = () => {
        console.log('testq');
        let file = this.state.file;
        let course = this.state.course;
        axios.post('http://localhost:8000/course', file)
            .then((res) => {})
        axios.post('http://localhost:8000/course', course)
            .then((res) => {
                console.log('res false')
                this.setState({ redirect: true })
            })
    }

    handelOnUploadFile = (e) => {
        const data = new FormData()
        data.append('file', e.target.files[0])

        this.setState({
            file: data
        }, () => {
            console.log(this.state.file);
        })

    }

    render() {

        const { redirect } = this.state;
        console.log(redirect);

        if (redirect) {
            return <Redirect to='/list_course'/>;
        }

        return (
            <div>
              <div className="m-3">
                  <Link to="/list_course"><span className="btn btn-outline-success">BACK TO LIST COURSE</span></Link>
              </div>
              <div className="card col-md-4 offset-md-4 mt-5 pt-5 pb-5">
                <FormAdd
                    inputData={this.handleTambahProduk.bind(this)} 
                    inputFile={this.handelOnUploadFile.bind(this)} 
                    submit={this.handleSubmit.bind(this)} 
                    url={this.state.course.url_image}
                />          
              </div>
         </div>
        );
    }
}

export default VAddCourse;