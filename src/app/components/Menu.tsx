import Link from "next/link"
import { menuItems } from "./ExampleDatas"
import Image from "next/image"

const MenuComponent = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((item) => (
        <div key={item.title} className="flex flex-col gap-2">
          <span className="hidden lg:block font-light my-4">
            {item.title}
          </span>
          {item.items.map((itemlink) => (
              <Link key={itemlink.label} href={itemlink.href}
                className="flex justify-center items-center lg:justify-start gap-4 p-2 hover: hover:animate-pulse rounded-md"
              >
                <Image alt="" src={itemlink.icon} width={20} height={20} />
                <span className="hidden lg:block">{itemlink.label}</span>
              </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MenuComponent