import { createStore } from 'vuex';
import axios from 'axios';
import {getAllSeats, bookSeat} from "@/services/BookingService";

// Create a new store instance.
export const store= createStore({
  state: {
      selected: [],
      selectedCount: 0,
      seatList: [],
      /*seatList: [
        {name: "1A", status: "free"},
        {name: "1B", status: "free"},
        {name: "1C", status: "free"},
        {name: "2A", status: "free"},
        {name: "2B", status: "free"},
        {name: "2C", status: "free"},
        {name: "3A", status: "free"},
        {name: "3B", status: "free"},
        {name: "3C", status: "free"},
      ]*/

  },
  mutations: {
    SET_SEATS(state, seats){
      state.seatList= seats
    },
    BOOK_SEATS(state,seats){
      state.seatList= seats
    },
    ADD(state, payload){
      state.selected=payload;
    },
    REMOVE(state,payload){
      state.selected=payload;
    },
    COUNT(state, payload){
      state.selectedCount += payload;
    },
    RESET_COUNT(state){
      state.selectedCount = 0;
    }
  },
  actions: {
    getSeats({commit}){
      getAllSeats()
      .then(seats => {
        commit('SET_SEATS', seats)
      })
    },
    bookSeats({commit}, payload){
      bookSeat({payload})
      .then(seats => {
        commit('BOOK_SEATS', seats)
      })
    },
    add(context, payload){
      const selected = context.state.selected
      selected.push(payload)
      context.commit('ADD',selected)
    },
    remove(context, payload){
      const selected = context.state.selected
      for( var i=0; i < selected.length; i++){
        if ( selected[i] == payload){
          selected.splice(i,1);
        }
      }
      context.commit('REMOVE',selected)
    },
    count(context, payload){
      context.commit('COUNT', payload);
    },
    resetCount(context){
      context.commit('RESET_COUNT')
    },
    
  }
})
