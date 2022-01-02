import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import MovieList from "./MovieList";
import Trailer from "./Trailer";

function App() {
  const [filter, setFilter] = useState("");
  const [rate, setRate] = useState(0);
  const [list, setList] = useState([
    {
      id: 1,
      title: "Taken 1",
      description: `Former Green Beret and CIA officer Bryan Mills attempts to build a closer relationship with his 17-year-old daughter, Kim, who lives with her mother (his ex-wife) Lenore, and her wealthy stepfather, Stuart. While overseeing security at a concert for pop star Sheerah, Bryan saves her from a knife-wielding attacker. Out of gratitude, Sheerah offers to have Kim assessed as a singer, which she first rebuffed when Bryan initially mentioned Kim's ambition. Before Bryan can tell her about the offer, Kim asks him for permission to travel to Paris with her best friend, Amanda. He initially refuses, concerned about her safety, but eventually gives in. At the airport, Bryan learns that Kim lied; the girls are actually planning to follow U2 during their European tour.

      Upon arriving at Charles de Gaulle Airport, Kim and Amanda meet Peter, a handsome young stranger who offers to share a taxi. Kim and Amanda go to Amanda's cousins' apartment, where Kim finds out that the cousins are in Spain. After answering a call from Bryan, Kim sees men enter the apartment and abduct Amanda. When she is dragged out from hiding, she yells a description of her abductor, following her father's instructions. Bryan hears someone breathing on the phone and tells the listener that he will not pursue the kidnappers if they release his daughter, but warns them that refusing to accept his offer will result in their deaths.[8] The listener only replies "good luck" and terminates the call.
      
      Sam, an old friend and former colleague of Bryan, deduces that the kidnappers are part of an Albanian sex trafficking ring and identifies the listener as mob boss Marko Hoxha. Based on previous history, Kim must be found within 96 hours or she will likely be lost forever. Bryan flies to Paris, breaks into the apartment, and finds Peter's reflection in a picture on Kim's phone. He finds Peter at the airport, trying to charm a female traveler, and tries to capture him. While fleeing, Peter is run over and killed by an oncoming truck. With his only lead dead, Bryan turns to an old contact, former French intelligence agent Jean-Claude Pitrel, who now has a desk job. Jean-Claude informs him of the local red-light district, where the Albanian prostitution ring operates, but warns him not to get involved. Bryan searches a makeshift brothel in a construction yard and rescues a drugged young woman who has Kim's denim jacket. After a gunfight and high-speed chase with the brothel's operators, Bryan takes the woman to a hotel, where he improvises her detoxification.`,
      posterURL:
        "https://img.filmsactu.net/datas/personnes/l/i/liam-neeson/xl/liam-neeson-60cb1b9e9a319.jpg",
      rating: 1,
      trailer: "https://www.youtube.com/embed/XK9zL0ze9O4",
    },
    {
      id: 2,
      title: "Pirates",
      description: `Pirates redirects here. For the 3D short film, see Pirates 4-D. For the soundtrack, see Pirates of the Caribbean: On Stranger Tides (soundtrack).
      Pirates of the Caribbean:The film's main character Jack Sparrow stands on a beach. He wears a red bandana, a dark blue vest, white shirt, and black pants. Attached to his belt are two guns and a scarf. A ship with flaming sails approaches from the sea. In the background, three mermaids sit on a rock. The main actors' names are at the top, and the film credits at the bottom.
      Pirates of the Caribbean: On Stranger Tides is a 2011 American fantasy swashbuckler film, the fourth installment in the Pirates of the Caribbean film series and a standalone sequel to At World's End (2007). It is the first film in the series not to be directed by Gore Verbinski, replaced by Rob Marshall. Jerry Bruckheimer again served as producer. In the film, which draws its plot loosely from the 1987 novel On Stranger Tides by Tim Powers, the eccentric pirate Captain Jack Sparrow (Johnny Depp) is forced into a shaky alliance with Angelica (Penélope Cruz), a mysterious woman from his past, as they embark on a quest for the Fountain of Youth, confronting the infamous pirate Blackbeard (Ian McShane) and outrunning Jack’s old foe Barbossa (Geoffrey Rush). The film was produced by Walt Disney Pictures and released by Walt Disney Studios Motion Pictures. It was the first film in the series to be released in the Disney Digital 3-D and IMAX 3D formats.
      
      Writers Ted Elliott and Terry Rossio first learned of Powers's novel On Stranger Tides during the back-to-back production of Dead Man's Chest (2006) and At World's End, and considered it a good starting point for a new film in the series. Pre-production started after the end of the 2007–2008 Writers Guild of America strike, with Depp collaborating with the writers on the story design. Principal photography lasted for 106 days between June and November 2010, with locations in Hawaii, the United Kingdom, Puerto Rico and California. Filming employed 3D cameras similar to those used in the production of the 2009 film Avatar, and ten companies were involved with the film's visual effects. Following inflated production costs which ballooned the net budget to $379 million, the film currently ranks as the most expensive film ever made.`,
      posterURL:
        "https://download.vikidia.org/vikidia/fr/images/thumb/6/6a/Drapeau_pirate_de_Jack_Rackam.svg/1200px-Drapeau_pirate_de_Jack_Rackam.svg.png",
      rating: 3,
      trailer: "https://www.youtube.com/embed/naQr0uTrH_s",
    },
    {
      id: 3,
      title: "Spiderman",
      description: `Spider-Man est une série de films américains de super-héros, adaptés des comics de Marvel Spider-Man de Stan Lee et Steve Ditko.

      La bande dessinée avait déjà fait l'objet dans les années 1970 d'une adaptation en série télévisée, dont trois épisodes, L'Homme araignée, La Riposte de l'homme-araignée et Spider-Man défie le Dragon, étaient sortis en France dans les salles de cinéma.
      
      Une trilogie est réalisée par Sam Raimi : Spider-Man (2002), Spider-Man 2 (2004) et Spider-Man 3 (2007). Le rôle-titre est incarné par Tobey Maguire, tandis que Kirsten Dunst endosse celui de Mary Jane Watson, et James Franco le rôle du jeune héritier Harry Osborn.
      
      Le studio Sony reboote la franchise en 2010, cette fois avec Marc Webb derrière la caméra : Andrew Garfield dans le rôle-titre et Emma Stone dans celui de Gwen Stacy. The Amazing Spider-Man, sorti en 2012, est un succès commercial et convainc la critique. Cependant, sa suite The Amazing Spider-Man : Le Destin d'un héros, sortie en 2014, peine à convaincre le public nord-américain et connait le plus mauvais accueil critique de la franchise. Cela annule définitivement les projets des deux suites et laisse en suspens le spin-off Sinister Six, pour une durée indéterminée.`,
      posterURL:
        "https://img-31.ccm2.net/b7cT9EdHlBFD_m_yRloEOxdYwgk=/1240x/smart/a561efadf2fd4681bdd2506b4b527ca5/ccmcms-hugo/10607992.jpg",
      rating: 2,
      trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",
    },
    {
      id: 4,
      title: "alice ",
      description: `Alice in Borderland (今際の国のアリス, Imawa no Kuni no Arisu?) est une série télévisée japonaise de science-fiction dramatique basée sur le manga du même nom écrit par Aso Haro. La série met en vedette Kento Yamazaki dans le rôle d'Arisu, un jeune homme qui se retrouve perdu dans un Tokyo abandonné connu sous le nom de « Borderland » aux côtés de ses meilleurs amis, Chōta (Yûki Morinaga) et Karube (Keita Machida). Alors qu'ils commencent leur quête de civilisation, le trio découvre rapidement qu'ils sont piégés dans une ville dans laquelle ils sont forcés de participer à des jeux risqués, violents et dangereux, repoussant ainsi leurs propres « limites émotionnelles et physiques », pour survivre1.
      La série est diffusée sur Netflix le 10 décembre 2020, où elle a reçu des critiques positives de la part des téléspectateurs et des critiques2. Deux semaines après la sortie de la première saison, Netflix a renouvelé la série pour une deuxième saison`,
      posterURL:
        "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/alicem-keyart.jpg.adapt.crop16x9.575p.jpg",
      rating: 0,
      trailer: "https://www.youtube.com/embed/49_44FFKZ1M",
    },
  ]);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} list={list} setList={setList} />}
        />
        <Route
          exact
          path="/trailer/:id"
          render={(props) => <Trailer {...props} list={list} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
