import classNames from "classnames"
import styles from "./menu-btn.module.scss"

type Props = {
  isOpen?: boolean
  onToggle?: (next: boolean) => void
}

export const MenuBtn = ({ isOpen, onToggle }: Props) => {
  // const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    onToggle?.call(null, !isOpen)
  }

  return <div onClick={toggle} className={classNames(styles.button, isOpen && styles.active)}></div>
}
