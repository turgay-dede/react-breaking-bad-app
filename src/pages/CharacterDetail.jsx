import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Detail() {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { char_id } = useParams();

  useEffect(() => {
    axios(`https://www.breakingbadapi.com/api/characters/${char_id}`)
      .then((res) => setCharacter(res.data[0]))
      .finally(setIsLoading(false));
  }, [char_id]);

  return (
    <div>
      {isLoading && <Loading />}
      {character && (
        <div>
          <h1>
            {character.name} -({character.nickname})
          </h1>
          <h3>{character.occupation[0]}</h3>
          <img src={character.img} style={{ width: "50%" }} />
        </div>
      )}
      {character && <pre>{JSON.stringify(character, null, 2)}</pre>}
    </div>
  );
}

export default Detail;
