import SocialMedia from "./socialMedia"


export default function Footer() {
    return (
        <>
            <div className="grid grid-cols-4 gap-20 px-4 ">

                <div>
                    <div className=" mt-15 text-md font-bold uppercase space-x-2">Ecom<span className="text-green-500 ml-1">Shop</span></div>
                    <p className="text-xs text-gray-500 mt-4  w-[200px]">
                        Discover cureted products and exclusive deals at EcomShop. Our online store offers a wide range of high-quality items.
                    </p>
                    <div className="flex flex-row space-x-6 mt-4">
                        <SocialMedia />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-10">
                    <h3 className="text-md font-bold">Quik Links</h3>
                    <ul className="text-sm text-gray-500 decoration-0 py-8">
                        <li className="">About us</li>
                        <li className="mt-4">Contact us</li>
                        <li className="mt-4">Terms & Conditions</li>
                        <li className="mt-4">Privacy Policy</li>
                        <li className="mt-4">FAQ</li>
                        <li className="mt-4">Help</li>

                    </ul>
                </div>

                <div className="flex flex-col justify-between mt-10">
                    <h3 className="text-md font-bold">Categories</h3>
                    <ul className="text-sm text-gray-500 decoration-0 ">
                        <li className="mt-4">Mobiles</li>
                        <li className="mt-4">Appliances</li>
                        <li className="mt-4">Smartphones</li>
                        <li className="mt-4">Air Conditioners</li>
                        <li className="mt-4">Washing Machines</li>
                        <li className="mt-4">Kitchen Appliances</li>
                        <li className="mt-4">gadget accessories</li>
                    </ul>
                </div>
                <div className="flex flex-col w-[250px] mt-10 ">
                    <h3 className="text-md font-bold">Newsletter</h3>
                    <p className="text-sm text-gray-500 mt-4">
                        Subscribe to our newsletter for the latest updates and offers.
                    </p>
                    <div className="flex flex-col mt-4">
                        <input type="email" placeholder="Enter your email" className="bg-gray-100 py-1 text-gray-500 text-[14px] placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 rounded-md px-2" />
                        <button className="bg-black text-white mt-4 py-1 px-4 text-[14px] rounded-md transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>



            </div>
            <hr className="w-full border-gray-300 mt-8" />

        </>
    )
}