"use client";

import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
    { name: "Plans", path: "/plan" },
  ];

  let currentPath = usePathname();

  return (
    <div className="h-16 bg-background w-full border-b border-border flex flex-row items-center justify-between px-4 md:px-8">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="cursor-pointer md:ml-2"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row items-center rounded-full bg-background-2 p-2 ring-1 ring-border h-10 justify-center px-6 gap-6">
        {routes.map((route) => (
          <Link
            href={route.path}
            key={route.name}
            className="flex flex-row items-center"
          >
            <span
              className={cn(
                "text-sm font-semibold transition-colors hover:text-indigo-400",
                currentPath === route.path
                  ? "text-indigo-500"
                  : "text-text"
              )}
            >
              {route.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Desktop Auth */}
      <div className="hidden md:flex flex-row items-center gap-4">
        <Link href="/sign-in">
          <Button variant="outline" className="border-border rounded-md px-6 py-2 text-sm font-semibold hover:bg-indigo-600 hover:text-white transition-colors">
            Sign in
          </Button>
        </Link>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-text hover:bg-secondary/50">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] sm:w-[350px] bg-background border-border">
            <div className="flex flex-col h-full py-6">
              <div className="flex items-center mb-8 px-4">
                <Image
                  src="/assets/logo.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="mr-3"
                />
                <span className="text-xl font-bold flex items-center">
                  <span className="text-indigo-600">Krit</span>.io
                </span>
              </div>

              <div className="flex flex-col space-y-4 px-4">
                {routes.map((route) => (
                  <SheetClose asChild key={route.name}>
                    <Link
                      href={route.path}
                      className={cn(
                        "text-lg font-semibold px-4 py-3 rounded-xl transition-all",
                        currentPath === route.path
                          ? "bg-indigo-600/10 text-indigo-500"
                          : "text-text hover:bg-secondary/40"
                      )}
                    >
                      {route.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              <div className="mt-auto px-4 pb-4">
                <div className="w-full h-px bg-border mb-6"></div>
                <SignInButton mode="redirect">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-6 text-lg rounded-xl">
                    Sign in
                  </Button>
                </SignInButton>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
