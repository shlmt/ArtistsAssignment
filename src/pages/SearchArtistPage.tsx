import { useState } from "react";
import { Artist } from "@/types/Artist";
import ArtistsList from "@/components/ArtistsList";

const SearchArtistPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artists, setArtists] = useState<Artist[]>([]);

  const handleSearch = () => {};

  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-bold text-rose-700">
          Search Artist
        </h1>
        <div className="flex flex-col items-center justify-center gap-2 p-4 sm:flex-row">
          <input
            type="text"
            placeholder="Enter Artist Name..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-80 max-w-full rounded p-2 ring-1 ring-rose-600 duration-200 focus:w-96"
          />
          <button
            onClick={handleSearch}
            className="rounded bg-rose-600 px-4 py-2 text-white hover:bg-rose-500"
          >
            Search
          </button>
        </div>

        {searchTerm && artists.length > 0 && <ArtistsList artists={artists} />}
      </div>
    </>
  );
};

export default SearchArtistPage;
