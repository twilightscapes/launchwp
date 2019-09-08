import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import "../css/index.scss"



const LayoutFull = ({ children }) => (
  <section id="root">
    <Header />
    <main id="section-main" className="full" style={{width: '100%'}}>{children}</main>
    <Footer />

  </section>
);



LayoutFull.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutFull;