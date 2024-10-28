import Link from "next/link";
import { FaGithub, FaLinkedinIn,  FaTelegram, FaInstagram } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/Ebenezer-Mulu/" },
  { icons: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ebenezer-mulu-25723b270/" },
  { icons: <FaInstagram />, path: "https://www.instagram.com/ebemulu/" },
  { icons: <FaTelegram />, path: "https://t.me/E_Mete" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
