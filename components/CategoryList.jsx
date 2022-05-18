import CategoryItem from "./CategoryItem"
import styles from "../styles/CategoryList.module.css"

const CategoryList = ({ category }) => {
    return (
        <div className={styles.categoryList}>
            <h1>Find out about our templatess</h1>
            <h5>Select a template to learn more</h5>
            <div className={styles.listWrapper}>
                {category.map((item) => (
                    <CategoryItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default CategoryList
