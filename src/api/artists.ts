import { Artist } from "@/types/Artist";
import { apiFetch } from "./api";
import { Song } from "@/types/song";

interface ArtistResult {
  idArtist: string;
  strArtist: string;
  strBiography: string;
  strArtistThumb: string;
}

interface SongResult {
  idTrack: string;
  strTrack: string;
  strAlbum: string;
  intDuration: string;
}

function formatDuration(ms: number): string {
  const iso = new Date(ms).toISOString().slice(11, 19); // HH:mm:ss
  return iso.startsWith("00:") ? iso.slice(3) : iso; // mm:ss
}

export const ArtistApi = {
  search: async (query: string): Promise<Artist[]> => {
    const data = await apiFetch(`search.php?s=${query}`);
    if (!data.artists || !Array.isArray(data.artists)) return [];
    return data.artists.map((ele: ArtistResult) => ({
      id: ele.idArtist,
      name: ele.strArtist,
      biography: ele.strBiography,
      imageUrl: ele.strArtistThumb,
    }));
  },
  getTop3Songs: async (artist: string): Promise<Song[]> => {
    const data = await apiFetch(`track-top10.php?s=${artist}`);
    if (!data.track || !Array.isArray(data.track)) return [];
    return data.track.slice(0, 3).map((ele: SongResult) => ({
      id: ele.idTrack,
      name: ele.strTrack,
      album: ele.strAlbum,
      duration: formatDuration(+ele.intDuration),
    }));
  },
};
