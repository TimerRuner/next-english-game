import {
    CategoryActionTypes,
    CategoryConstActions,
    IDataState,
} from "../types/data.ts"

const initialState: IDataState = {
    loading: true,
    error: "",
    category: [
        {
            _id: "234344565889576",
            preview: "",
            desc: "Drag and drop each keyword next to its definition.",
            title: "Match ups",
            games: [
                {
                    _id: "9830487683993",
                    preview: "",
                    title: "ABCD Family Game",
                    data: [
                        {
                            _id: "4876200894387",
                            terms: "apple",
                            definition: "яблуко",
                        },
                        {
                            _id: "3496724727685",
                            terms: "pineapple",
                            definition: "ананас",
                        },
                        {
                            _id: "9047264895032",
                            terms: "watermellon",
                            definition: "кавун",
                        },
                        {
                            _id: "3979875023498",
                            terms: "dog",
                            definition: "собака",
                        },
                    ],
                },
            ],
        },
    ],
}

const addNewGame = (state, data) => {
    const currentCategory = state.category.find(
        (cat) => cat._id === data.categoryId
    )

    currentCategory.games.push({
        _id: data._id,
        title: data.title,
        data: data.data,
        preview: data.preview,
    })

    state.category.map((cat) => {
        if (cat._id === data._id) {
            return currentCategory
        } else {
            return cat
        }
    })
    return state
}

export const categoryReducer = (
    state: IDataState = initialState,
    action: CategoryActionTypes
) => {
    switch (action.type) {
        case CategoryConstActions.CREATEGAME:
            return { ...addNewGame(state, action.payload) }
        default:
            return state
    }
}
