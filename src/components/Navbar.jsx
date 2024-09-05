import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { NavLink, useNavigate } from "react-router-dom";
import { useAxios } from "./../hooks/useAxios";
import { API_KEY } from "../hooks/useEnv";
import { AutoComplete } from "antd";

export default function Navbar() {
  const [options, setOptions] = React.useState([]);
  const navigate = useNavigate()

  const handleSearchMovie = (e) => {
    useAxios()
      .get(`/search/movie?query=${e}&include_adult=false&api_key=${API_KEY}`)
      .then((res) => {
        setOptions(
          res.data.results.map((item) => ({ value: item.title, id: item.id }))
        );
      });
  };

  const handleChooseMovie = (e, b) => {
    navigate(`${b.id}`)
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="py-2" position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <LiveTvIcon className="scale-[1.5]" />
          </IconButton>
          <Typography
            className="space-x-6"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <NavLink
              className={"p-2 rounded-xl text-[18px] duration-300"}
              to={"/"}
            >
              Now Playing
            </NavLink>
            <NavLink
              className={"p-2 rounded-xl text-[18px] duration-300"}
              to={"/popular"}
            >
              Popular
            </NavLink>
            <NavLink
              className={"p-2 rounded-xl text-[18px] duration-300"}
              to={"/top-rated"}
            >
              Top Rated
            </NavLink>
            <NavLink
              className={"p-2 rounded-xl text-[18px] duration-300"}
              to={"/up-coming"}
            >
              Up Coming
            </NavLink>
          </Typography>
          <AutoComplete
            onSearch={handleSearchMovie}
            onSelect={handleChooseMovie}
            size="large"
            allowClear
            style={{ width: 200 }}
            options={options}
            placeholder="Search Movie..."
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
