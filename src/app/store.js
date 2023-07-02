import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import collectReducer from '../features/collect/collectSlice'
import userReducer from '../features/user/userSlice'
import messageReducer from '../features/message/messageSlice'
import collectPointReducer from '../features/collectPoint/collectPointSlice'
import wasteReducer from '../features/waste/wasteSlice'
import plasticTypeReducer from '../features/plasticType/plasticTypeSlice'
import certificatReducer from '../features/certificat/certificatSlice'
import productCategoryReducer from '../features/productCategory/productCategorySlice'
import productReducer from '../features/product/productSlice'
import serviceReducer from '../features/initiation/inititationSlice'
import recyclableProductCategoryReducer from '../features/recyclableProductCategory/recyclableProductCategorySlice'
import recyclableProductReducer from '../features/recyclableProduct/recyclableProductSlice'
import voluntaryDropPointReducer from '../features/voluntaryDropPoint/voluntaryDropPointSlice'
import garbageTypeReducer from '../features/garbageType/garbageTypeSlice'
import nutriScoreReducer from '../features/nutriScore/nutriScoreSlice'
import ecoScoreReducer from '../features/ecoScore/ecoScoreSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    collect: collectReducer,
    user: userReducer,
    message: messageReducer,
    collectPoint: collectPointReducer,
    waste: wasteReducer,
    certificat: certificatReducer,
    productCategory: productCategoryReducer,
    product: productReducer,
    service: serviceReducer,
    plasticType: plasticTypeReducer,
    recyclableProductCategory: recyclableProductCategoryReducer,
    recyclableProduct: recyclableProductReducer,
    voluntaryDropPoint: voluntaryDropPointReducer,
    garbageType: garbageTypeReducer,
    nutriScore: nutriScoreReducer,
    ecoScore: ecoScoreReducer,
  },
})
