import styles from "../../styles/GamePage.module.css"
import PlayGround from "../../components/PlayGround"
import { useTypedSelector } from "../../hooks/useTypedSelector.ts"

const GamePage = ({ id: [catId, gameId] }) => {
    const { category } = useTypedSelector((store) => store.category)
    const { games } = category.find((item) => item._id === catId)
    const game = games.find((item) => item._id === gameId)
    return (
        <div className="container">
            <div className={styles.gamePage}>
                <PlayGround game={game} title={game.title} />
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    return {
        props: {
            id: params.ids,
        },
    }
}

export default GamePage
