import { IDataState } from "../types/data"

const initialState: IDataState = {
    loading: true,
    error: "",
    category: [
        {
            _id: "234344565889576",
            preview: "----",
            desc: "Drag and drop each keyword next to its definition.",
            title: "Match ups",
            games: [
                {
                    _id: "9830487683993",
                    preview: "----",
                    title: "ABCD Family Game",
                    data: [
                        {
                            _id: "4876200894387",
                            terms: "apple",
                            definition: "яблуко",
                            order: 1,
                        },
                        {
                            _id: "3496724727685",
                            terms: "pineapple",
                            definition: "ананас",
                            order: 2,
                        },
                        {
                            _id: "9047264895032",
                            terms: "watermellon",
                            definition: "кавун",
                            order: 3,
                        },
                        {
                            _id: "3979875023498",
                            terms: "dog",
                            definition: "собака",
                            order: 4,
                        },
                    ],
                },
            ],
        },
        {
            _id: "2344565889576",
            preview: "----",
            desc: "Quiz vocabilary",
            title: "Quiz",
            games: [
                {
                    _id: "98304876833",
                    preview: "----",
                    title: "Gentelman",
                    data: [
                        {
                            _id: "48762008387",
                            terms: "man",
                            definition: "чоловік",
                            order: 1,
                        },
                        {
                            _id: "34964727685",
                            terms: "woman",
                            definition: "жінка",
                            order: 2,
                        },
                        {
                            _id: "90464895032",
                            terms: "cat",
                            definition: "кіт",
                            order: 3,
                        },
                        {
                            _id: "39798023498",
                            terms: "zebra",
                            definition: "зебра",
                            order: 4,
                        },
                    ],
                },
            ],
        },
    ],
}

export const categoryReducer = (
    state: IDataState = initialState,
    action: any
) => {
    switch (action.type) {
        default:
            return state
    }
}
