import useWindowSize from "../../hooks/useWindowSize";
import styles from "./index.module.css";
import classNames from "classnames";

type ButtonVariant = "filled" | "filledTonal" | "outlined" | "text";

interface IFaqItem {
  question: string;
  // variant?: ButtonVariant;
  answer: JSX.Element;
}

export const FaqItem = ({ question, answer }: IFaqItem) => {
  return (
    // <div
    //   className={classNames(styles.container, {
    //     [styles.containerText]: variant === "text",
    //   })}
    // >
    <details className={styles.container}>
      <summary>{question}</summary>
      <div className={styles.details}>{answer}</div>
    </details>
    // </div>
  );
};
