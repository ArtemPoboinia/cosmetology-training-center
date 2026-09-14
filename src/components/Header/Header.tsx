import Container from "../Container/Container";

import styles from "./Header.module.css";

import logo from "../../assets/logo/logo.svg";
import phone from "../../assets/icons/phone.svg";
import fb from "../../assets/icons/fb.svg";
import inst from "../../assets/icons/inst.svg";
import russia from "../../assets/icons/russia.svg";
import listButton from "../../assets/icons/listButton.svg";

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.info}>
          <a href="/" className={styles.logo}>
            <img src={logo} alt="Учебный центр косметологии" />
          </a>

          <a href="tel:0800508622" className={styles.infoPhone}>
            <img src={phone} alt="" />
            <span className={styles.phoneNumber}>0 (800) 508-622</span>
          </a>

          <div className={styles.contacts}>
            <a href="#" className={styles.fb} aria-label="Facebook">
              <img src={fb} alt="" />
            </a>

            <a href="#" aria-label="Instagram">
              <img src={inst} alt="" />
            </a>
          </div>

          <div className={styles.russia}>
            <img src={russia} alt="Русский язык" />

            <button
              type="button"
              className={styles.listButton}
              aria-label="Выбрать язык"
            >
              <img src={listButton} alt="" />
            </button>
          </div>
        </div>
      </Container>

      <hr className={styles.line} />

      <Container>
        <nav>
          <ul className={styles.nav}>
            <li>
              <a href="#courses">Курсы обучения</a>
            </li>

            <li>
              <a href="#webinars">Вебинары</a>
            </li>

            <li>
              <a href="#video-lessons">Видео-уроки</a>
            </li>

            <li>
              <a href="#blog">Блог</a>
            </li>

            <li>
              <a href="#about">О нас</a>
            </li>

            <li>
              <a href="#price">Прайс</a>
            </li>

            <li>
              <a href="#schedule">Расписание</a>
            </li>

            <li>
              <a href="#offers">Акции</a>
            </li>

            <li>
              <a href="#shop">Магазин</a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
