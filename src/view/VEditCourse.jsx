import React, { Component } from 'react';
import { useParams } from "react-router-dom";
// import axios from 'axios';
import FormEditProduk from '../component/edit_course/FormEdit'
import { Link } from "react-router-dom";

function BlogPost(props) {
    let { id } = useParams();
    return <div>
    <FormEditProduk idValue={id} />
</div>;
}
class VEditProduk extends Component {
    state = {
        data: []
    }
    postDataToApi = () => {}
    render() {
        return (
            <div>
              <div className="m-3">
                  <Link to="/list_course"><span className="btn btn-outline-success">BACK TO LIST COURSE</span></Link>
              </div>
              <div className="card col-md-4 offset-md-4 mt-5 pt-5 pb-5">
                  <div>
                      <BlogPost />
                  </div>
              </div>
          </div>
        );
    }
}
export default VEditProduk;