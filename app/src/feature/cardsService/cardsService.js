import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://kitsu.io/api/edge/anime";

export const getCardsData = createAsyncThunk(
    "cards/getCards",
    async () => {
        const response = await axios.get(`${baseUrl}?page[limit]=19`);
        let data = response.data;
        let numbArray = [...Array(99).keys()];

        const aleatoryNumber = () => { return numbArray[Math.floor(Math.random() * numbArray.length)]; }    

        data.data.map((each) => {
            each['number'] = aleatoryNumber()
        })
    
        return data;
    }
); 

const serviceCards = createSlice({
    name: "cards",
    initialState: {
        cards: [],
        status:null
    },
    extraReducers:{
        [getCardsData.pending]: (state, action) => {
            state.status = "loading";
        },
        [getCardsData.fulfilled]: (state, action) => {
            state.status = "sucess";
            state.cards = action.payload;
        },
        [getCardsData.rejected]: (state, action) => {
            state.status = "failed";

        }
    }
})

export default serviceCards.reducer;