function Banner() {
  return (
    <div className="w-full h-[80vh]  bg-cover bg-center bg-[url('https://img.freepik.com/premium-vector/modernistic-tech-background_313905-421.jpg?w=1060')]">
      <div className="flex flex-col text-white text-center pt-[100px]">
        <p className="font-semibold text-2xl xs:text-[30px] sm:text-[36px] md:text-[50px] lg:text-[60px] xl:text-[76px] leading-[1.2] font-mark">
          A Leeding <span className="text-blue-500">LMS Platform</span>
        </p>
        <p className="mt-2 font-semibold text-2xl xs:text-[30px] sm:text-[36px] md:text-[50px] lg:text-[60px] xl:text-[76px] leading-[1.2] font-mark">
          for K-12 Schools
        </p>
        <p className="mt-4 text-gray-400 ">
          Analyze your school performance at every step and keep{" "}
        </p>
        <p className=" text-gray-400 ">
          parents informed about their child’s progress
        </p>
        <div>
          <button className="mr-4 mt-2 bg-blue-500 p-2 rounded-[10px] w-[200px] text-[20px] font-medium">
            Signup
          </button>
          <button className="text-blue-500">sign up &rarr;</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
