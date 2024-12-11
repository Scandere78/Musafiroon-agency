import Image from "next/image"
import { LinkNav } from "./LinkNav"


export const Navbar = () => {
  return (
    <nav className="flex gap-6 justify-between items-center px-8 bg-slate-600 text-white">
      <LinkNav lien={"/"}>
        <Image src={'/logo/logo.webp'}
          alt="logo musafiroon"
          width={85}
          height={85}
          className="rounded-full m-1 shadow-2xl"
        />
      </LinkNav>
      <ul className="flex gap-6 justify-between items-center">
        <li><LinkNav lien={"/"} >Home</LinkNav></li>
        <li><LinkNav lien={"/"} >Service</LinkNav></li>
        <li><LinkNav lien={"/"} >Pack</LinkNav></li>
        <li><LinkNav lien={"/"} >Contact</LinkNav></li>
        <li><LinkNav lien={"/"} >Login</LinkNav></li>
      </ul>

    </nav>
  )
}
