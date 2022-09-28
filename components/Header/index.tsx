import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex space-x-5 items-center">
        <Link href="/">
          <img
            src="https://links.papareact.com/yvf"
            className="w-44 object-contain cursor-pointer"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className="text-white bg-green-600 rounded-full px-3 py-1">Follow</h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="border rounded-full border-green-600 px-4 py-1">Get Started</h3>
      </div>
    </header>
  );
};

export default Header;
