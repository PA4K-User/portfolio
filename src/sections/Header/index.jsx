import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { data } from "../../contents/header";

const Header = () => {
  return (
    <div>
      <div className=" flex flex-col gap-2">
        <motion.div
          className="text-3xl font-semibold bg-gradient-to-r from-purple-600 via-pink-400 to-white bg-clip-text text-transparent"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 3000, ease: "easeInOut", repeat: Infinity }}
          style={{
            backgroundSize: "200% 200%", // ทำให้ gradient ขยับได้เนียน
          }}
        >
          {data.name}
        </motion.div>
        <div className=" text-white font-semibold">{data.title}</div>
        <div className=" text-sm text-gray-300 w-5/6">{data.caption}</div>
        <div className=" mt-4">
          <a href={data.link} target=" _blank">
            <span className=" bg-primaryTitle text-primaryBase font-semibold px-3 py-2 rounded-md">
              {data.btnText}
              <span className=" rotate-90 inline-block ml-2 text-sm">
                <FontAwesomeIcon
                  className=" animate-bounce"
                  icon={faArrowDown}
                />
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
