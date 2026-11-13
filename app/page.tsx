import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-row justify-between bg-[#fcf0e4] px-20 items-center mx-auto rounded-2xl">
     <div>
      <h2 className="text-4xl font-bold w-[400px]">Grab Upto 50% Off on Selected headphone</h2>
      <button className="bg-green-950 text-white mt-4 py-2 px-4 text-[14px] rounded-md transition-colors duration-300">
        Buy Now
      </button>
     </div>
     <div>
      <img src="/images/image.png" alt="Hero Image" className="w-[512px] h-[250px]" />
     </div>
    </div>
  );
}
