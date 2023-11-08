import { Button } from "@mui/material";
import "./style.scss";
const Header = () => {
  return (
    <div className="headerComp">
      <div className="headerWrapper">
        <div className="logo">
          Passwd<span>Safe.</span>
        </div>
        <div className="authentication">
          <Button color="primary" variant="contained">
            Login
          </Button>
          <Button color="primary" variant="outlined">
            Signup for free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
