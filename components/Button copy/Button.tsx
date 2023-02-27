import useWindowSize from "../../hooks/useWindowSize";
import styles from "./index.module.css";
import classNames from "classnames";

type ButtonVariant = "filled" | "filledTonal" | "outlined" | "text";

interface IButton {
  children: string;
  variant?: ButtonVariant;
}

export const Button = ({ variant = "filledTonal", children }: IButton) => {
  const { width } = useWindowSize();

  return (
    <button
      className={classNames(styles.button, {
        [styles.filled]: variant === "filled",
        [styles.outlined]: variant === "outlined",
        [styles.text]: variant === "text",
      })}
    >
      {children}
    </button>
  );
};
