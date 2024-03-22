import {
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import Link from "next/navigation";

// eslint-disable-next-line react/prop-types
const AccountMenu = ({ handleClick, handleClose, open, anchorEl, image }) => {
  return (
    <>
      <Tooltip title={"AccountSettings"}>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {image ? (
            <Avatar sx={{ width: 36, height: 36 }} src={image} />
          ) : (
            <Avatar sx={{ width: 36, height: 36 }} src={image}>
              OK
            </Avatar>
          )}
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            width: "200px",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <Link href={"/profile"}> */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Avatar />
            </ListItemIcon>
            {"Profile"}
          </MenuItem>
        {/* </Link> */}
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <IoSettingsOutline fontSize={"22px"} />
          </ListItemIcon>
          {"Settings"}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <IoLogOutOutline fontSize={"22px"} />
          </ListItemIcon>
          {"Logout"}
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
