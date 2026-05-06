import ArtistCard from "@/components/ArtistCard";
import { Artist } from "@/types/Artist";
import { Link } from "react-router-dom";

interface ArtistsListProps {
  artists: Artist[];
}

const ArtistsList = ({ artists = [] }: ArtistsListProps) => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-4 p-4 sm:flex-row">
      {artists.length > 0 ? (
        artists.map((artist) => (
          <Link key={artist.id} to={`/artists/${artist.name}`} state={{ artist }}>
            <ArtistCard name={artist.name} imageUrl={artist.imageUrl} />
          </Link>
        ))
      ) : (
        <p className="text-center text-lg text-gray-500">No artists found.</p>
      )}
    </div>
  );
};

export default ArtistsList;
