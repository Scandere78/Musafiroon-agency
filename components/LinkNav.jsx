import clsx from "clsx"
import Link from "next/link"

export const LinkNav = ({children, lien, classname}) => {
  return (
    <Link href={lien} className={clsx(" font-poppins", classname)}>{children}</Link>
    
  )
}
