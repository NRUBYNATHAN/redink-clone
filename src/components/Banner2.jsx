function Banner2() {
  return (
    <div className="bg-[#000137] text-white py-10 mt-10">
      <div className="text-center mb-4">
        <p className="font-bold text-[20px] xs:text-[20px] sm:text-[23px] md:text-[30px] lg:text-[35px] xl:text-[40px] leading-[1.2] font-mark">
          Manage your whole institution
        </p>
        <p className="font-bold text-[20px] xs:text-[20px] sm:text-[23px] md:text-[30px] lg:text-[35px] xl:text-[40px] leading-[1.2] font-mark">
          in a unified platform
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex items-center">
            <img
              className="w-10 h-10"
              src="https://redink.app/img/school/manage/1.webp"
            />
            <p className="w-[300px]">
              Improve Students outcomes using real-time data insights.
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10"
              src="https://redink.app/img/school/manage/2.webp"
            />
            <p className="w-[300px]">
              Improve Students outcomes using real-time data insights.
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10"
              src="https://redink.app/img/school/manage/3.webp"
            />
            <p className="w-[300px]">
              Improve Students outcomes using real-time data insights.
            </p>
          </div>
          <p className="mt-10 bg-blue-400 text-white p-2 text-[18px] font-medium w-[200px] h-[50px] text-center rounded-[10px]">
            Book a Demo
          </p>
        </div>
        <div className="w-[400px] md:w-[500px]">
          <img
            className="w-full"
            src="https://redink.app/img/final/Institution.webp"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner2;
