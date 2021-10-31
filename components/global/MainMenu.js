import styles from "@styles/global/MainMenu.module.css"

const Item = ({ text, link }) => {
    return (
      <li>
        <a href={link}>
          {text}
        </a>
      </li>
    );
  };

const MainMenu = () => {
    return (
        <ul className={styles.container}>
            <Item text="Vision" link="#vision"/>
            <Item text="Roadmap" link="#roadmap"/>
            <Item text="FAQ" link="#faq"/>
        </ul>
    )
}

export default MainMenu
