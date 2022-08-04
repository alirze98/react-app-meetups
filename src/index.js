import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {FavoritesContextProvider} from './store/favorites-context'

ReactDOM.render(
<FavoritesContextProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</FavoritesContextProvider>
 ,document.getElementById("root"));
