function Contact() {
  return (
    <div className="flex justify-center items-center mx-20 mt-10">
      <div className="w-full h-[500px] bg-cover bg-center rounded-xl bg-custom-gradient bg-no-repeat ">
        <div className="flex justify-around items-center">
          <div className="w-[500px] m-20 ">
            <p className="bg-white text-gray-400 p-4 rounded-[50px] mb-4">
              Your Name
            </p>
            <p className="bg-white text-gray-400 p-4 rounded-[50px] mb-4">
              Name of Your Institute
            </p>
            <p className="bg-white text-gray-400 p-4 rounded-[50px] mb-4">
              Your Mobile Number
            </p>
            <p className="bg-white text-gray-400 p-4 rounded-[50px] mb-4">
              Your Role
            </p>
            <div className="flex justify-center items-center">
              <p className="bg-blue-700 w-[200px] h-[50px] text-center rounded-[10px] text-[20px] font-bold text-white pt-2">
                Submit
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://redink.app/img/book/Spaceship.webp" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
