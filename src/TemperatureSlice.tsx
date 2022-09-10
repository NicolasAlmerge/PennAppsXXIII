import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface TemperatureState {
    value: number
  }
  
// Define the initial state using that type
const initialState: TemperatureState = {
    value: 0,
}

export const counterSlice = createSlice({
  name: 'temperature',
  initialState: initialState,
  reducers: {
    changeToNewTemp: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeToNewTemp } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const changeTemp = (state: RootState) => state.temperature.value

export default counterSlice.reducer
