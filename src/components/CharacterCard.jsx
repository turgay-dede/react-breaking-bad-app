import { Link, useParams } from "react-router-dom";
import "../pages/styles.css";

function CharacterCard({ character }) {
  return (
    <div>
      <Link to={`/character/${character.char_id}`}>
        <img src={character.img} className="character" />
        <p className="charactercard">{character.name}</p>
      </Link>
    </div>
  );
}

export default CharacterCard;
