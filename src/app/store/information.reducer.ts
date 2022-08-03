import { createReducer, on } from "@ngrx/store";
import { toEnglish, toGerman } from "./information.actions";

export const initialState = "eng";

export const switchLanguage = createReducer(
    initialState,
    on(toGerman, (state) => "de"),
    on(toEnglish, (state) => "eng")
);