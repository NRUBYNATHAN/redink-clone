import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ data }) {
  console.log(data);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section className="flex justify-around items-center relative scroll-snap-align-center perspective-500">
      <div
        ref={ref}
        className="w-[400px] h-[400px] object-cover relative max-h-[70vh] m-5 bg-white overflow-hidden"
      >
        <img
          src={`${data?.image}`}
          alt="A London skyscraper"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <motion.h2
        style={{ y }}
        className="m-0 text-black text-center md:text-left bottom-[calc(40%+120px)] md:right-[calc(55%+120px)]  text-2xl font-bold tracking-tighter leading-tight absolute"
      >
        <p className="text-[25px] md:text-[35px] text-blue-500">
          {data?.title}
        </p>
        <p className="text-[15px] md:text-[18px] font-semibold">
          {data?.content}
        </p>
      </motion.h2>
    </section>
  );
}

export default function Scroll() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[
        {
          title: "Assessment",
          content: "Hybrid test platform with in-built question bank system.",
          image:
            "https://res.cloudinary.com/dongxhfar/image/upload/v1668689140/image-2_n4hfua.png",
        },
        {
          title: "Assessment",
          content: "Hybrid test platform with in-built question bank system.",
          image:
            "https://res.cloudinary.com/dongxhfar/image/upload/v1668689140/image-2_n4hfua.png",
        },
        {
          title: "Assessment",
          content: "Hybrid test platform with in-built question bank system.",
          image:
            "https://res.cloudinary.com/dongxhfar/image/upload/v1668689140/image-2_n4hfua.png",
        },
        {
          title: "Assessment",
          content: "Hybrid test platform with in-built question bank system.",
          image:
            "https://res.cloudinary.com/dongxhfar/image/upload/v1668689140/image-2_n4hfua.png",
        },
      ].map((image) => (
        <Image key={image} data={image} />
      ))}
      <motion.div
        className=" left-0 right-0 h-1 bg-black bottom-24"
        style={{ scaleX }}
      />
    </>
  );
}
