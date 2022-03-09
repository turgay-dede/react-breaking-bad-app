import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { getQuotesByIdAsync } from "../services/quotesService";
import { statusSelector, errorSelector } from "../redux/quotesSlice";

function QuoteDetail() {
  const { quote_id } = useParams();
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quotes.quote);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    dispatch(getQuotesByIdAsync(quote_id));
  }, [dispatch, quote_id]);

  if (!quote) {
    return <Navigate to="/quotes" />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      {status === "loading" && <Loading />}
      {quote && (
        <>
          <h1>Quote Detail</h1>
          <pre>{JSON.stringify(quote[0], null, 2)}</pre>
        </>
      )}
    </div>
  );
}

export default QuoteDetail;
