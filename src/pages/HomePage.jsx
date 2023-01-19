import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';

export function HomePage() {
  return (
    <div className="home">
      <div className="headerContainer d-flex">
        <Header />
      </div>
      <div className="navbarContainer d-flex w-100p justify-content-center">
        <Navbar />
      </div>
    </div>
  );
}
