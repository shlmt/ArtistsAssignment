
interface ArtistCardProps {
  name: string;
  imageUrl: string;
}

const ArtistCard = ({name, imageUrl}: ArtistCardProps) => {

  return (
    <div className="max-w-sm overflow-hidden rounded shadow-sm">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="mb-2 text-xl font-bold text-pink-950">{name}</div>
    </div>
  );
};

export default ArtistCard;
