import { useReducer, useEffect } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            }
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            }
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            }
        default:
            throw new Error(`Unhandled aciton type: ${action.type}`)
    }
}

function useAsync(callback, deps = []) {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    })

    const fetchData = async () => {
        dispatch({type: 'LOADING'})
        try {
            const data = await callback();
            dispatch({type: 'SUCCESS', data: data})
        } catch (e) {
            dispatch({type: 'ERROR', error: e})
        }
    }

    useEffect(() => {
        fetchData()
    }, deps)

    return [state]
}

export { useAsync }