import { useState } from "react"
import styles from "../styles/ResultModal.module.css"
import { CSSTransition } from "react-transition-group"

const ResultModal = ({ result, restart, visible, close, all }) => {
    return (
        <CSSTransition
            timeout={500}
            in={visible}
            classNames="result-modal"
            unmountOnExit
        >
            <div className={styles.overlay} onClick={close}>
                <div className={styles.modalWrapper}>
                    <div className={styles.result}>
                        Result of Game: {result} / {all}
                    </div>
                    <button className={styles.restartButton} onClick={restart}>
                        Restart
                    </button>
                </div>
            </div>
        </CSSTransition>
    )
}

export default ResultModal
