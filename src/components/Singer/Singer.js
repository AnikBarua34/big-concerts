import './Singer.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Singer = (props) => {
    // icon 
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // distructuring 
    const { Name, age, country, singerFee } = props.singer
    return (
        <div>
            <Card className='card-body'>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Name : {Name}</Card.Title>
                    <Card.Text>Age: {age}</Card.Text>
                    <Card.Text>Country: {country}</Card.Text>
                    <Card.Text>Singer Fee: <span className='fee'> ${singerFee}</span></Card.Text>
                    <Card.Text>Age: {age}</Card.Text>

                </Card.Body>
                <button className='addToCartBtn mx-auto' onClick={() => props.handleAddToCart(props.singer)}> {element}Add To Cart</button>

            </Card>
        </div >
    );
};

export default Singer;