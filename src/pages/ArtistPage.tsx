import { ArtistApi } from "@/api/artists";
import Loader from "@/components/Loader";
import { Artist } from "@/types/Artist";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useParams } from "react-router-dom";
import ErrorMessage from "@/components/ErrorMessage";
import SongList from "@/components/SongsList";

const ArtistPage = () => {
  // it needed if we would like to fetch the data by url param
  // but I decided to pass the artist data by state
  const { name } = useParams();

  const location = useLocation();
  const artist = location.state?.artist as Artist;

  const {
    data: top3Songs = [],
    isLoading,
    isSuccess,
    error,
  } = useQuery({
    queryFn: async () => await ArtistApi.getTop3Songs(name!),
    queryKey: ["top3Songs", name],
    enabled: !!name,
  });

  const renderSongs = () => {
    // for more readability
    if (isLoading) return <Loader />;
    if (isSuccess) return <SongList songs={top3Songs} />;
    return <ErrorMessage message={error?.message} />;
  };

  if (!name && !artist) {
    return <div className="p-10 text-center text-xl">Invalid artist</div>;
  }

  return (
    <div className="p-5">
      <div className="px-15 border-1 flex justify-center border-pink-700 py-5">
        <img className="h-36" src={artist?.imageUrl} alt={name} />
      </div>
      <div className="p-5 text-center text-2xl font-bold text-pink-900">
        {artist.name ?? name}
      </div>
      <p className="text-gray-900">{artist?.biography}</p>
      <div className="border-1 m-5 rounded border-dotted border-pink-700 p-5">
        <div className="mb-3 text-lg font-bold text-pink-700">Top 3 Songs</div>
        {renderSongs()}
      </div>
      <Link
        to={"/artists"}
        className="absolute bottom-2 left-3 rounded bg-gray-400 p-2 text-white"
      >
        {"<- Back"}
      </Link>
    </div>
  );
};

export default ArtistPage;
