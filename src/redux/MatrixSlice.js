import { createSlice } from '@reduxjs/toolkit'
import { genGridData } from "../utils/helper";

export const matrixSlice = createSlice({
  name: 'matrix',
  initialState: genGridData(4,4),
  reducers: {
    generateByGenConfig: (state, action) =>{
        return genGridData(action.payload.nbRows, action.payload.nbCols)
    },
    updateSelectedItem: (state, action) => {
        const newGenData = state.map(cellData => {
            if (cellData.index === action.payload.index) {
                return {...cellData,selected:!cellData.selected};
            } else {
                return cellData;
            }
        })
        return newGenData;
    },
  }
})

// Action creators are generated for each case reducer function
export const { generateByGenConfig, updateSelectedItem } = matrixSlice.actions

export default matrixSlice.reducer