import {
  ADD_PLACE,
  DELETE_PLACE,
} from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          name: action.placeName,
          image: {
            uri:
              "https://s-ec.bstatic.com/images/hotel/max1024x768/873/87375257.jpg"
          },
          key: Math.random().toString()
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        }),
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
