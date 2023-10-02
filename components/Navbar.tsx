export default function Navbar() {
    return (
        <nav className="py-2 px-2 md:px-6 flex justify-between items-center">
            <img src="./logo.svg" alt="shopsy" className="w-auto h-[45px] " />
            <div className="links--container text-sm md:text-lg flex gap-4 items-center">
                <a className="font-medium hover:underline hover:text-gray-600" href="#">Home</a>
                <a className="font-medium hover:underline hover:text-gray-600" href="#">Cart</a>
                <a className="font-medium hover:underline hover:text-gray-600" href="#">Contact</a>
                <a className="font-medium hover:underline hover:text-gray-600" href="#">Blog</a>
            </div>
        </nav>
    )
}