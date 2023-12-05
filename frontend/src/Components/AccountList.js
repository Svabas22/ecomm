import { TabTitle } from "../Utilities/TabTitle.js";
import Header from "./Header.js";

function AccountList() {
  TabTitle("Account List");
  return (
    <>
      <div className="main">
        <Header />
        <div className="body">
          <h1>Account list page</h1>
        </div>
      </div>
    </>
  );
}

export default AccountList;
