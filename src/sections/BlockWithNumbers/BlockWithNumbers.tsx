import Container from "../../components/Container/Container";
import styles from "./BlockWithNumbers.module.css";

function BlockWithNumbers() {
  const statistics = [
    {
      number: "4000+",
      text: "Сертификатов мы выдали",
    },
    {
      number: "3500+",
      text: "Моделей в нашей базе",
    },
    {
      number: "1500+",
      text: "Специалистов мы обучили",
    },
    {
      number: "5500+",
      text: "Довольных клиентов",
    },
  ];

  return (
    <section className={styles.section}>
      <Container>
        <ul className={styles.list}>
          {statistics.map(({ number, text }) => (
            <li className={styles.item} key={number}>
              <span className={styles.number}>{number}</span>
              <span className={styles.text}>{text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default BlockWithNumbers;