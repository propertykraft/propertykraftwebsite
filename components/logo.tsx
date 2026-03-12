import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

export const Logo = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <Link href="/" className={cn("flex items-center space-x-2", className)}>
      <Image src="/logo-icon.png" alt="Property Kraft" width={32} height={32} />
      <span className="text-xl font-bold text-white">
        Property Kraft
      </span>
    </Link>
  );
};
