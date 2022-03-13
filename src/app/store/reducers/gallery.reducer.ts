import { Album } from "src/app/models";
import { Actions, INITIALIZE_GALLERY_LIST } from "../actions/gallery.actions";


const initialState: Album[] = [];

export function galleryListReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case INITIALIZE_GALLERY_LIST: {
            return [...action.payload];
        }

        default:
            return state;
    }
}