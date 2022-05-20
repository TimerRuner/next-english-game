import { CategoryActionTypes, IGame } from "../types/data.ts"
import { CategoryConstActions } from "../types/data.ts"

export const createGame = (newGame: IGame): CategoryActionTypes => ({
    type: CategoryConstActions.CREATEGAME,
    payload: newGame,
})
