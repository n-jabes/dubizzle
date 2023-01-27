import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LoginForm } from '../components/LoginForm';
import { Navbar } from '../components/Navbar';
import {
  popularCategories,
  popularInElectronics,
  popularInFurnitureAndGarden,
  popularInMobiles,
  popularInRoomsForRent,
  popularInSportEquipment,
  popularResidentialforRent,
  popularResidentialforSale,
  popularUsedCarsForSale,
} from './../assets/resources';
import { useState } from 'react';


export function HomePage() {
  const [openModel, setOpenModel] = useState(false)

  const ShowCategory = () => {
    let categories = popularCategories.map((category) => (
      <div key={category.id} className="category mt-10 w-15p">
        <div className="top d-flex align-items-center color-blue">
          {category.icon}
          <span className="category-header fz-14 fw-bold pr-10 color-darkgray ml-10">
            {category.title}
          </span>
          <span className="count color-lightgray fz-10 pr-10">
            {category.count}
          </span>
        </div>
        <div className="links d-flex flex-direction-column mb-10">
          {category.links.map((item) => {
            return (
              <a key={item.id} href="#">
                {item.content}{' '}
              </a>
            );
          })}
        </div>
        <span className="lower d-flex fz-12 align-items-center w-100p color-blue fw-600 cursor-pointer">
          {category.lowerLink.title}
          {category.lowerLink.icon}
        </span>
      </div>
    ));

    return categories;
  };

  const ShowPopularForRent = () => {
    let popular = popularResidentialforRent.map((item) => (
      <div
        key={item.id}
        className="popular-categories border-radius-8  d-flex flex-direction-column cursor-pointer"
      >
        <img
          className="popular-category-img border-radius-8 mb-10"
          src={item.img}
          alt="#"
        />
        <h2 className="pricing fz-16 color-blue">{item.pricing}</h2>
        <span className="specs fw-600">{item.specs}</span>
        <span className="location color-gray fz-12">{item.location}</span>
      </div>
    ));

    return popular;
  };

  const ShowPopularForSale = () => {
    let popular = popularResidentialforSale.map((item) => (
      <div
        key={item.id}
        className="popular-categories border-radius-8  d-flex flex-direction-column cursor-pointer"
      >
        <img
          className="popular-category-img border-radius-8 mb-10"
          src={item.img}
          alt="#"
        />
        <h2 className="pricing fz-16 color-blue">{item.pricing}</h2>
        <span className="specs fw-600">{item.specs}</span>
        <span className="location color-gray fz-12">{item.location}</span>
      </div>
    ));

    return popular;
  };

  const ShowPopularUsedCarsForSale = () => {
    let popular = popularUsedCarsForSale.map((item) => (
      <div
        key={item.id}
        className="popular-categories border-radius-8  d-flex flex-direction-column cursor-pointer"
      >
        <img
          className="popular-category-img border-radius-8 mb-10"
          src={item.img}
          alt="#"
        />
        <h2 className="pricing fz-16 color-blue">{item.pricing}</h2>
        <span className="specs fw-600">{item.specs}</span>
        <span className="location color-gray fz-12">{item.location}</span>
      </div>
    ));

    return popular;
  };

  const ShowPopularInElectronics = () => {
    let popular = popularInElectronics.map((item) => (
      <div
        key={item.id}
        className="popular-categories border-radius-8  d-flex flex-direction-column cursor-pointer"
      >
        <img
          className="popular-category-img border-radius-8 mb-10"
          src={item.img}
          alt="#"
        />
        <h2 className="pricing fz-16 color-blue">{item.pricing}</h2>
        <span className="specs fw-600">{item.specs}</span>
        <span className="location color-gray fz-12">{item.location}</span>
      </div>
    ));

    return popular;
  };

  const ShowPopularInSportsEquipment = () => {
    let popular = popularInSportEquipment.map((item) => (
      <div
        key={item.id}
        className="popular-categories border-radius-8  d-flex flex-direction-column cursor-pointer"
      >
        <img
          className="popular-category-img border-radius-8 mb-10"
          src={item.img}
          alt="#"
        />
        <h2 className="pricing fz-16 color-blue">{item.pricing}</h2>
        <span className="specs fw-600">{item.specs}</span>
        <span className="location color-gray fz-12">{item.location}</span>
      </div>
    ));

    return popular;
  };

  const ShowPopularInRoomsForRent = () => {
    let popular = popularInRoomsForRent.map((item) => (
      <div
        key={item.id}
        className="popular-categories border-radius-8  d-flex flex-direction-column cursor-pointer"
      >
        <img
          className="popular-category-img border-radius-8 mb-10"
          src={item.img}
          alt="#"
        />
        <h2 className="pricing fz-16 color-blue">{item.pricing}</h2>
        <span className="specs fw-600">{item.specs}</span>
        <span className="location color-gray fz-12">{item.location}</span>
      </div>
    ));

    return popular;
  };

  const ShowPopularInMobiles = () => {
    let popular = popularInMobiles.map((item) => (
      <div
        key={item.id}
        className="popular-categories border-radius-8  d-flex flex-direction-column cursor-pointer"
      >
        <img
          className="popular-category-img border-radius-8 mb-10"
          src={item.img}
          alt="#"
        />
        <h2 className="pricing fz-16 color-blue">{item.pricing}</h2>
        <span className="specs fw-600">{item.specs}</span>
        <span className="location color-gray fz-12">{item.location}</span>
      </div>
    ));

    return popular;
  };

  const ShowPopularInFurnitureAndGarden = () => {
    let popular = popularInFurnitureAndGarden.map((item) => (
      <div
        key={item.id}
        className="popular-categories border-radius-8  d-flex flex-direction-column cursor-pointer"
      >
        <img
          className="popular-category-img border-radius-8 mb-10"
          src={item.img}
          alt="#"
        />
        <h2 className="pricing fz-16 color-blue">{item.pricing}</h2>
        <span className="specs fw-600">{item.specs}</span>
        <span className="location color-gray fz-12">{item.location}</span>
      </div>
    ));

    return popular;
  };

  return (
    <div className="home">
      <div className="headerContainer d-flex bg-transparent">
        <Header openModel={setOpenModel}/>
      </div>
      <Navbar />
      {openModel && <LoginForm  openModel={setOpenModel}/>}
      <div className="searchSection  w-85p border-radius-8 ml-10p mt-10">
        <span className="heading fz-24 d-flex justify-content-center align-items-center">
          The best place to <p className="fw-800">buy</p> your house,
          <p className="fw-800">sell</p> your car or find a
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
              className="w-80p outline-none border-radius-8 border-none"
              placeholder="Search for anything..."
            />
            <button
              type="submit"
              className="search-btn border-radius-8 border-none fw-bold cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="bodyComponent w-85p ml-10p mt-10">
        <h1 className="title mt-10 fz-24 color-darkgray">Popular Categories</h1>
        <div className="categoryContainer d-flex justify-content-space-between flex-wrap-wrap">
          <ShowCategory />
        </div>

        <div className="popularCategoryContainer w-100p mt-2p">
          <h1 className="heading fz-24">Popular in Residential for Rent</h1>
          <div className="all-cats p-10 d-flex">
            <ShowPopularForRent />
          </div>
        </div>

        <div className="popularCategoryContainer w-100p mt-2p">
          <h1 className="heading fz-24">Popular in Used Cars for Sale</h1>
          <div className="all-cats p-10 d-flex">
            <ShowPopularUsedCarsForSale />
          </div>
        </div>

        <div className="popularCategoryContainer w-100p mt-2p">
          <h1 className="heading fz-24">Popular in Furniture & Garden</h1>
          <div className="all-cats p-10 d-flex">
            <ShowPopularInFurnitureAndGarden />
          </div>
        </div>

        <div className="popularCategoryContainer w-100p mt-2p">
          <h1 className="heading fz-24">Popular in Residential for Sale</h1>
          <div className="all-cats p-10 d-flex">
            <ShowPopularForSale />
          </div>
        </div>

        <div className="popularCategoryContainer w-100p mt-2p">
          <h1 className="heading fz-24">Popular in Computers & Networking</h1>
          <div className="all-cats p-10 d-flex">
            <ShowPopularInElectronics />
          </div>
        </div>

        <div className="popularCategoryContainer w-100p mt-2p">
          <h1 className="heading fz-24">Popular in Mobile Phones & Tablets</h1>
          <div className="all-cats p-10 d-flex">
            <ShowPopularInMobiles />
          </div>
        </div>

        <div className="popularCategoryContainer w-100p mt-2p">
          <h1 className="heading fz-24">Popular in Rooms for Rent</h1>
          <div className="all-cats p-10 d-flex">
            <ShowPopularInRoomsForRent />
          </div>
        </div>

        <div className="popularCategoryContainer w-100p mt-2p">
          <h1 className="heading fz-24">Popular in Sports Equipment</h1>
          <div className="all-cats p-10 d-flex">
            <ShowPopularInSportsEquipment />
          </div>
        </div>

        <div className="ads w-85p w-100p mt-2p border-radius-8 d-flex justify-content-space-evenly align-items-center">
          <div className="title">
            <h1 className="fz-24">Find amazing deals on the go.</h1>
            <h1 className="color-blue fz-24">Download the app now!</h1>
          </div>
          <div className="imgs">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRgliod4J1RgTqfPZ0AcNv2T5aY-VTu2Z7uLPpCtxD3Gnkreeow"
              alt=""
            />
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTN7atac2-4z8u_OMUGHnpJZRA-1XYmwm-TzANqeJC4Yg6iBV-y"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="footerComponent w-100p mt-2p">
        <Footer />
      </div>
    </div>
  );
}
