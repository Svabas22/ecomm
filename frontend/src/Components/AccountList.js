import { TabTitle } from "../Utilities/TabTitle.js";
import Header from "./Header.js";

function AccountList() {
  TabTitle("Account List");
  return (
    <>
      <Header />
      <div>
        <h1>Account list page</h1>
      </div>
    </>
  );
}

export default AccountList;
