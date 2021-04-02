import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const OrderPreview = () => {

    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://dry-scrubland-24695.herokuapp.com/orderPreview?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [loggedInUser.email])

    return (
        <div>
            <div className="mt-3" style={{ marginLeft: '300px' }}>
                <h3 className="ml-5 mb-5 mt-5">You have {order.length} book in your Cart</h3>
                <Link to="/thank" style={{ float: 'right', marginRight: '100px' }}>
                    <button className="btn btn-success">CheckOut</button>
                </Link>
                <Link to="/" style={{ float: 'right', marginRight: '50px', marginBottom: '25px' }}>
                    <button className="btn btn-info">Shop More</button>
                </Link>

                {
                    order.map(odr =>
                        <div className="d-flex rounded shadow-lg mb-3 w-75">
                            <h5 className="m-5">{odr.name}</h5>
                            <h5 className="m-5">${odr.price}</h5>
                            <img className="mb-3 mt-3" style={{ width: '100px', height: '100px' }} src={odr.imageURL} alt="" />
                            <h5 className="m-5">{(new Date(odr.date).toDateString("dd/MM/yyyy"))}</h5>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default OrderPreview;
