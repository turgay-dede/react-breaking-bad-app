import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotesAsync } from "../services/quotesService";
import QuotesList from "../components/QuotesList";
import Error from "../components/Error";
import Loading from "../components/Loading";
import {
  quotesSelector,
  statusSelector,
  errorSelector,
} from "../redux/quotesSlice";

function Quotes() {
  const dispatch = useDispatch();
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getQuotesAsync());
    }
  }, [dispatch, status]);
  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "succeeded" &&
        data.map((quote) => <QuotesList key={quote.quote_id} quote={quote} />)}
    </>
  );
}

export default Quotes;
