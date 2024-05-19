function Contact() {
  return (
    <div className="flex justify-center items-center mx-20 mt-10">
      <div className="w-full py-4 bg-cover bg-center rounded-xl bg-custom-gradient bg-no-repeat ">
        <div className="flex justify-around items-center">
          <div className="w-[150px] m-0 mt-4 md:w-[500px] md:m-20 ">
            <p className="bg-white text-[10px] md:text-[18px] text-gray-400 p-2 md:p-4 rounded-[50px] mb-4">
              Your Name
            </p>
            <p className="bg-white text-gray-400 text-[10px] md:text-[18px] p-2 md:p-4 rounded-[50px] mb-4">
              Name of Your Institute
            </p>
            <p className="bg-white text-gray-400 text-[10px] md:text-[18px] p-2 md:p-4 rounded-[50px] mb-4">
              Your Mobile Number
            </p>
            <p className="bg-white text-gray-400 text-[10px] md:text-[18px] p-2 md:p-4 rounded-[50px] mb-4">
              Your Role
            </p>
            <div className="flex justify-center items-center">
              <p className="bg-blue-700 w-[100px] h-[40px] text-[15px] md:w-[200px] md:h-[50px] md:text-[20px] text-center rounded-[10px]  font-bold text-white pt-2">
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
