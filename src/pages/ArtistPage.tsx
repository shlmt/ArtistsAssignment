import { Artist } from "@/types/Artist";
import { useLocation, useParams } from "react-router-dom";

const ArtistPage = () => {
  const { name } = useParams();

  const location = useLocation();
  const artist = location.state?.artist as Artist;

  return (
    <>
      <div>
        <img className="w-full" src={artist.imageUrl} alt={name} />
      </div>
      <div className="p-10 text-center text-2xl">{name}</div>
      <div>
        <p>{artist?.biography}</p>
      </div>
      <div>
        <div>Top 3 Songs</div>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    </>
  );
};

export default ArtistPage;
