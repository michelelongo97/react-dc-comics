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
            <div className="col" key={comics.id}>
              <ComicCard
                image={
                  "https://imgs.search.brave.com/aUNyvZBXUulb963JH7KnQm9AMr8bcBoLsiHREOqayIU/rs:fit:612:612:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOWZm/ZWYzMDMtMGZhYy00/OGRkLTg3ODctYzUy/NTk0MDk2ODAwXzEu/MTc1ZDk1Mjg2NzY0/OGEwOTczMTY2NGMy/MTE1NjNlYWIuanBl/Zz9vZG5XaWR0aD02/MTImb2RuSGVpZ2h0/PTYxMiZvZG5CZz1m/ZmZmZmY"
                }
                title={"Action Comics #1000: The Deluxe Edition"}
              />
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
