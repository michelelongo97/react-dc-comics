const links = [
  {
    id: 1,
    text: "CHARACTER",
    url: "#",
    current: false,
  },
  {
    id: 2,
    text: "COMICS",
    url: "#",
    current: false,
  },
  {
    id: 3,
    text: "MOVIES",
    url: "#",
    current: false,
  },
  {
    id: 4,
    text: "TV",
    url: "#",
    current: false,
  },
  {
    id: 5,
    text: "GAMES",
    url: "#",
    current: false,
  },
  {
    id: 6,
    text: "COLLECTIBLES",
    url: "#",
    current: false,
  },
  {
    id: 7,
    text: "VIDEOS",
    url: "#",
    current: false,
  },
  {
    id: 8,
    text: "FANS",
    url: "#",
    current: false,
  },
  {
    id: 9,
    text: "NEWS",
    url: "#",
    current: false,
  },
  {
    id: 10,
    text: "SHOP",
    url: "#",
    current: false,
  },
];

export default function Header() {
  return (
    <header className="container">
      <img src="/img/dc-logo.png" alt="logo" />
      <nav>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
