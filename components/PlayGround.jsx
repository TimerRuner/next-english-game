import styles from "../styles/PlayGround.module.css"
import React, { useState } from "react"
import ResultModal from "./ResultModal"
import AnswersModal from "./AnswersModal"
import Link from "next/link"

const PlayGround = ({ game, title, catId }) => {
    const terms = game.data.map((item) => ({
        id: item._id,
        title: item.terms,
        styles: {},
    }))
    const definitions = game.data.map((item) => ({
        id: item._id,
        title: item.definition,
        item: [],
    }))
    const [termsBoard, setTermsBoard] = useState({
        id: "290549867349",
        title: "Terms",
        item: terms,
    })
    const [definitionBoards, setDefinitionBoards] = useState([...definitions])

    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)
    const [result, setResult] = useState(0)
    const [visible, setVisible] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [animResult, setAnimResult] = useState(0)
    const [visibleAnswers, setVisibleAnsvers] = useState(false)

    //? Term===============================================
    const termsDragStart = (e, board, item) => {
        e.stopPropagation()

        setCurrentBoard(board)
        setCurrentItem(item)
    }
    const termsDragLeave = (e) => {
        e.stopPropagation()
        e.target.style.boxShadow = "none"
    }
    const termsDragEnd = (e) => {
        e.stopPropagation()
        e.preventDefault()
        e.target.style.boxShadow = "none"
    }
    const termsDragOver = (e) => {
        e.stopPropagation()
        e.preventDefault()
        e.target.style.boxShadow = "0 4px 3px gray"
    }
    const termsDrop = (e, board, item) => {
        e.stopPropagation()
        e.target.style.boxShadow = "none"
        const currentIndex = currentBoard.item.indexOf(currentItem)
        currentBoard.item.splice(currentIndex, 1)

        const dropIndex = board.item.indexOf(item)
        board.item.splice(dropIndex + 1, 0, currentItem)

        setTermsBoard({ ...board })
        setResult(0)
    }

    //? Def===============================================
    const defDragStart = (e, board, item) => {
        e.stopPropagation()
        setCurrentBoard(board)
        setCurrentItem(item)
    }
    const defDragLeave = (e) => {
        e.stopPropagation()
        e.target.style.boxShadow = "none"
    }
    const defDragEnd = (e) => {
        e.stopPropagation()
        e.preventDefault()
        e.target.style.boxShadow = "none"
    }
    const defDragOver = (e) => {
        e.stopPropagation()
        e.preventDefault()
        e.target.style.boxShadow = "0 4px 3px gray"
    }
    const defDrop = (e, board, item) => {
        e.stopPropagation()
        const currentIndex = currentBoard.item.indexOf(currentItem)
        currentBoard.item.splice(currentIndex, 1)

        if (board.item.length === 0) {
            board.item.push(currentItem)
        } else {
            currentBoard.item.push(board.item.pop())
            board.item.push(currentItem)
        }

        setDefinitionBoards((prev) =>
            prev.map((b) => {
                if (b.id === board.id) {
                    return board
                }
                return b
            })
        )
        e.target.style.boxShadow = "none"
        setResult(0)
    }

    //? Def board==================================================
    const defBoardDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
        e.target.style.boxShadow = "0 4px 3px gray"
    }
    const defBoardDrop = (e, board, item) => {
        e.stopPropagation()
        e.target.style.boxShadow = "none"

        const currentIndex = currentBoard.item.indexOf(currentItem)
        currentBoard.item.splice(currentIndex, 1)

        if (board.item.length === 0) {
            board.item.push(currentItem)
        } else {
            currentBoard.item.push(board.item.pop())
            board.item.push(currentItem)
        }

        setDefinitionBoards((prev) =>
            prev.map((b) => {
                if (b.id === board.id) {
                    return board
                }
                return b
            })
        )
        setResult(0)
    }
    const defBoardLeave = (e) => {
        e.stopPropagation()
        e.target.style.boxShadow = "none"
    }

    //? Term Container =======================================
    const termsContainerDragLeave = (e) => {
        e.stopPropagation()
        e.target.style.backgroundColor = "white"
    }
    const termsContainerDragEnd = (e) => {
        e.stopPropagation()
        e.preventDefault()
        e.target.style.backgroundColor = "white"
    }
    const termsContainerDragOver = (e) => {
        e.stopPropagation()
        e.preventDefault()
        e.target.style.backgroundColor = "lightgray"
    }
    const termsContainerDrop = (e, board) => {
        e.stopPropagation()
        e.target.style.backgroundColor = "white"
        board.item.push(currentBoard.item.pop())
        setTermsBoard({ ...board })
        setResult(0)
    }

    let isDisable = definitionBoards.some((elem) => elem.item.length > 0)

    const submitHandler = () => {
        setIsSubmit(true)
        if (!result) {
            definitionBoards.map((defb, index) => {
                if (defb.id === defb.item[0]?.id) {
                    setResult((prev) => prev + 1)
                    if (defb.item.length > 0) {
                        setTimeout(() => {
                            defb.item[0].styles = {
                                color: "white",
                                backgroundColor: "green",
                                border: "1px solid green",
                                transition: "background-color 0.3s ease",
                            }
                            setAnimResult(index)
                        }, 500 * index)
                    }

                    termsBoard.item.forEach(
                        (i) =>
                            (i.styles = {
                                backgroundColor: "grey",
                                color: "white",
                                border: "1px solid grey",
                            })
                    )
                } else {
                    if (defb.item.length > 0) {
                        setTimeout(() => {
                            defb.item[0].styles = {
                                color: "white",
                                backgroundColor: "red",
                                border: "1px solid red",
                                transition: "background-color 0.3s ease",
                            }
                            setAnimResult(index)
                        }, 500 * index)
                    }
                }
            })
        }
        setTimeout(() => {
            setVisible(true)
        }, 500 * definitionBoards.length)
    }
    const resetHandler = () => {
        setIsSubmit(false)

        terms = game.data.map((item) => ({
            id: item._id,
            title: item.terms,
        }))
        definitions = game.data.map((item) => ({
            id: item._id,
            title: item.definition,
            item: [],
        }))
        setTermsBoard({
            id: "290549867349",
            title: "Terms",
            item: terms,
        })
        setDefinitionBoards([...definitions])
        setResult(0)
        setVisible(false)
    }

    const backHandler = () => {
        setVisibleAnsvers(false)
    }

    const openAnswerHandler = (e) => {
        e.stopPropagation()
        setVisibleAnsvers(true)
    }

    return (
        <div className={styles.playGround}>
            <h2 className={styles.gameTitle}>{title}</h2>
            <div
                className={styles.termsItems}
                onDragLeave={(e) => termsContainerDragLeave(e)}
                onDragEnd={(e) => termsContainerDragEnd(e)}
                onDragOver={(e) => termsContainerDragOver(e)}
                onDrop={(e) => termsContainerDrop(e, termsBoard)}
            >
                {termsBoard.item.map((obj) => (
                    <div
                        className={styles.termsItem}
                        key={obj.id}
                        draggable={!isSubmit}
                        onDragStart={(e) => termsDragStart(e, termsBoard, obj)}
                        onDragLeave={(e) => termsDragLeave(e)}
                        onDragEnd={(e) => termsDragEnd(e)}
                        onDragOver={(e) => termsDragOver(e)}
                        onDrop={(e) => termsDrop(e, termsBoard, obj)}
                        style={obj.styles}
                    >
                        {obj.title}
                    </div>
                ))}
            </div>
            <div className={styles.definitionContainer}>
                {definitionBoards.map((board) => (
                    <div key={board.id} className={styles.definitionItem}>
                        <div
                            className={styles.definitionBoard}
                            onDragOver={(e) => defBoardDragOver(e)}
                            onDrop={(e) => defBoardDrop(e, board)}
                            onDragLeave={(e) => defBoardLeave(e)}
                        >
                            {board.item.length > 0 &&
                                board.item.map((def) => (
                                    <div
                                        className={styles.termsItem}
                                        key={def.id}
                                        draggable={!isSubmit}
                                        onDragStart={(e) =>
                                            defDragStart(e, board, def)
                                        }
                                        onDragLeave={(e) => defDragLeave(e)}
                                        onDragEnd={(e) => defDragEnd(e)}
                                        onDragOver={(e) => defDragOver(e)}
                                        onDrop={(e) => defDrop(e, board, def)}
                                        style={def.styles}
                                    >
                                        {def.title}
                                    </div>
                                ))}
                        </div>
                        <p className={styles.definitionText}>
                            <span>{board.title}</span>
                        </p>
                    </div>
                ))}
            </div>
            <div className={styles.buttonsContainer}>
                <button
                    className={styles.submitButton}
                    disabled={!isDisable}
                    type="submit"
                    onClick={submitHandler}
                >
                    Submit
                </button>
                <Link href={`/category/${catId}`}>
                    <a className={styles.back}>Back</a>
                </Link>
            </div>
            <ResultModal
                result={result}
                restart={resetHandler}
                visible={visible}
                close={resetHandler}
                all={definitionBoards.length}
                openAnswer={openAnswerHandler}
            />
            <AnswersModal
                answers={game.data}
                isVisible={visibleAnswers}
                back={backHandler}
            />
        </div>
    )
}

export default PlayGround
