import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import actionCreator from "../store/action-creator/index.ts"

const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreator, dispatch)
}

export default useActions
