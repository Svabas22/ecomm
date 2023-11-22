import Header from "./Header";

function Home() {
  return (
    <>
      <div className="main">
        <Header />
        <div className="body">
          <div className="grid-wrapper">
            <div className="grid-title">
              <span>10000 RP</span>
              <div className="grid-price"></div>
              <div className="grid-price"></div>
            </div>

            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
