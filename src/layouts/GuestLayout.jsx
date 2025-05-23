import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GuestLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
