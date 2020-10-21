import React from "react";
import { useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


export default function NavBar() {

    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {

        setAnchorEl(null);
    };

    return <>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Navigate
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={()=>{history.push("/all");
                                    handleClose()} } > All </MenuItem>
            <MenuItem onClick={()=>{history.push("/open");
                handleClose()} }> Open </MenuItem>
            <MenuItem onClick={()=>{history.push("/inprogress");
                    handleClose()} }> In progress </MenuItem>
            <MenuItem onClick={()=>{history.push("/done");
                handleClose()} }> Done </MenuItem>
        </Menu>

    </>
}


