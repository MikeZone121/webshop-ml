import { getTotals } from "../redux/CartSlice";
import store from "../redux/store";

function GetTotals() {
  store.dispatch(getTotals());
}

export default GetTotals;
