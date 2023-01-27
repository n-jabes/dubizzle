import { useEffect } from 'react';
import { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoClose } from 'react-icons/io5';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { IoMail } from 'react-icons/io5';
import { loginCarouselResources } from '../assets/resources';

export function LoginForm({ openModel }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emailLogin, setEmailLogin] = useState(false);

  const carouselInfinityScroll = () => {
    if (currentIndex === loginCarouselResources.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfinityScroll();
    }, 4000);

    return () => clearInterval(interval);
  });

  const ShowSignIn = () => {
    return (
      <div className="modelBackground d-flex align-items-center justify-content-center">
        <div className="modalContainer position-relative border-radius-8">
          <button
            onClick={() => openModel(false)}
            className="login-close-btn position-absolute d-flex align-items-center justify-content-center"
          >
            <IoClose className="close cursor-pointer color-darkgray fz-24 fw-600 " />
          </button>

          <div className="carouselContainer d-flex flex-wrap-nowrap overflow-hidden ">
            {loginCarouselResources.map((item, index) => {
              return (
                <div
                  key={item.id}
                  style={{ transform: `translate(-${currentIndex * 100}%)` }}
                  className="carousel d-flex align-items-center justify-content-center flex-direction-column"
                >
                  <div className="images">{item.img}</div>
                  <div className="title fz-20 fw-600 color-darkgray text-align-center">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="form text-align-center">
            <form action="">
              <div className="input mt-10 mb-10 d-flex align-items-center">
                <span className="icon">
                  <FaFacebook className="color-blue fz-24" />{' '}
                </span>
                <button
                  type="text"
                  className="outline-none p-10 border-none cursor-pointer"
                >
                  Continue with Facebook
                </button>
              </div>

              <div className="input mt-10 mb-10 d-flex align-items-center">
                <span className="icon">
                  {' '}
                  <FcGoogle className="fz-24" />{' '}
                </span>
                <button
                  type="text"
                  className="outline-none p-10 border-none cursor-pointer"
                >
                  Continue with Google
                </button>
              </div>

              <div className="input mt-10 mb-10 d-flex align-items-center">
                <span className="icon">
                  {' '}
                  <IoMail className="fz-24 color-darkgray" />{' '}
                </span>
                <button
                  type="text"
                  className="outline-none p-10 border-none cursor-pointer"
                  onClick={()=> setEmailLogin(true)}
                >
                  Continue with Email
                </button>
              </div>
            </form>

            <h2 className="color-darkgray fw-500 cursor-pointer">
              Don't have an account?{' '}
              <span className="color-blue"> Create one</span>
            </h2>

            <div className="terms cursor-pointer">
              <p className="term fz-12">
                By signing up I agree to the{' '}
                <span className="color-blue fz-12">Terms and Conditions</span>{' '}
                and <span className="color-blue fz-12">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ShowSignInUsingEmail = () => {
    return (
      <div className="modelBackground d-flex align-items-center justify-content-center">
        <div className="modalContainer position-relative border-radius-8">
          <div className="btns position-absolute d-flex align-items-center justify-content-space-between">
            <button className="back ">
              <HiOutlineArrowLeft className="cursor-pointer color-darkgray fz-24 fw-600 " onClick={() => setEmailLogin(false)} />
            </button>
            <button
              onClick={() => openModel(false)}
              className="d-flex align-items-center justify-content-center"
            >
              <IoClose className="close cursor-pointer color-darkgray fz-24 fw-600 " />
            </button>
          </div>

          <div className="email-form text-align-center">
            <form action="">
              <input
                type="email"
                className="p-10 border-radius-8 w-100p outline-none"
                placeholder="Enter your email"
              />
              <input
                type="password"
                className="p-10 border-radius-8 w-100p outline-none"
                placeholder="Enter your password"
              />

              <button className="p-10 border-radius-8 w-100p border-none cursor-pointer fw-600 color-darkgray">
                Login
              </button>
            </form>

            <a
              href="#"
              className="text-decoration-none color-blue fw-500 cursor-pointer"
            >
              Forgot your password?
            </a>

            <div className="terms cursor-pointer mt-2p">
              <p className="term fz-12">
                By signing up I agree to the{' '}
                <span className="color-blue fz-12">Terms and Conditions</span>{' '}
                and <span className="color-blue fz-12">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>
    {emailLogin ? <ShowSignInUsingEmail /> : <ShowSignIn />}
  </>;
}
