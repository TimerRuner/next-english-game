export interface IDataState {
    loading: boolean
    error: string
    category: ICategory[]
}

export interface ICategory {
    _id: string
    preview: string
    desc: string
    title: string
    games: IGame[]
}

export interface IGame {
    _id: string
    title: string
    preview: string
    data: IData[]
}

export interface IData {
    _id: string
    terms: string
    definition: string
}

export enum CategoryConstActions {
    CREATEGAME = "CREATEGAME",
}

interface CreateGame {
    type: CategoryConstActions.CREATEGAME
    payload: { IGame; categoryId: string }
}

export type CategoryActionTypes = CreateGame
