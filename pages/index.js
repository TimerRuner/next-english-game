import CategoryList from "../components/CategoryList"
import { useTypedSelector } from "../hooks/useTypedSelector.ts"
import styles from "../styles/Home.module.css"

export default function Home() {
    const data = useTypedSelector((store) => store.category)
    return (
        <div className="container">
            <CategoryList category={data.category} />
        </div>
    )
}
