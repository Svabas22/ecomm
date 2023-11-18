import Header from "./Header";

function BuyAccount() {
  return (
    <>
      <Header />
      <div className="body">
        <div className="row">
          <div className="account-title">
            <h1>Title this is not real</h1>
          </div>
          <div className="account-info">
            <h2>Account info</h2>
            <div className="account-info-price">
              <h2>444 dollars</h2>
            </div>
            <div className="account-details">
              <h3>This is 444 dollar offer</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyAccount;
