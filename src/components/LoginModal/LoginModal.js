import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./LoginModal.module.scss";
import { outfit } from "../../../fonts";
import classNames from "classnames";
import TextInput from "../TextInput/TextInput";

const LoginModal = ({ isOpen, onHide }) => {
  const [email, setEmail] = useState("");
  const [isMessage, setIsMessage] = useState(false);

  return (
    <Modal
      className={classNames([styles.modal, outfit.className])}
      overlayClassName={styles["modal-overlay"]}
      isOpen={isOpen}
      onRequestClose={onHide}
      ariaHideApp={false}
    >
      <div className={styles["login-header"]}>
        {isMessage ? "Check Your Inbox" : "Enter Your Email"}
      </div>
      <div className={styles["login-form"]}>
        {isMessage ? (
          <p>
            We have sent an email to <b>{email}</b> with a link to log in.
          </p>
        ) : (
          <>
            <TextInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              className={styles["button"]}
              onClick={() => {
                setIsMessage(true);
              }}
            >
              Login
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default LoginModal;
