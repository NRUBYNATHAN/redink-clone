import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

function Trust() {
  const images = [
    {
      dbouter: "https://redink.app/img/teacher/testimonial/circle.webp",
      db: "https://redink.app/img/teacher/testimonial/1.webp",
      name: "Ruby - Teacher",
      school: "Ramalinga Vidyalaya",
      content:
        "School collaboration has become very simple between educators and parents",
    },
    {
      dbouter: "https://redink.app/img/teacher/testimonial/circle.webp",
      db: "https://redink.app/img/teacher/testimonial/2.webp",
      name: "Esther - Teacher",
      school: "Ramalinga Vidyalaya",
      content:
        "School collaboration has become very simple between educators and parents",
    },
    {
      dbouter: "https://redink.app/img/teacher/testimonial/circle.webp",
      db: "https://redink.app/img/teacher/testimonial/1.webp",
      name: "Raj - Teacher",
      school: "Ramalinga Vidyalaya",
      content:
        "School collaboration has become very simple between educators and parents",
    },
    {
      dbouter: "https://redink.app/img/teacher/testimonial/circle.webp",
      db: "https://redink.app/img/teacher/testimonial/2.webp",
      name: "Priya - Teacher",
      school: "Ramalinga Vidyalaya",
      content:
        "School collaboration has become very simple between educators and parents",
    },
    {
      dbouter: "https://redink.app/img/teacher/testimonial/circle.webp",
      db: "https://redink.app/img/teacher/testimonial/1.webp",
      name: "Frank - Teacher",
      school: "Ramalinga Vidyalaya",
      content:
        "School collaboration has become very simple between educators and parents",
    },
    {
      dbouter: "https://redink.app/img/teacher/testimonial/circle.webp",
      db: "https://redink.app/img/teacher/testimonial/2.webp",
      name: "Nandini - Teacher",
      school: "Ramalinga Vidyalaya",
      content:
        "School collaboration has become very simple between educators and parents",
    },
  ];
  return (
    <div>
      <div className="text-center">
        <p className="font-bold text-[30px] xs:text-[30px] sm:text-[36px] md:text-[50px] lg:text-[50px] xl:text-[50px] leading-[1.2] font-mark">
          Trusted by
        </p>
        <p className="font-bold text-[30px] xs:text-[30px] sm:text-[36px] md:text-[50px] lg:text-[50px] xl:text-[50px] leading-[1.2] font-mark">
          Teachers all over the World 🌎
        </p>
      </div>
      <div className="text-center">
        <header className=" flex flex-col items-center justify-center text-white">
          <div className="w-full max-w-screen-lg mx-auto py-8">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper mx-4"
            >
              {images.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="w-full h-64 bg-cover bg-center rounded-xl bg-custom-gradient bg-no-repeat "
                    // style={{ backgroundImage: `url(${item?.image})` }}
                  >
                    <div className="flex justify-around flex-col-reverse md:flex-row">
                      <div className="mt-[30px] w-full mb-2 md:w-[500px]">
                        <p className="text-[20px] text-blue-950 font-semibold">
                          "{item?.content}"
                        </p>
                      </div>
                      <div className="flex flex-col justify-center items-center mt-[10px] md:mt-[70px]">
                        <img className="w-20 h-20" src={`${item?.db}`} />
                        <div>
                          <p className="text-[20px] text-blue-950 font-bold">
                            {item?.name}
                          </p>
                          <p className="text-[20px] text-blue-950 font-medium">
                            {item?.school}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Trust;
