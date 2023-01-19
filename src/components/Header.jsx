import { BiBell, BiChevronDown, BiHeart } from 'react-icons/bi';
import { TbReportSearch } from 'react-icons/tb';
import { BsChatText, BsCardList } from 'react-icons/bs';

export function Header() {
  const headerLinks = [
    {
      id: 1,
      icon: <BiBell />,
      title: 'Notifications',
    },
    {
      id: 2,
      icon: <TbReportSearch />,
      title: 'My Searches',
    },
    {
      id: 3,
      icon: <BiHeart />,
      title: 'Favorites',
    },
    {
      id: 4,
      icon: <BsChatText />,
      title: 'Chats',
    },
    {
      id: 5,
      icon: <BsCardList />,
      title: 'My ads',
    },
    {
      id: 6,
      title: 'Login or sign up',
    },
    {
      id: 7,
      title: 'Place Your Ad',
    },
  ];

  const ShowHeaderLinks = () => {
    let links = headerLinks.map((link) => {
      if (link.id === 5) {
        return (
          <button
            key={link.id}
            className="d-flex flex-direction-column align-items-center header-btn cursor-pointer position-relative"
          >
            <span className="header-icon light-gray">{link.icon}</span>
            <span className="fz-14 light-gray">{link.title}</span>
            <div className="new position-absolute">NEW</div>
          </button>
        );
      } else if (link.id === 6) {
        return (
          <button className="login cursor-pointer">
            <span className="fz-14">{link.title}</span>
          </button>
        );
      } else if (link.id === 7) {
        return (
          <button className="placeAd cursor-pointer border-radius-8 border-none">
            <span className="fz-14 fw-bold">{link.title}</span>
          </button>
        );
      } else {
        return (
          <button
            key={link.id}
            className="d-flex flex-direction-column align-items-center header-btn cursor-pointer"
          >
            <span className="header-icon light-gray">{link.icon}</span>
            <span className="fz-14 light-gray">{link.title}</span>
          </button>
        );
      }
    });

    return links;
  };

  return (
    <div className="header d-flex">
      <div className="left d-flex align-items-center">
        <span className="logo p-15 fw-600">dubizzle</span>
        <span className="location d-flex flex-direction-row align-items-center">
          <select name="" id="" className="select border-none outline-none cursor-pointer">
            <option value="Dubai">Dubai</option>
            <option value="Kigali">Kigali</option>
            <option value="Musanze">Musanze</option>
            <option value="Gisenyi">Gisenyi</option>
          </select>
          {/* <BiChevronDown /> */}
        </span>
      </div>
      <div className="right d-flex justify-content-end align-items-center">
        <ShowHeaderLinks />
      </div>
    </div>
  );
}
