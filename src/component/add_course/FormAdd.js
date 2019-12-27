import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormAdd = (props) => {
    return (
        <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form onSubmit={props.submit}>
            <p className="h4 text-center mb-4">Pajang Produk Baru</p>
            
            <hr/>

             <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Nama Course
            </label>
            <input
              type="text"
              id="nama_course"
              name="title"
              className="form-control"
              onChange={props.inputData}
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
              onChange={props.inputData}
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
              onChange={props.inputData}
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
              onChange={props.inputData}
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
              onChange={props.inputFile}
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
              onChange={props.inputData}
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
              value={props.url}
              onChange={props.inputData}
            />

            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Tambah Produk
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
};

export default FormAdd;