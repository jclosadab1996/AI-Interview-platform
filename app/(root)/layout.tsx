import { Link } from "lucide-react";
import React from "react";
import Image from "next/image";

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="root-layout)">
      <nav>
        <Link href="/" className="flex items-center gap-2" />
        <Image src="/logo.svg" alt="logo" height={32} width={38} />
        <h2 className="text-primary-100">PrepWise</h2>
      </nav>

      {children}
    </div>
  );
};

export default Rootlayout;
