import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';



const CheckOut = () => {
    const [book, setBook] = useState({});

    const { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [selectedDate, setSelectedDate] = useState({
        orderDate: new Date(),
    });

    const handleOrderDate = (date) => {
        const newDate = { ...selectedDate }
        newDate.orderDate = date;
        setSelectedDate(newDate);
    };


    const handleBuy = () => {
        const bookInfo = {
            email: loggedInUser.email,
            displayName: loggedInUser.displayName,
            photoURL: loggedInUser.photoURL,
            date: selectedDate.orderDate,
            id: book._id,
            price: book.price,
            name: book.name,
            imageURL: book.imageURL
        }
        console.log(bookInfo);

        fetch('https://dry-scrubland-24695.herokuapp.com/buyBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookInfo)
        })
            .then(res => res.json())

            .then(data => {
                if (data) {
                    alert('book added to cart')
                }
            })
    }


    useEffect(() => {
        fetch(`https://dry-scrubland-24695.herokuapp.com/books/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id])

    const { name, price, imageURL, quantity } = book;


    return (
        <div className='container'>
            <h1 className="text-center m-5">Checkout</h1>

            <div style={{ textAlign: 'center' }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Order Date"
                            value={selectedDate.orderDate}
                            onChange={handleOrderDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>

            <table class="table border rounded mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book name</th>
                        <th scope="col">Book Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{name}</td>
                        <td><img src={imageURL} style={{ width: '70px', height: '70px' }} alt="" /></td>
                        <td>${price}</td>
                        <td>{quantity}</td>
                        
                    </tr>
                </tbody>
            </table>
            <div style={{ float: 'right' }} >

                <button onClick={handleBuy} className="btn btn-primary">Add to Cart</button>

                <Link to="/" className="m-3">
                    <button className="btn btn-info">More One</button>
                </Link>

                <Link to="/orderPreview">
                    <button className="btn btn-success">Preview Order</button>
                </Link>
            </div>
        </div>
    );
};

export default CheckOut;