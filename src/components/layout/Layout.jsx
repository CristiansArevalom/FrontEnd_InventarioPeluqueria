import PropTypes from 'prop-types';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
    return (
      <>
      <div className="container-fluid">
      <Header />
        <main>{children}</main> {/* Aquí se renderizan los hijos */}
        <Footer />
      </div>
      </>
    );
  };

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default Layout;