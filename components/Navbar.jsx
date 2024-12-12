import Image from "next/image"
import { LinkNav } from "./LinkNav"


export const Navbar = () => {
  return (
    <nav className="flex z-50 gap-6 justify-between items-center px-8 absolute left-0 top-0 right-0 bg-gradient-to-b from-[#111336e5] to-transparent text-white">
      <LinkNav lien={"/"}>
        <Image src={'/logo/logo.webp'}
          alt="logo musafiroon"
          width={85}
          height={85}
          className="rounded-full m-1 shadow-2xl"
        />
      </LinkNav>
      <ul className="flex gap-10 justify-between items-center">
        <li><LinkNav lien={"/"} >Accueil</LinkNav></li>
        <li><LinkNav lien={"/"} >Service</LinkNav></li>
        <li><LinkNav lien={"/"} >Pack</LinkNav></li>
        <li><LinkNav lien={"/"} >Contact</LinkNav></li>
        <li><LinkNav lien={"/"} >Login</LinkNav></li>
      </ul>

    </nav>
  )
}
