import styles from "../styles/PlayGround.module.css"
import React, { useId, useState } from "react"

const PlayGround = ({ game }) => {
    const terms = game.data.map((item) => ({
        id: item._id,
        title: item.terms,
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
        console
    }
    const termsContainerDrop = (e, board) => {
        e.stopPropagation()
        e.target.style.backgroundColor = "white"
        board.item.push(currentBoard.item.pop())
        setTermsBoard({ ...board })
    }

    return (
        <div className={styles.playGround}>
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
                        key={obj._id}
                        draggable={true}
                        onDragStart={(e) => termsDragStart(e, termsBoard, obj)}
                        onDragLeave={(e) => termsDragLeave(e)}
                        onDragEnd={(e) => termsDragEnd(e)}
                        onDragOver={(e) => termsDragOver(e)}
                        onDrop={(e) => termsDrop(e, termsBoard, obj)}
                    >
                        {obj.title}
                    </div>
                ))}
            </div>
            <div className={styles.definitionContainer}>
                {definitionBoards.map((board) => (
                    <div key={board._id} className={styles.definitionItem}>
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
                                        key={def._id}
                                        draggable={true}
                                        onDragStart={(e) =>
                                            defDragStart(e, board, def)
                                        }
                                        onDragLeave={(e) => defDragLeave(e)}
                                        onDragEnd={(e) => defDragEnd(e)}
                                        onDragOver={(e) => defDragOver(e)}
                                        onDrop={(e) => defDrop(e, board, def)}
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
        </div>
    )
}

export default PlayGround
