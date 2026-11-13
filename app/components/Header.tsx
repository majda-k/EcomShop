
import HeartIcon from "./heartIcon";
import Logo from "./Logo";
import MobileMenu from "./mobileMenu";
import SearchIcon from "./SearchIcon";
import ShopIcon from "./ShopIcon";
import SideBar from "./SideBar";
import SignIn from "./SignIn";
import '../globals.css'


export default function Header() {
    return (
        <>
            <div className="flex flex-row justify-between py-5  items-center bg-transparent">
                <div className="flex flex-row items-center space-x-2">
                    <Logo />
                </div>
                <div>
                    <SideBar className="hidden sm:flex flex-row space-x-4" />
                </div>
                <div className="flex flex-row space-x-4">
                    <SearchIcon />
                    <ShopIcon />
                    <HeartIcon />
                    <SignIn />
                </div>
                
            </div>

        </>

    )
}