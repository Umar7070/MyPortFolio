import {
  FaGithub,
  FaLinkedinIn,
  FaInstagramSquare,
  FaFacebookF,
} from "react-icons/fa";
import Link from "next/link";
const socialMedia = [
  {
    icon: <FaGithub />,
    path: "https://github.com/",
  },
  {
    icon: <FaLinkedinIn />,
    // path: "linkedin.com/in/umar98",
    path: "https://www.linkedin.com/in/umar98",
  },
  {
    icon: <FaInstagramSquare />,
    path: "https://www.instagram.com/ssarkar420/",
  },
  {
    icon: <FaFacebookF />,
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
