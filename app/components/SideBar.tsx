export default function SideBar({className}: {className?: string}) {

    const sidebarItems = [
        { name: "Home", href: "/" , className: "text-green-500 underline underline-offset-4"},
        { name: "shop", href: "/shop" },
        { name: "contact", href: "/contact" },
        { name: "hot deal", href: "/hotDeal" },
    ];

    return (
        <div className={`flex flex-col space-y-4 ${className}`}>
            {sidebarItems.map((item) => (
                <div key={item.href} className={`hover:text-green-500 ${item.className || ""}`}>
                    <a href={item.href}>{item.name}</a>
                </div>
            ))}
        </div>
    )
}