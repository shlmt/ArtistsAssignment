import { Song } from "@/types/song";

const SongList = ({ songs }: { songs: Song[] }) => {
  if (!songs || songs.length === 0) {
    return <p className="text-center text-gray-500">No songs found.</p>;
  }

  return (
    <ul className="space-y-1">
      {songs.map((song) => (
        <li key={song.id} className="text-gray-600">
          {song.name} - {song.album} ({song.duration})
        </li>
      ))}
    </ul>
  );
};

export default SongList;
