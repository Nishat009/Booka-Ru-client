import React, { useEffect, useState } from 'react';

const ManageBook = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://dry-scrubland-24695.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const deleteBook  = () =>{
        fetch(`https://dry-scrubland-24695.herokuapp.com/books`)
        .then(res =>res.json())
        .then(data => setBooks(data))
       }


    const handleDelete = (id) => {

        fetch(`https://dry-scrubland-24695.herokuapp.com/deleteBook/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data=>{
            if(data){
                deleteBook();
                alert('Book Deleted')
            }
        })
    }


    return (
        <div>

            <div className="mt-3" style={{ marginLeft: '30px', width: '100%' }}>
                <h3 className="ml-5 mb-5">Total Book : {books.length}</h3>
                {
                    books.map(book =>

                        <div className="d-flex rounded shadow-lg mb-3 w-75">
                            <h5 className="m-5">{book.name}</h5>
                            <h5 className="m-5">${book.price}</h5>
                            <img  className="mb-3 mt-3" style={{ width: '100px', height:'100px' }} src={book.imageURL} alt="" />
                            <button className="btn btn-primary m-5">Edit</button>
                            <button onClick={() => handleDelete(book._id)} className="btn btn-danger m-5">Delete</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageBook;
