import { configureStore } from '@reduxjs/toolkit'
import configReducer from './redux/ConfigSlice'
import matrixReducer from './redux/MatrixSlice'
export default configureStore({
    reducer: {
        config: configReducer,
        matrix: matrixReducer,
    }
})