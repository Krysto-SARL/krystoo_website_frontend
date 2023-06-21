import { configureStore } from '@reduxjs/toolkit'

import productCategoryReducer from '../features/productCategory/productCategorySlice'

export const store = configureStore({
  reducer: {
    productCategory: productCategoryReducer,
  },
})
