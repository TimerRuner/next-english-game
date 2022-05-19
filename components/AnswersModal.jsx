import styles from "../styles/AnswersModal.module.css"
import { CSSTransition } from "react-transition-group"

const AnswersModal = ({ answers, back, isVisible }) => {
    return (
        <CSSTransition
            timeout={500}
            in={isVisible}
            classNames="modal-asnswer"
            unmountOnExit
        >
            <div className={styles.answersModal}>
                <div className={styles.answersContainer}>
                    {answers.map((answer) => (
                        <div key={answer.id} className={styles.answerWrapper}>
                            <div className={styles.termsContainer}>
                                <div className={styles.termsItem}>
                                    {answer.terms}
                                </div>
                            </div>
                            <div className={styles.definitionItem}>
                                {answer.definition}
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.backButton} onClick={back}>
                    Back
                </button>
            </div>
        </CSSTransition>
    )
}

export default AnswersModal
