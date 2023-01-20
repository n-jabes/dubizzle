import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';

export function HomePage() {
  return (
    <div className="home">
      <div className="headerContainer d-flex bg-transparent">
        <Header />
      </div>
      <Navbar />
      <div className="searchSection  w-80p border-radius-8 ml-10p mt-10">
        <span className="heading fz-24 d-flex justify-content-center align-items-center">
          The best place to <p className="fw-800">buy</p> your house,{' '}
          <p className="fw-800">sell</p> your car or find a{' '}
          <p className="fw-800">job</p> in Dubai.
        </span>
        <div className="searchContainer border-radius-8">
          <div className="addresses d-flex w-max-content  align-items-center">
            <div className="search-in fw-600 fz-16">Searching in</div>
            <div className="address active">All</div>
            <div className="address">Motors</div>
            <div className="address">Classifieds</div>
            <div className="address">Proterty for Rent</div>
            <div className="address">Property for Sale</div>
            <div className="address">Jobs</div>
            <div className="address">Community</div>
          </div>
          <div className="search-form d-flex align-items-center fz-16">
            <input
              type="search"
              className="w-80p outline-none p-10 border-radius-8 border-none"
            />
            <button
              type="submit"
              className="search-btn p-10 border-radius-8 border-none fw-bold cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
