import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

function Solutions() {
  const images = [
    {
      no: "01",
      image:
        "https://th.bing.com/th/id/R.3cf057a4da5150c5af8e6ea8c7fb644d?rik=lOASyGIOSbtjAQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f6%2ff%2f101536.jpg&ehk=ffGCng7H1CNOMH3BEa9i8sD2Wr%2fOS5IhE3R04bdBTq8%3d&risl=&pid=ImgRaw&r=0",
      title: "You'll no longer have to use many apps for class",
      content:
        "Schedule classes, track behaviour, take attendance, give homework, handle test and keep all your tasks in one place now.",
    },
    {
      no: "02",
      image:
        "https://th.bing.com/th/id/R.3cf057a4da5150c5af8e6ea8c7fb644d?rik=lOASyGIOSbtjAQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f6%2ff%2f101536.jpg&ehk=ffGCng7H1CNOMH3BEa9i8sD2Wr%2fOS5IhE3R04bdBTq8%3d&risl=&pid=ImgRaw&r=0",
      title: "You'll no longer have to use many apps for class",
      content:
        "Schedule classes, track behaviour, take attendance, give homework, handle test and keep all your tasks in one place now.",
    },
    {
      no: "03",
      image:
        "https://th.bing.com/th/id/R.3cf057a4da5150c5af8e6ea8c7fb644d?rik=lOASyGIOSbtjAQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f6%2ff%2f101536.jpg&ehk=ffGCng7H1CNOMH3BEa9i8sD2Wr%2fOS5IhE3R04bdBTq8%3d&risl=&pid=ImgRaw&r=0",
      title: "You'll no longer have to use many apps for class",
      content:
        "Schedule classes, track behaviour, take attendance, give homework, handle test and keep all your tasks in one place now.",
    },
    {
      no: "04",
      image:
        "https://th.bing.com/th/id/R.3cf057a4da5150c5af8e6ea8c7fb644d?rik=lOASyGIOSbtjAQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f6%2ff%2f101536.jpg&ehk=ffGCng7H1CNOMH3BEa9i8sD2Wr%2fOS5IhE3R04bdBTq8%3d&risl=&pid=ImgRaw&r=0",
      title: "You'll no longer have to use many apps for class",
      content:
        "Schedule classes, track behaviour, take attendance, give homework, handle test and keep all your tasks in one place now.",
    },
    {
      no: "05",
      image:
        "https://th.bing.com/th/id/R.3cf057a4da5150c5af8e6ea8c7fb644d?rik=lOASyGIOSbtjAQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f6%2ff%2f101536.jpg&ehk=ffGCng7H1CNOMH3BEa9i8sD2Wr%2fOS5IhE3R04bdBTq8%3d&risl=&pid=ImgRaw&r=0",
      title: "You'll no longer have to use many apps for class",
      content:
        "Schedule classes, track behaviour, take attendance, give homework, handle test and keep all your tasks in one place now.",
    },
    {
      no: "06",
      image:
        "https://th.bing.com/th/id/R.3cf057a4da5150c5af8e6ea8c7fb644d?rik=lOASyGIOSbtjAQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f6%2ff%2f101536.jpg&ehk=ffGCng7H1CNOMH3BEa9i8sD2Wr%2fOS5IhE3R04bdBTq8%3d&risl=&pid=ImgRaw&r=0",
      title: "You'll no longer have to use many apps for class",
      content:
        "Schedule classes, track behaviour, take attendance, give homework, handle test and keep all your tasks in one place now.",
    },
    {
      no: "07",
      image:
        "https://th.bing.com/th/id/R.3cf057a4da5150c5af8e6ea8c7fb644d?rik=lOASyGIOSbtjAQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f6%2ff%2f101536.jpg&ehk=ffGCng7H1CNOMH3BEa9i8sD2Wr%2fOS5IhE3R04bdBTq8%3d&risl=&pid=ImgRaw&r=0",
      title: "You'll no longer have to use many apps for class",
      content:
        "Schedule classes, track behaviour, take attendance, give homework, handle test and keep all your tasks in one place now.",
    },
  ];
  return (
    <div>
      <div>
        <p className="text-center mt-2 font-bold text-[30px] xs:text-[30px] sm:text-[36px] md:text-[50px] lg:text-[50px] xl:text-[50px] leading-[1.2] font-mark">
          Problems solved by Redink
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
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              // modules={[Pagination, Navigation]}
              className="mySwiper mx-4"
            >
              {images.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="w-full h-64 bg-cover bg-center rounded-xl "
                    style={{ backgroundImage: `url(${item?.image})` }}
                  >
                    <div className="text-left p-4">
                      <p className="text-[25px] font-bold">{item?.no}</p>
                      <p className="text-[18px] font-semibold">{item?.title}</p>
                      <p className="text-[16px] mt-8">{item?.content}</p>
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

export default Solutions;
