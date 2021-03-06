import { useTypedSelector } from "../../hooks/useTypedSelector.ts"
import { useRouter } from "next/router"

import styles from "../../styles/Category.module.css"
import GameItem from "../../components/GameItem"
import Link from "next/link"
import Image from "next/image"

const Category = ({ id }) => {
    const { category } = useTypedSelector((store) => store.category)
    const { games } = category.find((item) => item._id === id)

    return (
        <div className="container">
            <div className={styles.category}>
                <div className={styles.header}>
                    <div
                        className={styles.preview}
                        style={{ position: "relative", overflow: "hidden" }}
                    >
                        <Image
                            src="/img/3.png"
                            layout="fill"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className={styles.headerInfo}>
                        <h1 className={styles.title}>{category.title}</h1>
                        <p className={styles.desc}>{category.desc}</p>
                    </div>
                </div>
                <hr />
                <h3 className={styles.subtitle}>Examples</h3>
                <div className={styles.itemWrapper}>
                    {games.map((game) => (
                        <GameItem key={game._id} categoryId={id} game={game} />
                    ))}
                </div>
                <div className={styles.buttonContainer}>
                    <Link href={`/create/${id}`}>
                        <a className={styles.createGameButton}>
                            Create New Game
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    return {
        props: {
            id: params.id,
        },
    }
}

export default Category
