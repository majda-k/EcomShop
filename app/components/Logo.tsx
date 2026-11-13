import { Menu } from "lucide-react";
import MobileMenu from "./mobileMenu";

export default function Logo() {
    return (
        <div className="flex flex-row items-center space-x-2 ml-4 mb-2">
              <MobileMenu />
            <div className="text-md font-bold uppercase space-x-2">Ecom<span className="text-green-500 ml-1">Shop</span></div>
        </div>

    )
}