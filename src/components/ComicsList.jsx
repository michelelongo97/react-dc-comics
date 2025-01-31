import ComicCard from "./ComicCard";
import comics from "../../data/comics";

export default function ComicsList() {
  return (
    <section className="container">
      <div className="current-series">
        <p>CURRENT SERIES</p>
      </div>
      <div className="row">
        {comics.map((comic) => {
          return (
            <div className="col" key={comic.id}>
              <ComicCard image={comic.thumb} title={comic.title} />
            </div>
          );
        })}
      </div>
      <div className="main-btn-cnt">
        <button className="main-btn">LOAD MORE</button>
      </div>
    </section>
  );
}
