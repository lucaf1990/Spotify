import { act } from "react-dom/test-utils";
import {
  ROCK_CARD,
  POP_CARD,
  HIP_HOP_CARD,
  IS_LOADING,
  HAS_ERROR,
  CARD_ID,
  SPECIFIC_CARD,
  ALL_TRACKS,
  PLAY_ALBUM,
} from "../Action";

const initialState = {
  cardSong: {
    pop: [],
    rock: [],
    hiphop: [],
  },
  specificCard: {},
  hasError: false,
  isLoading: true,
  cardId: null,
  tracks: {},
  playAlbum: {},
};

const CardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_ALBUM:
      return {
        ...state,
        playAlbum: action.payload,
      };
    case ALL_TRACKS:
      return {
        ...state,
        tracks: action.payload,
      };
    case ROCK_CARD:
      return {
        ...state,
        cardSong: { ...state.cardSong, rock: action.payload },
      };
    case SPECIFIC_CARD:
      return {
        ...state,
        specificCard: action.payload,
      };
    case POP_CARD:
      return {
        ...state,
        cardSong: { ...state.cardSong, pop: action.payload },
      };
    case HIP_HOP_CARD:
      return {
        ...state,
        cardSong: { ...state.cardSong, hiphop: action.payload },
      };

    case IS_LOADING:
      return { ...state, isLoading: false };
    case HAS_ERROR:
      return { ...state, hasError: true };
    case CARD_ID:
      return { ...state, cardId: action.payload };

    default:
      return state;
  }
};
export default CardsReducer;
