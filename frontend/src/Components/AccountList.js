import { TabTitle } from "../Utilities/TabTitle.js";
import Header from "./Header.js";

function AccountList() {
  TabTitle("Account List");
  return (
    <>
      <div className="main">
        <Header />
        <div className="body">
          <div className="user-name">
            <h1>Name</h1>
          </div>
          <div className="user-list">
            <h2>List</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountList;
