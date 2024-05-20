function Footer() {
  return (
    <div className="bg-[#000137] mt-[100px] py-[50px] ">
      <div className="grid justify-between m-10 gap-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-10">
        <div className="flex flex-col gap-2">
          <p className="text-[20px] font-bold text-white">Explore Features</p>
          <p className="text-[18px] text-white">For Teachers</p>
          <p className="text-[18px] text-white">For Students</p>
          <p className="text-[18px] text-white">PartnerShip</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[20px] font-bold text-white">Resources</p>
          <p className="text-[18px] text-white">Teaching Tools</p>
          <p className="text-[18px] text-white">Blog</p>
          <p className="text-[18px] text-white">Book a Demo</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[20px] font-bold text-white">Privacy</p>
          <p className="text-[18px] text-white">Terms of Use</p>
          <p className="text-[18px] text-white">Privacy Policy</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[20px] font-bold text-white">Contact Us</p>
          <p className="text-[18px] text-blue-500">+91 545454548545</p>
          <p className="text-[18px] text-blue-500">test@gmail.com</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-around bg-gray-200 w-[200px] rounded-[50px] p-2 ">
          <img src="https://redink.app/img/social/linkedin-logo.png" />
          <img src="https://redink.app/img/social/twitter-logo.png" />
          <img src="https://redink.app/img/social/facebook-logo.png" />
          <img src="https://redink.app/img/social/instagram-logo.png" />
        </div>
      </div>
      <div className="flex items-center">
        <img
          className="w-20 h-20"
          src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/a921d40b-959c-4784-bc44-6c01e9055897.png?auto=format&q=50&w=128&h=128&fit=max&dpr=3"
        />
        <div>
          <p className="text-white text-[20px] font-bold">Redink</p>
          <p className="text-white ">Classroom</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
