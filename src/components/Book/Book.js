import React from 'react';
import { useHistory } from 'react-router';

const Book = ({ book }) => {

    const history=useHistory()
    const handleBuy=(_id)=>{
        history.push(`/checkOut/${_id}`)
    }

    return (
        <div className="ml-5">
            <div className="card mb-4" style={{width: "20rem",height:"27rem",backgroundColor:"salmon"}}>
              <img src={book.imageURL} className="card-img-top" style={{width: "19.9rem",height:"18rem"}} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{book.name}- {book.quantity}</h5>
            <div className="card-footer d-flex justify-content-between ">
              <h3>${book.price}</h3>
              <button onClick={() =>handleBuy(book._id)} className="btn btn-danger">Buy Now</button>
            </div>
            </div>
            </div>
        </div>
    );
};


export default Book;