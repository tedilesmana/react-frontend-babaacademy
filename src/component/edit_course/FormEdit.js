import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class FormEditProduk extends Component {

    constructor() {
        super();
        this.state = {
            course: {
                title: '',
                desc: '',
                price: '',
                diskon: '',
                image: '',
                url_image: ''
            },
            redirect: false,
            file: null
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        // handle success
        let currentComponent = this;
        axios.get(`http://localhost:8000/course/${this.props.idValue}`)
            .then(function(response) {
                // handle success
                currentComponent.setState({
                    course: response.data.response
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

    handleChang(e) {
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

    handleSubmit = (e, id) => {
        e.preventDefault();
        this.putDataToApi(id);
    }

    putDataToApi = (id) => {
        let file = this.state.file;
        let course = this.state.course;
        axios.put(`http://localhost:8000/course/${id}`, course).then((res) => {
            this.setState({ redirect: false })
        })
        axios.put(`http://localhost:8000/course/${id}`, file).then((res) => {
            this.setState({ redirect: true })
        })
    }

    // handelSubmit = () => {
    //     const { file, stateName, date } = this.state;
    //     let data = [];
    //     data['file'] = file;
    //     data['stateName'] = stateName;
    //     data['date'] = date;

    //     // a function which makes a axios call to API.
    //     uploadFile(data, (response) => {
    //         // your code after API response
    //     });
    // }

    // uploadFile(data, callback) {
    //     const url = ''; // url to make a request
    //     const request = axios.post(url, data);
    //     request.then((response) => callback(response));
    //     request.catch((err) => callback(err.response));
    // }
    // 


    // handelOnUploadFile = (e) => {
    //     let val = e.target.files
    //     let name_val = e.target.name;
    //     let val_produk = this.state.course;

    //     val_produk[name_val] = val;
    //     this.setState({
    //         course: val_produk
    //     }, () => {
    //         console.log(this.state.course);
    //     })

    // }

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

        if (redirect) {
            return <Redirect to='/list_course'/>;
        }

        return (
            <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form onSubmit={e => this.handleSubmit(e, this.state.course._id)}>
            <p className="h4 text-center mb-4">Edit Data Course</p>
            
            <hr/>

            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Nama Course
            </label>
            <input
              type="text"
              id="nama_course"
              name="title"
              className="form-control"
              value={this.state.course.title}
              onChange={this.handleChang.bind(this)}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Descripsi Course
            </label>
            <input
              type="text"
              id="desc_course"
              name="desc"
              className="form-control"
              value={this.state.course.desc}
              onChange={this.handleChang.bind(this)}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Harga Course
            </label>
            <input
              type="text"
              id="harga_course"
              name="price"
              className="form-control"
              value={this.state.course.price}
              onChange={this.handleChang.bind(this)}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Harga Diskon
            </label>
            <input
              type="text"
              id="harga_diskon"
              name="diskon"
              className="form-control"
              value={this.state.course.diskon}
              onChange={this.handleChang.bind(this)}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Image Course
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="form-control"
              onChange={this.handelOnUploadFile.bind(this)}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Nama Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="form-control"
              value={this.state.course.image}
              onChange={this.handleChang.bind(this)}
            />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Url Image
            </label>
            <input
              type="text"
              id="url_image"
              name="url_image"
              className="form-control"
              value={this.state.course.url_image}
              onChange={this.handleChang.bind(this)}
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Tambah Course
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        );
    };
}

export default FormEditProduk;