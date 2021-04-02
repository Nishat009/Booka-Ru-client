import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SideSlider from '../SideSlider/SideSlider'
import AddBook from '../AddBook/AddBook';
import ManageBook from '../ManageBook/ManageBook';

const Admin = () => {
    return (
        <div className="row mr-0">
            <Router>
                 <div className="col-md-3">
                <SideSlider></SideSlider>

            </div>
            <div className="col-md-9">
                <Switch>
                    <Route path='/manageBook'>
                        <ManageBook>
                        </ManageBook>
                    </Route>
                    <Route path='/addBook'>
                        <AddBook></AddBook>
                    </Route>

                </Switch>

            </div>
            </Router>
           
        </div>
    );
};

export default Admin;