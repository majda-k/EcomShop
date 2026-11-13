  import { FaMapMarkerAlt } from "react-icons/fa";
  import { IoCall } from "react-icons/io5";
import { TbClockHour3 } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";

  
  export default function FooterTop() {   
    const FooterData = [
        
        {
            icon: <FaMapMarkerAlt size={20} />,
            title: "Visit Us",
            description: "New Oriean , USA "
        },
        {
            icon: <IoCall size={20} />
,
            title: "Call Us",
            description: "+212 234 567 890"
        }, 
        {
            icon: <TbClockHour3 size={20} />
,
            title: "Working Hours",
            description: "Mon - Sat: 9AM - 8PM"
        },
        {
            icon: <MdOutlineEmail size={20} />,
            title: "Email Us",
            description: "support@yourstore.com"
        }
    ]
        

       
return (
    <div className="flex flex-row justify-between items-center border-b-1 p-4 ">
{FooterData.map((item , index) =>{
    return (
       
        <div key={index} className="flex flex-row items-center  space-x-2">
            <div className="flex flex-row space-x-2">
                {item.icon}
                <h3 className="text-[14px] font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-500">{item.description}</p>
        </div>
      
    )
})}
    </div>
)
}   