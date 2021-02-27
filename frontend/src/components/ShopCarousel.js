import React, { useEffect } from 'react'

import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Shop1 = () => {

  return (

     <Card className="text-white" >
     <Card.Img src="/images/ee.jpg" alt="Card image" />
  <Card.ImgOverlay style={{  textalign:"center", margin:"auto", display: "flex", flexDirection:"column",justifycontent:"center"}}>
   
    <Card.Text style={{width:"200px",  textalign:"center", margin:"auto", display: "flex",justifycontent:"center"}}> 

    
    </Card.Text>
  </Card.ImgOverlay>
</Card>
  )
}

export default  Shop1;
