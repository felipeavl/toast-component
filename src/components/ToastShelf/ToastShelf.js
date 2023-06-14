import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    toasts && (
      <ol
        className={styles.wrapper}
        role="region"
        aria-live="polite"
        aria-label="Notifications"
      >
        {toasts.map((toast) => {
          return (
            <li className={styles.toastWrapper} key={toast.id}>
              <Toast variant={toast.variant} id={toast.id}>
                {toast.message}
              </Toast>
            </li>
          );
        })}
      </ol>
    )
  );
}

export default ToastShelf;
