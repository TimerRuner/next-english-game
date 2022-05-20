import { useState } from "react"
import styles from "../../styles/CreatePage.module.css"
import useActions from "../../hooks/useActions.ts"
import Link from "next/link"
import { useRouter } from "next/router"

const CreatePage = ({ id }) => {
    const [fields, setFields] = useState([
        { _id: Date.now(), terms: "", definition: "" },
    ])
    const { createGame } = useActions()
    const [data, setData] = useState({
        title: "Default",
        preview: "https://",
    })
    const router = useRouter()
    const findCurrentField = (id) => {
        return fields.find((field) => field._id === id)
    }
    const changeCurrentField = (id, state, value, name) => {
        const currentField = state.map((field) => {
            if (field._id === id) {
                field[name] = value
            }
            return field
        })
        return [...currentField]
    }

    const clickHandler = (e) => {
        e.preventDefault()
        const newField = {
            _id: Date.now(),
            terms: "",
            definition: "",
        }

        setFields((prev) => [...prev, newField])
    }
    const deleteHandler = (e, id) => {
        e.preventDefault()
        setFields((prev) => prev.filter((field) => field._id !== id))
    }
    const submitHandler = () => {
        createGame({
            _id: Date.now().toString(),
            ...data,
            data: fields,
            categoryId: id,
        })
        router.push(`/category/${id}`)
    }

    return (
        <div className="container">
            <div className={styles.createWrapper}>
                <form className={styles.form}>
                    <div className={styles.mainData}>
                        <div className={styles.inputField}>
                            <h2 className={styles.title}>Activity Title</h2>
                            <input
                                value={data.title}
                                className={styles.input}
                                name="title"
                                onChange={(e) =>
                                    setData((prev) => ({
                                        ...prev,
                                        title: e.target.value,
                                    }))
                                }
                            />
                        </div>
                    </div>
                    <div className={styles.itemsData}>
                        {fields.map((field) => (
                            <div key={field._id} className={styles.itemWrapper}>
                                <div className={styles.itemContainer}>
                                    <div className={styles.inputWrapper}>
                                        <h4 className={styles.inputTitle}>
                                            Keyword
                                        </h4>
                                        <input
                                            className={styles.inputData}
                                            value={
                                                findCurrentField(field._id)
                                                    .terms
                                            }
                                            onChange={(e) =>
                                                setFields((prev) =>
                                                    changeCurrentField(
                                                        field._id,
                                                        prev,
                                                        e.target.value,
                                                        "terms"
                                                    )
                                                )
                                            }
                                        />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <h4 className={styles.inputTitle}>
                                            Definition
                                        </h4>
                                        <input
                                            className={styles.inputData}
                                            value={
                                                findCurrentField(field._id)
                                                    .definition
                                            }
                                            onChange={(e) =>
                                                setFields((prev) =>
                                                    changeCurrentField(
                                                        field._id,
                                                        prev,
                                                        e.target.value,
                                                        "definition"
                                                    )
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                <button
                                    className={styles.deleteBtn}
                                    onClick={(e) => deleteHandler(e, field._id)}
                                    disabled={
                                        fields.length === 1 ? true : false
                                    }
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                    {fields.length < 6 && (
                        <button
                            className={styles.addNewFiled}
                            onClick={clickHandler}
                        >
                            Add new
                        </button>
                    )}
                </form>
                <button className={styles.submitButton} onClick={submitHandler}>
                    Create
                </button>

                <Link href={`/category/${id}`}>Back</Link>
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

export default CreatePage
