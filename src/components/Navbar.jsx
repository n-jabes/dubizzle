import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';

export function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <nav className="navbar w-100p d-flex justify-content-center">
        <ul className="nav-items w-80p d-flex align-items-center justify-content-space-between fw-600 fz-14">
          <li className="nav-item">
            <Link to="/">Motors</Link>
            <ul className="submenu position-absolute">
                <li className="submenu-item">Used Cars for Sale</li>
                <li className="submenu-item">Motocycles</li>
                <li className="submenu-item">Auto Accessories & Parts</li>
                <li className="submenu-item">Heavy Vehicles</li>
                <li className="submenu-item">Boats</li>
                <li className="submenu-item">Number plates</li>
                <li className="submenu-item">Export Cars</li>
                <hr className="horizontal-line" />
                <li className="lower-link">Looking to sell your car?</li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/">Property for Rent</Link>
            <ul className="submenu position-absolute">
                <li className="submenu-item">Apartment/Flat for Rent</li>
                <li className="submenu-item">Villa/House for Rent</li>
                <li className="submenu-item">Commercial for Rent</li>
                <li className="submenu-item">Short Term (Monthly)</li>
                <li className="submenu-item">Short Term (Daily)</li>
                <li className="submenu-item">Townhouse</li>
                <li className="submenu-item">Penthouse</li>
                <li className="submenu-item">Residential buildings</li>
                <li className="submenu-item">Villa compound</li>
                <li className="submenu-item">Residential Floor</li>
                <li className="submenu-item">Residential Plot</li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/">Property for Sale</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Classfieds</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Furinture & Garden</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Mobiles & Tablets</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Jobs</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Community</Link>
          </li>
        </ul>
      </nav>
      {/* <div className="submenuContainer">
        <ul className="submenu position-absolute">
          <div className="left position-relative">
            <li className="submenu-item">Used Cars for Sale</li>
            <li className="submenu-item">Motocycles</li>
            <li className="submenu-item">Auto Accessories & Parts</li>
            <li className="submenu-item">Heavy Vehicles</li>
            <li className="submenu-item">Boats</li>
            <li className="submenu-item">Number plates</li>
            <li className="submenu-item">Export Cars</li>
            <hr className="horizontal-line" />
            <li className="lower-link">Looking to sell your car?</li>
          </div>
          <div className="right p-10">
            <div className="top d-flex justify-content-space-between">
              <span className="title cursor-pointer">Used Cars for Sale</span>
              <span className="link d-flex align-items-center">
                <a href="#" className="text-decoration-none">
                  View all
                </a>
                <HiArrowLongRight className="fz-16 color-blue" />
              </span>
            </div>
          </div>
        </ul>
      </div> */}
    </>
  );
}
