import React from "react";
import { Link } from "react-router-dom";

function Quotes({ quote }) {
  return (
    <ul className="list-group">
      <Link to={`/quote/${quote.quote_id}`}>
        <li key={quote.quote_id} className="list-group-item">
          {quote.quote} <b>{quote.author}</b>
        </li>
      </Link>
    </ul>
  );
}

export default Quotes;
