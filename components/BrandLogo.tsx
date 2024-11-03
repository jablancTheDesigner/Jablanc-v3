import { ReactElement } from "react";
import Logo from "../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

const BrandLogo = (): ReactElement => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src={Logo} alt="logo" className="w-[35px] h-auto mx-auto" />
      <h1 className="text-2xl font-semibold text-white uppercase leading-sung tracking-tight">
        Jablanc
      </h1>
    </Link>
  );
};

export default BrandLogo;
