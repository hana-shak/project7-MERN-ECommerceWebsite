import React, { useEffect } from 'react'

import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Landing = () => {

  return (

     <Card className="text-white" >
     <Card.Img src="/images/bg.jpg" alt="Card image" />
  <Card.ImgOverlay style={{  textalign:"center", margin:"auto", display: "flex", flexDirection:"column",justifycontent:"center"}}>
   
    <Card.Text style={{width:"200px",  textalign:"center", margin:"auto", display: "flex",justifycontent:"center"}}> 
    <Button className="btn-dark" type="button" style={{width:"200px"}} > login </Button>
    
    </Card.Text>
  </Card.ImgOverlay>
</Card>
  )
}

export default  Landing;
