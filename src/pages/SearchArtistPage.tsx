import { useRef, useState } from "react";
import ArtistsList from "@/components/ArtistsList";
import { useQuery } from "@tanstack/react-query";
import { ArtistApi } from "@/api/artists";
import Loader from "@/components/Loader";
import ErrorMessage from "@/components/ErrorMessage";

const SearchArtistPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: artists = [],
    isFetching,
    error,
    isSuccess,
  } = useQuery({
    queryFn: async () => await ArtistApi.search(searchTerm),
    queryKey: ["search", searchTerm],
    enabled: !!searchTerm,
  });

  const handleSearch = () => {
    // I decided to use ref instead of state for input value because it caused to re-fetch in typing
    const term = inputRef.current?.value?.trim();
    if (term) setSearchTerm(term);
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold text-rose-700">
        Search Artist
      </h1>
      <div className="flex flex-col items-center justify-center gap-2 p-4 sm:flex-row">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Artist Name..."
          className="w-80 max-w-full rounded p-2 ring-1 ring-rose-600 duration-200 focus:w-96"
        />
        <button
          onClick={handleSearch}
          className="rounded bg-rose-600 px-4 py-2 text-white hover:bg-rose-500"
        >
          Search
        </button>
      </div>

      {isFetching ? (
        <Loader />
      ) : isSuccess ? (
        <ArtistsList artists={artists} />
      ) : (
        error && <ErrorMessage message={error?.message} />
      )}
    </>
  );
};

export default SearchArtistPage;
