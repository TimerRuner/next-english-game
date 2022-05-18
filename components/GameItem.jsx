import styles from "../styles/Game.module.css"
import Link from "next/link"

const GameItem = ({ game, categoryId }) => {
    return (
        <Link href={`/game/${categoryId}/${game._id}`} passHref>
            <a className={styles.gameItem}>
                <div className={styles.preview}></div>
                <h2 className={styles.title}>{game.title}</h2>
            </a>
        </Link>
    )
}

export default GameItem
