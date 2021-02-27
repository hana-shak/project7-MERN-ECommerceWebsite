import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import './divider.css';
import './product.css';



 const People=()=> {
   
    return (
<>
         

         <h3  style={{textAlign:"center"}}>CUSTOMER</h3>
  <div id="divider"  style={{marginBottom:"3%"}}></div>

  <div>

        <Row className="">
          <Col  xs={12} md={3} >
          <img src='/images/01.jpg' />
         
          </Col>
          <Col xs={12} md={3}>
          <img src='/images/01.jpg' />
          </Col>
          <Col xs={12} md={3}>
          <img src='/images/01.jpg' />
          </Col>
          <Col xs={12} md={3}>
          <img src='/images/01.jpg' />
          </Col>
        </Row>

        </div>



       </> 
    )
}
export default People;