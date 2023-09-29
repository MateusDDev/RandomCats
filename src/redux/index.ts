import { applyMiddleware, legacy_createStore as createStore } from "redux";
import catReducer from "./reducer/catReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const store = createStore(catReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
