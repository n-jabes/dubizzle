import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'


export function LoginForm() {
  return (
    <div className="modelBackground">
      <div className="modalContainer">
        <div className="coursel">
          <div className="images"></div>
          <div className="title">Log in to post an ad</div>
        </div>
        <div className="form">
          <form action="">
            <div className="input">
              <span className="icon"><FaFacebook className='color-blue'/> </span>
              <input type="text" placeholder="Continue with Facebook" />
            </div>
            <div className="input">
              <span className="icon"> <FcGoogle/> </span>
              <input type="text" placeholder="Continue with Google" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
