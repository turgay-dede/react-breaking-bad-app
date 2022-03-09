import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "../components/CharacterCard";
import { getCharactersAsync } from "../services/charactersService";

import Masonry from "react-masonry-css";
import "./styles.css";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Home() {
  const characters = useSelector((state) => state.character.characters);
  const nextPage = useSelector((state) => state.character.page);
  const hasNextPage = useSelector((state) => state.character.hasNextPage);
  const status = useSelector((state) => state.character.status);
  const error = useSelector((state) => state.character.error);

  const dispatch = useDispatch();
  useEffect(() => {
    if(status === 'idle'){
      dispatch(getCharactersAsync());
    }
  }, [dispatch,status]);

  if (status  === 'failed') {
    return <Error error={error} />;
  }
  return (
    <>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
            <CharacterCard key={character.char_id} character={character} />
          
        ))}
      </Masonry>
      {status === 'loading' && <Loading />}
      {hasNextPage && status !== 'loading' && (
        <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
          <button onClick={() => dispatch(getCharactersAsync(nextPage))}>
            Load More({nextPage})
          </button>
        </div>
      )}
      {!hasNextPage && <div>There is nothing to be shown.</div>}
    </>
  );
}

export default Home;
