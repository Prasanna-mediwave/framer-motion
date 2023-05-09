import "./App.css";
import { HamburgerMenu } from "./component/hamburgerMenu/Hamburger";
import Popup from "./component/popup/upPopup/Popup";
import UncoveringPopup from "./component/popup/uncovering/UncoveringPopup";
import RevealingPopup from "./component/popup/revealing/RevealingPopup";
import BolwUpPopup from "./component/popup/blowup/BlowUpPopup";
import MeepMepp from "./component/popup/meep/MeepMepp";

function App() {
  return (
    <>
      <div className="header-container">
        <div className="header-wapper">
          <HamburgerMenu />
        </div>
        <div className="component-wapper">
          <Popup />
          <UncoveringPopup />
          <RevealingPopup />
          <BolwUpPopup />
          <MeepMepp />
        </div>
      </div>
    </>
  );
}

export default App;
