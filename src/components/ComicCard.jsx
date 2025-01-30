export default function ComicCard({ image, title }) {
  return (
    <div>
      <img src={image} alt={title} className="comics-cover" />
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
}
