import { TabTitle } from "../Utilities/TabTitle.js";
import Header from "./Header.js";

function About() {
  TabTitle("About");
  return (
    <>
      <div className="main">
        <Header />
        <div className="body">
          <div className="about-content">
            <div className="about-title">
              <h1>Apie</h1>
              <p>
                Svetainės yra studentinio dalyko, Virtualizacijos pagrindų,
                projektas. Pagrindinė funkcija - virtualaus žaidimo, League of
                Legends, paskyrų pardavimas.
              </p>
            </div>
            <div className="row-about-goals">
              <div className="title-goals">
                <h1>Misijos</h1>
              </div>
              <div className="col-goals">
                <div className="row-goal">
                  <div className="num-goal">
                    <h1>1</h1>
                  </div>
                  <div className="text-goal">
                    Sukurti interaktyvią svetainę, kurioje galima kaupti
                    paskyras, vartotojams jas parduoti.
                  </div>
                </div>
                <div className="row-goal">
                  <div className="num-goal">
                    <h1>2</h1>
                  </div>
                  <div className="text-goal">
                    Naudoti virtualias mašinas, siekiant sukurti ir kaupti
                    paskyras. Įkelti į duombazę.
                  </div>
                </div>
                <div className="row-goal">
                  <div className="num-goal">
                    <h1>3</h1>
                  </div>
                  <div className="text-goal">
                    Duombazę ir kitas funkcijas sujungti su svetaine.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
