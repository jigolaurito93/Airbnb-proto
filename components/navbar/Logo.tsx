import React from "react";
import { BsHousesFill } from "react-icons/bs";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <BsHousesFill className="w-6" h-6 />
      </Link>
    </Button>
  );
};

export default Logo;
