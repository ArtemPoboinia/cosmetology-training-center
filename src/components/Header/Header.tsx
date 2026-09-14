import Container from "../Container/Contsiner";
import styles from "./Header.module.css";
import logo from "../../assets/logo/logo.svg";
import phone from "../../assets/icons/phone.svg";
import fb from "../../assets/icons/fb.svg";
import inst from "../../assets/icons/inst.svg";
import russia from "../../assets/icons/russia.svg";
import listButton from "../../assets/icons/listButton.svg";

function Header() {
  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.info}>
          <a href="">
            <img src={logo} alt="" />
          </a>

          <div className={`${styles.df} ${styles.info_phone} ${styles.ai}`}>
            <img src={phone} alt="" />
            <span className={styles.phone_number}>0 (800) 508-622</span>
          </div>

          <div className={`${styles.df} ${styles.contacts}`}>
            <a href="" className={styles.fb}>
              <img src={fb} alt="" />
            </a>

            <a href="">
              <img src={inst} alt="" />
            </a>
          </div>

          <div className={`${styles.df} ${styles.russia}`}>
            <img src={russia} alt="" />
            <button className={styles.listButton}>
              <img src={listButton} alt="" />
            </button>
          </div>
        </div>

        <hr className={styles.line}/>

        <ul className={styles.nav}>
          <li className={styles.navItem}>Курсы обучения</li>
          <li className={styles.navItem}>Вебинары</li>
          <li className={styles.navItem}>Видео-уроки</li>
          <li className={styles.navItem}>Блог</li>
          <li className={styles.navItem}>О нас</li>
          <li className={styles.navItem}>Прайс</li>
          <li className={styles.navItem}>Расписание</li>
          <li className={styles.navItem}>Акции</li>
          <li className={styles.navItem}>Магазин</li>
        </ul>
      </header>
    </Container>
  );
}

export default Header;
