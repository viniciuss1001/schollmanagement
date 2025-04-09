import Image from "next/image";
import Link from "next/link";
import MenuComponent from "../components/Menu";
import NavbarComponent from "../components/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            <div className="w-[14%] md:w-[8%%] lg:w-[16%] xl:w-[14%] p-4">
                <Link href='/' className="flex items-center justify-center gap-2 lg:justify-start ">
                    <Image src='/logo.png' alt="logo" width={32} height={3} className="" />
                    <span className="hidden lg:block text-sm ">
                        Scholl
                    </span>
                </Link>
                <MenuComponent />
            </div>
            <div className="w-[86%] md:w-[92%%] lg:w-[84%] xl:w-[86%] overflow-scroll flex flex-col">
                <NavbarComponent />
                {children}
            </div>
        </div>
    )
}