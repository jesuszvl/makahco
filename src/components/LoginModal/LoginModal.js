import React from "react";
import Modal from "react-modal";
import styles from "./LoginModal.module.scss";
import { outfit } from "../../../fonts";
import classNames from "classnames";

const LoginModal = ({ isOpen, onHide }) => {
  return (
    <Modal
      className={classNames([styles.modal, outfit.className])}
      overlayClassName={styles["modal-overlay"]}
      isOpen={isOpen}
      onRequestClose={onHide}
      ariaHideApp={false}
    >
      <div className={styles["login-header"]}>Login To Makahco</div>
      <div className={styles["login-form"]}>
        <input
          type="email"
          className={styles["input"]}
          placeholder="your@email.com"
        />
        <button className={styles["button"]}>Log In</button>
      </div>
    </Modal>
  );
};

export default LoginModal;
