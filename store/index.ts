import { Context, createWrapper, MakeStore } from "next-redux-wrapper"
import {
    AnyAction,
    applyMiddleware,
    legacy_createStore as createStore,
    Store,
} from "redux"
import thunk, { ThunkDispatch } from "redux-thunk"
import { reducer, RootState } from "./reducer/index.ts"

const makeStore: MakeStore<Store<RootState, any>> = (context: Context) =>
    createStore(reducer, applyMiddleware(thunk))

export const wrapper = createWrapper<Store<RootState, any>>(makeStore, {
    debug: true,
})

export type NextThunkDispatch = ThunkDispatch<
    Store<RootState, any>,
    void,
    AnyAction
>
