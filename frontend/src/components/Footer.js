import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './footer.css';
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

 const Footer=()=> {
   
    return (
  
    <footer>
          
        <Row >
            <Col md={12} className='text-center py-3' >
{/* <div  style={{backgroundColor:"#0B2B26",height:"300px"}}> */}
          <div className="footer-dark">
            <footer>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-md-3 item">
                    <h2 style={{color:"white"}}>Services</h2>
                    <ul>
                      <li>Web design</li>
                      <li>Development</li>
                      <li>Hosting</li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-md-3 item">
                    <h2 style={{color:"white"}}>About</h2>
                    <ul>
                      <li style={{color:"color:#f0f9ff"}}><a  href="#">Company</a></li>
                      <li>Team</li>
                      <li>Careers</li>
                    </ul>
                  </div>
                  <div className="col-md-6 item text">
                    <h2 style={{color:"white"}}>Company Name</h2>
                    <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                  </div>
                  <div className="col item social"><a href="#"><FaFacebook /></a><a href="#"><FaInstagram/></a><a href="#"><FaTwitter/></a><a href="#"><FaGithub /></a></div>
                </div>
                <p className="copyright">Company Name © 2018</p>
              </div>
            </footer>

          </div>
            </Col>
        </Row>

    </footer>
        
    )
}
export default Footer;