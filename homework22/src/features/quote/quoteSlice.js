import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    quote: '',          
    author: '',        
    status: 'idle',     
    error: null        
  };
  
  export const fetchRandomQuote = createAsyncThunk(
    'quote/fetchRandomQuote',
    async () => {
      const response = await axios.get('https://zenquotes.io/api/random');
      return response.data[0]; 
    }
  );

  const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchRandomQuote.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchRandomQuote.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.quote = action.payload.q;
          state.author = action.payload.a;
        })
        .addCase(fetchRandomQuote.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    }
  });
  
  export default quoteSlice.reducer;