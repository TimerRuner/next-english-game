import styles from "../styles/CategoryItem.module.css"
import Link from "next/link"

const CategoryItem = ({ item }) => {
    return (
        <Link href={`/category/${item._id}`} passHref>
            <a className={styles.categoryItem}>
                <div className={styles.preview}></div>
                <div className={styles.info}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.desc}>{item.desc}</p>
                </div>
            </a>
        </Link>
    )
}

export default CategoryItem
