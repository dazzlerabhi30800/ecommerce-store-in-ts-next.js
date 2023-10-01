import Image from "next/image"
export default function Navbar() {
    return (
        <nav className="py-2 px-4 flex justify-between items-center">
            <Image width={150} height={20} alt="shopsy" src="./logo.svg" />
            <div className="links--container flex gap-4 items-center">
                <a className="text-lg font-medium hover:underline hover:text-gray-600" href="#">Home</a>
                <a className="text-lg font-medium hover:underline hover:text-gray-600" href="#">Cart</a>
                <a className="text-lg font-medium hover:underline hover:text-gray-600" href="#">Contact</a>
                <a className="text-lg font-medium hover:underline hover:text-gray-600" href="#">Blog</a>
            </div>
        </nav>
    )
}