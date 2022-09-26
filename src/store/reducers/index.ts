import { combineReducers } from "@reduxjs/toolkit";
import dragonList from "../../pages/DragonList/reducer/dragonList";
import dragonItem from "../../pages/DragonItem/reducer/dragonItem";


export default combineReducers({
    dragonList,
    dragonItem
});
