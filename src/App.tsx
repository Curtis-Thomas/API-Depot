import { Box } from "@mui/material";
import Header from "./navigation/Header";
import SideBar from "./navigation/SideBar";
import Home from "./navigation/Home";

import { useState } from "react";
import APIsGuru from "./core/APIsGuru";
import ArtInstituteOfChicago from "./core/ArtInstituteOfChicago";

function App() {
  const [activePage, setActivePage] = useState("home");
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#1F3238",
        color: "#EED7A6",
      }}
    >
      <Box
        sx={{
          height: "5%",
          width: "100%",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          boxShadow: "inset 0 0 5px #162327",
          pl: 1,
        }}
      >
        <Header />
      </Box>
      <Box sx={{ display: "flex", height: "95%", width: "100%" }}>
        <Box
          sx={{
            height: "100%",
            width: { xs: "25%", md: "15%" },
            boxShadow: "inset 0 0 5px #162327",
          }}
        >
          <SideBar setActivePage={setActivePage} />
        </Box>
        <Box
          sx={{
            minHeight: "100%",
            width: { xs: "75%", md: "85%" },
            boxShadow: "inset 0 0 5px #162327",
          }}
        >
          {activePage === "home" && <Home />}
          {activePage === "APIs.guru" && <APIsGuru />}
          {activePage === "ArtInstituteOfChicago" && <ArtInstituteOfChicago />}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
