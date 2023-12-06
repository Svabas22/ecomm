import { TabTitle } from "../Utilities/TabTitle.js";
import Header from "./Header.js";

function AccountList() {
  TabTitle("Account List");
  
  return (
    <>
      <div className="main">
        <Header />
        <div className="body">
        <div className="grid-wrapper">
            {gridData.map((item, index) => (
              <div
                key={index}
                className="grid"
                onClick={() =>
                  redirect(
                    item.list_id,
                    item.list_Name,
                    item.list_region,
                    item.list_price
                  )
                }
              >
                <div className="row-grid">
                  <img className="grid-icon" src={worldIcon} />
                  <div className="grid-title">
                    <h6>{item.list_Name}</h6>
                  </div>
                </div>
                <hr />
                <div className="row-grid account">
                  <div className="tier-level">{item.list_region}</div>
                  <div className="grid-price">
                    <div className="price-text">Price</div>
                    <div className="price-num">{item.list_price}</div>
                    <div className="price-currency">EUR</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default AccountList;
