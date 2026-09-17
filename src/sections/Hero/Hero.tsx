import Container from "../../components/Container/Container";

import heroImage from "../../assets/images/hero.png";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroBlock}>
            <p>Бесплатный вебинар</p>

            <h1>
              ПРОФЕССИЯ
              <br />
              КОСМЕТОЛОГ
            </h1>

            <p className={styles.heroText}>
              Приглашаем на бесплатный вебинар
              <br />
              для профессиональных косметологов
              <br />
              и интересующихся этой профессией
            </p>

            <div className={styles.buttons}>
              <button type="button" className={styles.heroBtn1}>
                Зарегистрироваться
              </button>

              <button type="button" className={styles.heroBtn2}>
                Узнать подробнее
              </button>
            </div>
          </div>

          <img
            className={styles.heroImage}
            src={heroImage}
            alt=""
            aria-hidden="true"
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;