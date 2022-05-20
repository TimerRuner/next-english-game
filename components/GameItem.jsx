import styles from "../styles/Game.module.css"
import Link from "next/link"
import Image from "next/image"

const GameItem = ({ game, categoryId }) => {
    console.log(game)
    return (
        <Link href={`/game/${categoryId}/${game._id}`} passHref>
            <a className={styles.gameItem}>
                <div
                    className={styles.preview}
                    style={{ position: "relative", overflow: "hidden" }}
                >
                    <Image
                        src="/img/game.png"
                        layout="fill"
                        width="100%"
                        height="100%"
                    />
                </div>
                <h2 className={styles.title}>{game.title}</h2>
            </a>
        </Link>
    )
}

export default GameItem
