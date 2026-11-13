import { Heart } from "lucide-react";

export default function HeartIcon() {
    return (
        <div><Heart size={20} />
            <p className="absolute top-5 right-103 bg-green-950 text-white text-[9px] rounded-full h-3 w-3 flex items-center justify-center">0</p>
        </div>

    )
}