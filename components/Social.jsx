import {
  FaGithub,
  FaLinkedinIn,
  FaInstagramSquare,
  FaFacebookF,
} from "react-icons/fa";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
const socialMedia = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Umar7070/myportfolio",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/umar98",
  },
  {
    icon: <FaInstagramSquare />,
    path: "https://www.instagram.com/ssarkar420/",
  },
  {
    icon: <MdOutlineEmail />,
    path: "https://www.facebook.com/",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialMedia.map((ele, index) => {
        return (
          <Link key={index} href={ele.path} className={iconStyles}>
            {ele.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
