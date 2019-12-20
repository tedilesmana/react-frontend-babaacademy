import React, { Component } from 'react';
import '../style/VHome.css';

class VHome extends Component {
    render() {
        return (
            <div>
              <div class="banner">
                <div class="container">
                  <div class="banner__content">
                    <h1>Kursus Online Digital marketing<br/>Programing dan Desain<br/>Telah di ikuti 133 ribu alumni</h1>
                    
                    
                  </div>
                </div>
              </div>

            <div class="partner-item">
              <div class="container text-center">
                <h6>Pernah Di Liput Oleh:</h6>
                <ul class="partner__list">
                  <li><img src="https://academy.babastudio.com/assets/img/metro.png" class="img-fluid" alt="partner-logo"/></li>
                  <li><img src="https://academy.babastudio.com/assets/img/kompas.png" class="img-fluid" alt="partner-logo"/></li>
                  <li><img src="https://academy.babastudio.com/assets/img/jktpost.png" class="img-fluid" alt="partner-logo"/></li>
                  <li><img src="https://academy.babastudio.com/assets/img/detik.png" class="img-fluid" alt="partner-logo"/></li>
                  <li><img src="https://academy.babastudio.com/assets/img/yahoo.png" class="img-fluid" alt="partner-logo"/></li>
                  
                </ul>
              </div>
            </div>
          </div>
        )
    }
}

export default VHome;