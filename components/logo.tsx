import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "light" | "dark";
}) => {
  return (
    <Link href="/" className={cn("flex items-center space-x-2", className)}>
      <Image src="/logo-icon.png" alt="logo" width={32} height={32} />
      <span
        className={cn(
          "text-xl font-bold",
          variant === "light" ? "text-white" : "text-gray-900"
        )}
      >
        Property Kraft
      </span>
    </Link>
  );
};
