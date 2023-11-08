import "./style.scss";
// import password_vault from "../../Assets/password_vault.svg";
import mainBanner2 from "../../Assets/SVGs/mainBanner2.svg";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
const LandingPage = () => {
  return (
    <div className="landingPageComp">
      <div className="landingPageWrapper">
        <div className="bannerImage">
          <img src={mainBanner2} alt="mainBanner" />
        </div>
        <div className="bannerContent">
          <div className="mainBanner heading">
            ALL YOUR PASSWORDS AT ONE PLACE
          </div>
          <div className="secBanner secHeading">
            <div className="lock">
              <LockIcon />
              LOCK IN PEACE,
            </div>
            <div className="unlock">
              <KeyIcon />
              UNLOCK WITH EASE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
