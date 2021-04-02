import React from 'react';
import { useEffect, useState } from 'react';

import Book from '../Book/Book';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://dry-scrubland-24695.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const spinnerStyle = {
        width : '200px',
        marginLeft : '500px'
    }
    return (
        <div className="row m-0">
            
                 {
                    books.length ? "" : <img style={spinnerStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAeJk2sHDKS3QiyyCAkcl8A4smrb11zgBzQ&usqp=CAU" alt=""/>
                }
            
            {
                books.map(book=> <div className="col-md-4" >
                     <Book book={book}></Book>
                      </div>)
                    
            }
        </div>
    );

};

export default Home;