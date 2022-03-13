import { Action } from "@ngrx/store";
import { Album } from "src/app/models";


export const INITIALIZE_GALLERY_LIST = 'INITIALIZE_GALLERY_LIST';

export class InitializeGalleryList implements Action {
    public readonly type = INITIALIZE_GALLERY_LIST;
    constructor(public payload: Album[]) {}
}

export type Actions = InitializeGalleryList;