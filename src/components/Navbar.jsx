function Navbar() {
  return (
    <div className="bg-gray-100 shadow-lg h-[80px] w-full fixed z-50">
      <div className="flex justify-between mx-10">
        <img
          className="w-[300px] h-[80px] object-cover"
          src="https://cdn.techjockey.com/web/assets/images/techjockey/products/24314_redinklogo.jpg"
          alt="Logo"
        />
        <div className="flex justify-between items-center gap-5 font-semibold">
          <p className="hover:text-blue-500 cursor-pointer">For Teachers</p>
          <p className="hover:text-blue-500 cursor-pointer">Resources</p>
          <p className="hover:text-blue-500 cursor-pointer">Blog</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
