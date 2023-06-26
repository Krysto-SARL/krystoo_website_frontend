import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import messageService from './messageService'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const initialState = {
  messages: [],
  messageData: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getMessages = createAsyncThunk(
  'messages/getAll',
  async (_, thunkAPI) => {
    try {
      return await messageService.getMessages()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getMessage = createAsyncThunk(
  'messages/get',
  async (messageId, thunkAPI) => {
    try {
      return await messageService.getMessage(messageId)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const closeMessage = createAsyncThunk(
  'messages/close',
  async (messageId, thunkAPI) => {
    try {
      return await messageService.closeMessage(messageId)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const postMessage = createAsyncThunk(
  'messages/post',
  async (messageData, thunkAPI) => {
    try {
      return await messageService.postMessage(messageData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.messages = action.payload
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.messages = []
      })
      .addCase(getMessage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.messageData = action.payload
      })
      .addCase(getMessage.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.messageData = action.payload
        state.messageData = {}
      })
      .addCase(closeMessage.fulfilled, (state, action) => {
        state.isLoading = false
        if (Array.isArray(state.messages)) {
          state.messages = state.messages.map((messageData) =>
            messageData._id === action.payload._id
              ? { ...messageData, status: 'Archived' }
              : messageData,
          )
        }
      })
      .addCase(postMessage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(postMessage.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        toast.success('Message envoyé avec succès') // Affiche un toast de succès
        // Optionally update state.messages with the newly posted message
        // depending on your application's logic.
      })
      .addCase(postMessage.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        toast.error(`Une erreur c'est produite merci de réessayer`) // Affiche un toast d'erreur
      })
  },
})

export const { reset } = messageSlice.actions
export default messageSlice.reducer
