const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 z-20 w-full p-4 bg-indigo-500 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-2 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center ">
            © 2023 Zwiggy™ . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white  sm:mt-0">
            <li>
              <div className="mr-4 md:mr-6 ">About</div>
            </li>
            <li>
              <div className="mr-4 md:mr-6">Privacy Policy</div>
            </li>
            <li>
              <div className="mr-4 md:mr-6">Licensing</div>
            </li>
            <li>
              <div>Contact</div>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
