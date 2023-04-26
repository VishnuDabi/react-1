import { createStore } from "redux";
import rootReducer from "./Rootreducer";
let store=createStore(rootReducer
    ,window.__Redux_DEVTOOLS_EXTENTION__&& window.__Redux_DEVTOOLS_EXTENTION__());
export default store;