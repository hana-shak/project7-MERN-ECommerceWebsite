import React from 'react'
import { Container,Row,Col,Button} from 'react-bootstrap';
import './divider.css';


 const About=()=> {
   
    return (
  
    <footer>
    <Container>
        <Row >
            <Col className='text-center py-3'style={{marginTop:"3%"}} >
<div style={{height:"400px",backgroundColor:"#fbf3f0", textAlign:"center", padding:"2%"}}>
    <h1 style={{marginTop:"5%", fontWeight:"bold"}}>LIKE BEING FIRST?</h1>
    <h5 style={{marginTop:"3%"}}>The world is a shared place, and every trip is part of the exchange, no matter the destination. We believe in making connections: on the road, online, and in person. We value access over aspiration, and exploration over escape. For us, all time away is time well spent.</h5>
    <Button className="btn-dark" style={{marginTop:"2%"}} type="button" >
                           view details
                        </Button>
</div>

  <div id="divider"  style={{marginTop:"3%"}}></div>

            </Col>
        </Row>
    </Container>
    </footer>
        
    )
}
export default About;