import classNames from "classnames";
import React, { useState } from "react";
import Modal from "react-modal";

import { outfit } from "../../../fonts";
import CloseIcon from "../../icons/CloseIcon";
import { supabaseClient } from "../../utils/supabaseClient";
import TextInput from "../TextInput/TextInput";
import styles from "./LoginModal.module.scss";

const LoginModal = ({ isOpen, onHide }) => {
  const [email, setEmail] = useState("");
  const [isMagicLinkSent, setIsMagicLinkSent] = useState(false);

  const handleLogin = async (e) => {
    const magicLinkUrl = window.location.origin + "/free";
    e.preventDefault();
    try {
      const result = await supabaseClient.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: magicLinkUrl,
        },
      });
      console.log(result);
      setIsMagicLinkSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      className={classNames([styles.modal, outfit.className])}
      overlayClassName={styles["modal-overlay"]}
      isOpen={isOpen}
      onRequestClose={onHide}
      ariaHideApp={false}
    >
      <div className={styles["login-header"]}>
        {isMagicLinkSent ? "Check Your Inbox" : "Enter Your Email"}
        <button className={styles["modal-button"]} onClick={onHide}>
          <CloseIcon width={24} height={24} stroke="#ffffff" />
        </button>
      </div>
      <div className={styles["login-content"]}>
        {isMagicLinkSent ? (
          <p>
            We have sent an email to <b>{email}</b> with a link to log in.
          </p>
        ) : (
          <form onSubmit={handleLogin} className={styles["login-form"]}>
            <TextInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button className={styles["button"]} type="submit">
              Login
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
};

export default LoginModal;
