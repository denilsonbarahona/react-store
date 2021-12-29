import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import Close from '@icons/icon_close.png';
import '@styles/OrderItem.scss';

const OrderItem = ({product}) => {
	
	const {removeFromCart} = useContext(AppContext);
	
	const handlerRemove=product=>{		
		removeFromCart(product);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img
				 onClick={()=>handlerRemove(product)}
				src={Close} alt="close" />
		</div>
	);
}

export default OrderItem;
