function Navbar() {
  return (
    <div className="bg-gray-100 flex items-center px-4 md:px-10 justify-between shadow-lg h-[80px] w-full fixed z-50">
      <img
        className="w-[200px] h-[60px] object-cover"
        src="https://cdn.techjockey.com/web/assets/images/techjockey/products/24314_redinklogo.jpg"
        alt="Logo"
      />
      <div className="flex justify-center text-[14px] md:text-[15px] items-center gap-5 font-semibold">
        <p className="hover:text-blue-500 cursor-pointer">Teachers</p>
        <p className="hover:text-blue-500 cursor-pointer">Resources</p>
        <p className="hover:text-blue-500 cursor-pointer">Blog</p>
      </div>
    </div>
  );
}

export default Navbar;
