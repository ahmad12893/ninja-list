import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='content'>
      <Navbar className='flex flex-col bg-slate-400' />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
