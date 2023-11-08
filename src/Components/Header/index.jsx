import { Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import "./style.scss";
const Header = () => {
  return (
    <div className="headerComp">
      <div className="headerWrapper">
        <div className="logo">
          <LockIcon style={{ color: "#388e3c" }} /> Passwd <span>Safe.</span>
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
