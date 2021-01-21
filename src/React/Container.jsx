import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';
import Main from './Main.jsx';

const Container = () => {

    return (
        <BrowserRouter>
            <div className = 'Container'>
                <Header />
                <Nav />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Container;