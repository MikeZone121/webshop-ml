import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTotals } from "../redux/CartSlice";

function GetTotals() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch]);

  return null;
}

export default GetTotals;
