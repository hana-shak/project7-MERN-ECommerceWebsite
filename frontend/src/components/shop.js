import React from 'react'
import { Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {Row,Col,Container} from 'react-bootstrap';
import './divider.css';
import Slider from '../components/slider';
import './product.css';

 const Shop=()=> {
        

   
    return (
<>
<Slider />
<h3  style={{textAlign:"center", marginTop:'3%'}}>SHOP</h3>

<div id="divider"  style={{marginTop:"1%",marginBottom:"3%"}}></div>





<Row className="container3" style={{ paddingLeft: '91px' }}>
        
       <Col className="container3"><Card  className="my-3 p-3 rounded" style={{ width: '25rem' }}>

<Card.Img src="/images/bro1.jpg" variant='top' />


<Card.Body>

<Card.Title as='div'>
        <strong>name</strong>
   

<hr/>
<Card.Text as='h4'>price</Card.Text>

</Card.Title>

<hr/>
<Card.Text as='h4'>  </Card.Text>



<Button className="btn-block" type="button" >
Delete
        </Button> 
</Card.Body>
</Card></Col> 
<Col className="container3"><Card className="my-3 p-3 rounded" style={{ width: '25rem'}}>

<Card.Img src="/images/bro1.jpg" variant='top' />


<Card.Body>

<Card.Title as='div'>
        <strong>name</strong>
   

<hr/>
<Card.Text as='h4'>price</Card.Text>

</Card.Title>

<hr/>
<Card.Text as='h4'>  </Card.Text>


<hr/>
<Card.Text as='h4'>  </Card.Text>



<Button className="btn-block" type="button" >
Delete
        </Button> 
</Card.Body>

</Card> </Col> 
<Col className="container3"><Card className="my-3 p-3 rounded" style={{ width: '25rem'}}>

<Card.Img src="/images/bro1.jpg" variant='top' />


<Card.Body>

<Card.Title as='div'>
        <strong>name</strong>
   

<hr/>
<Card.Text as='h4'>price</Card.Text>

</Card.Title>

<hr/>
<Card.Text as='h4'>  </Card.Text>


<hr/>
<Card.Text as='h4'>  </Card.Text>



<Button className="btn-block" type="button" >
Delete
        </Button> 
</Card.Body>

</Card> </Col> 
<Col className="container3"><Card className="my-3 p-3 rounded" style={{ width: '25rem'}}>

<Card.Img src="/images/bro1.jpg" variant='top' />


<Card.Body>

<Card.Title as='div'>
        <strong>name</strong>
   

<hr/>
<Card.Text as='h4'>price</Card.Text>

</Card.Title>

<hr/>
<Card.Text as='h4'>  </Card.Text>


<hr/>
<Card.Text as='h4'>  </Card.Text>



<Button className="btn-block" type="button" >
Delete
        </Button> 
</Card.Body>

</Card> </Col> 
<Col className="container3"><Card className="my-3 p-3 rounded" style={{ width: '25rem'}}>

<Card.Img src="/images/bro1.jpg" variant='top' />


<Card.Body>

<Card.Title as='div'>
        <strong>name</strong>
   

<hr/>
<Card.Text as='h4'>price</Card.Text>

</Card.Title>

<hr/>
<Card.Text as='h4'>  </Card.Text>


<hr/>
<Card.Text as='h4'>  </Card.Text>



<Button className="btn-block" type="button" >
Delete
        </Button> 
</Card.Body>

</Card> </Col> 
<Col className="container3"><Card className="my-3 p-3 rounded" style={{ width: '25rem'}}>

<Card.Img src="/images/bro1.jpg" variant='top' />


<Card.Body>

<Card.Title as='div'>
        <strong>name</strong>
   

<hr/>
<Card.Text as='h4'>price</Card.Text>

</Card.Title>

<hr/>
<Card.Text as='h4'>  </Card.Text>


<hr/>
<Card.Text as='h4'>  </Card.Text>



<Button className="btn-block" type="button" >
Delete
        </Button> 
</Card.Body>

</Card> </Col> 

</Row> */}

</>

        
    )
}
export default Shop;