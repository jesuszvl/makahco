import styles from "./TextInput.module.scss";

export default function TextInput({
  label,
  value,
  type,
  onChange,
  placeholder,
}) {
  return (
    <div className={styles["text-input"]}>
      {label && (
        <div className={styles["label-container"]}>
          <label className={styles.label}>{label}</label>
        </div>
      )}
      <div className={styles["input-container"]}>
        <input
          type={type}
          className={styles.input}
          defaultValue={value}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
