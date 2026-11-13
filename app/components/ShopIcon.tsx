import { Handbag } from "lucide-react";

export default function ShopIcon() {
    return (
        <div>
            <Handbag size={20} className="relative" />
            <p className="absolute top-5 right-93 bg-green-950 text-white text-[9px] rounded-full h-3 w-3 flex items-center justify-center">0</p>
        </div>
    )
}