import Header from "./Header";

function BuyAccount() {
  return (
    <>
      <Header />
      <div className="body">
        <div className="upper-content">
          <div className="col-upper-content">
            <div className="account-title">
              <h1>Title this is not real</h1>
            </div>
            <div className="account-info">
              <h2 className="account-info-h2">Account info</h2>
              <p className="account-info-p">
                Price <b>444</b>
              </p>
              <hr />
              <div className="account-details">
                <h2 className="account-info-h2">Details</h2>
                <p className="account-info-p">
                  This is a 444 dollar
                  offerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
                </p>
              </div>
            </div>
          </div>
          <div className="right-upper-content">
            <div className="col-right-upper-content">
              <h2>Order</h2>
              <hr />
              <div className="row-price-right-upper-content">
                <h2>Total price</h2>
                <h2>
                  XX <span>eur</span>
                </h2>
              </div>
              <button className="buy-btn">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="box a">
          A
          <div className="title-product-info">
            <h6>Product info</h6>
          </div>
          <div className="details">
            <h6>Details</h6>
            <p>This is 10250RP offer</p>
          </div>
        </div>
        <div className="box b">B</div>
        <div className="box c">C</div>
      </div>
    </>
  );
}

export default BuyAccount;
