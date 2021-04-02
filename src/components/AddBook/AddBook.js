import React, { useState } from 'react';
import axios from 'axios';
import { useForm} from "react-hook-form";

const AddBook = () => {
    const { register, handleSubmit} =  useForm() ;
    const [imageURL, setIMageURL,] = useState (null);
    const onSubmit = (data, e) => {
        const bookData = {
            name: data.name,
            imageURL: imageURL,
            price:data.price,
            quantity: data.quantity

        };
        const url =`https://dry-scrubland-24695.herokuapp.com/addBook`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res => {
            if (res) {
                e.target.reset();
                alert('Add Product Successfully!');
            }
        });

    };

    const handleImageUpload = book => {
        console.log(book.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '347a42bcbffdfffd0275efa46b051dbe');
        imageData.append('image', book.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
        <h1>Add Books</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} class="row g-3 bg-light shadow mt-5 p-5 rounded">
            <div className="col-md-6">
                <label for="inputEmail4" class="form-label ">Book Name</label>
                <input type="text" name="name" class="form-control" id="inputEmail4" placeholder="Enter Name" ref={register} />
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" class="form-label ">Quantity</label>
                <input type="text" name="quantity" class="form-control" id="inputPassword4" placeholder="Enter Quantity" ref={register} />
            </div>
            <div className="col-md-6">
                <label for="inputEmail4" class="form-label ">Add Price</label>
                <input type="number" name="price" class="form-control" id="inputEmail4" placeholder="Enter Price" ref={register} />
            </div>

            <div className="col-md-6">
                <label for="formFileMultiple" class="form-label ">Add Photo</label>
                <input class="form-control" type="file" id="formFileMultiple" onChange={handleImageUpload} />
            </div>

            <div >
                <input type="submit" className="mt-3 btn btn-success" />
            </div>
        </form>
    </div>
    );
};

export default AddBook;