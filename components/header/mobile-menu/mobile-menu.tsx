import Link from "next/link"
import { useRouter } from "next/router"
import classNames from "classnames"

import styles from "./mobile-menu.module.scss"
import navList from "../nav.json"
import { ColorScheme } from "../color-scheme"

type Props = {
  isOpen: boolean
  onClick?: () => void
}

export const MobileMenu = ({ isOpen, onClick }: Props) => {
  const router = useRouter()

  const handleClick = () => {
    onClick?.call(null)
  }

  return (
    <div className={classNames(styles.mobileMenuWrapper, isOpen && styles.show)}>
      <div className={styles.mobileMenu}>
        {navList.map((link) => (
          <Link
            className={classNames(
              styles.link,
              router.pathname === link.pathname && styles.activeLink
            )}
            key={link.pathname}
            href={link.pathname}
            onClick={handleClick}
          >
            {link.title}
          </Link>
        ))}
        {/* <div className={styles.colorScheme}>
          <ColorScheme />
        </div> */}
      </div>
    </div>
  )
}
