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
    <div
      className={classNames(styles.container, {
        [styles.containerFilled]: variant === "filled",
        [styles.containerOutlined]: variant === "outlined",
        [styles.containerText]: variant === "text",
      })}
    >
      <div
        className={classNames(styles.stateLayer, {
          [styles.stateLayerFilled]: variant === "filled",
          [styles.stateLayerOutlined]: variant === "outlined",
          [styles.stateLayerText]: variant === "text",
        })}
      ></div>
      <button
        className={classNames(styles.button, {
          [styles.filled]: variant === "filled",
          [styles.outlined]: variant === "outlined",
          [styles.text]: variant === "text",
        })}
      >
        {children}
      </button>
    </div>
  );
};
