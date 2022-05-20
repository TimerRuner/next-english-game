import styles from "../styles/CategoryItem.module.css"
import Link from "next/link"
import Image from "next/image"

const CategoryItem = ({ item }) => {
    return (
        <Link href={`/category/${item._id}`} passHref>
            <a
                className={styles.categoryItem}
                style={{ position: "relative", overflow: "hidden" }}
            >
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
                <div className={styles.info}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.desc}>{item.desc}</p>
                </div>
            </a>
        </Link>
    )
}

export default CategoryItem
