function About() {
  return (
    <div>
      <div className="text-center mt-10">
        <p className="font-bold text-[30px] xs:text-[30px] sm:text-[36px] md:text-[50px] lg:text-[50px] xl:text-[50px] leading-[1.2] font-mark">
          What Educators and Parents love
        </p>
        <p className="font-bold text-[30px] xs:text-[30px] sm:text-[36px] md:text-[50px] lg:text-[50px] xl:text-[50px] leading-[1.2] font-mark">
          about Redink 😍
        </p>
      </div>
      <div className="mx-[50px] mt-10">
        <div className="flex flex-wrap justify-center items-center gap-10">
          <div className="bg-white-100 shadow-xl rounded-xl w-[500px] p-4 transform md:rotate-3  hover:rotate-0 transition-transform">
            <div className="flex justify-center mr-4 items-center ">
              <img
                src="https://res.cloudinary.com/dongxhfar/image/upload/v1668689140/image-2_n4hfua.png"
                className="w-full h-[50%] object-cover ml-6"
              />
            </div>
            <h3 className="text-2xl text-center font-bold mb-2">
              Student 360 Profile
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Helps analyze and track every student's individual performance
              throughout the year and to improve parents' engagement in their
              child's learning easily.
            </p>
          </div>

          <div className="bg-white-100 shadow-xl rounded-xl w-[500px] p-4 transform md:-rotate-3  hover:-rotate-0 transition-transform">
            <div className="flex justify-center mr-4 items-center ">
              <img
                src="https://res.cloudinary.com/dongxhfar/image/upload/v1668689140/image-1_fpqowh.png"
                className="w-full h-[50%] object-cover ml-6"
              />
            </div>
            <h3 className="text-2xl text-center font-bold mb-2">
              Early Warning System
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Helps teachers to identify struggling students very easily and by
              knowing the student's strengths and weaknesses, to re-teach
              concepts and close students' learning gaps effortlessly.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg w-20 h-20 rounded-[50%] flex justify-center items-center -rotate-45 ml-4">
        <img
          className="w-14 h-14 object-contain"
          src="https://th.bing.com/th/id/OIP.FX0uRvfiheT1SLefiFSHqgHaGV?w=1403&h=1200&rs=1&pid=ImgDetMain"
        />
      </div>
    </div>
  );
}

export default About;

{
  /* <div className="flex flex-col items-center py-10 bg-gray-50">
        <h2 className="text-4xl font-bold mb-6">
          What Educators and Parents love about Redink 😍
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 transform md:rotate-3 hover:rotate-0 transition-transform">
            <img
              src="https://res.cloudinary.com/dongxhfar/image/upload/v1668689140/image-2_n4hfua.png"
              className="w-full h-40 object-cover rounded-t-xl mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Student 360 Profile</h3>
            <p className="text-gray-600">
              Helps analyze and track every student's individual performance
              throughout the year and to improve parents' engagement in their
              child's learning easily.
            </p>
          </div>
          <div className=" bg-white rounded-xl shadow-lg p-6 transform md:-rotate-3 hover:rotate-0 transition-transform">
            <img
              src="https://res.cloudinary.com/dongxhfar/image/upload/v1668689140/image-1_fpqowh.png"
              alt="Early Warning System"
              className="w-full h-[400px] relative object-cover rounded-t-xl mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Early Warning System
            </h3>
            <p className="text-gray-600">
              Helps teachers to identify struggling students very easily and by
              knowing the student's strengths and weaknesses, to re-teach
              concepts and close students' learning gaps effortlessly.
            </p>
          </div>
        </div>
      </div> */
}
