import { useState } from 'react';

export function Inputs() {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault;
      }}
    >
      <input
        type="email"
        className="p-10 border-radius-8 w-100p outline-none"
        placeholder="Enter your email"
      />

      <p className="border-radius-8 w-100p pr-10 cursor-pointer fw-600 color-blue">
        <input
          type={showPassword ? 'text' : 'password'}
          className="p-10 border-none w-85p outline-none"
          placeholder="Enter your password"
        />
        <span onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </span>
      </p>

      <button className="p-10 border-radius-8 w-100p border-none cursor-pointer fw-600 color-darkgray">
        Login
      </button>
    </form>
  );
}
