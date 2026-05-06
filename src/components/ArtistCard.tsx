interface ArtistCardProps {
  name: string;
  imageUrl: string;
}

const ArtistCard = ({ name, imageUrl }: ArtistCardProps) => {
  return (
    <div className="h-56 max-w-sm overflow-hidden rounded p-5 shadow-sm">
      <img className="w-full rounded" src={imageUrl} alt={name} />
      <div className="mb-2 text-center text-xl font-bold text-pink-950 hover:underline">
        {name}
      </div>
    </div>
  );
};

export default ArtistCard;
