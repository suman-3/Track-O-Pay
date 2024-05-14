import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link href="/">
     <div className="items-center hidden lg:flex">
     <Image src="/logo_white.svg" alt="logo" width={35} height={35} />
     <p className="text-semibold text-2xl text-white ml-2 montserrat-font">Track O Pay</p>
     </div>
    </Link>
  );
};

export default HeaderLogo;
