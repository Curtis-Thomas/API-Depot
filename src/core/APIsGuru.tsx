import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function APIsGuru() {
  const [apisGuru, setApisGuru] = useState([]);

  function fetchAPIsGuru() {
    fetch("https://api.apis.guru/v2/providers.json")
      .then((response) => response.json())
      .then((data) => {
        setApisGuru(data.data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchAPIsGuru();
  }, []);

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box
        sx={{
          height: "10%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "40%",
            width: `100%`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>API's Guru</Typography>
        </Box>
        <Box
          sx={{
            height: "60%",
            width: `100%`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="https://apis.guru/api-doc/#tag/APIs"
            style={{ color: "orange" }}
          >
            https://apis.guru/api-doc/#tag/APIs
          </a>
        </Box>
      </Box>

      <Box sx={{ height: "90%", width: "100%", overflow: "auto", p: 5 }}>
        <Typography sx={{ pb: 2 }}>Info: List of all provided API's</Typography>
        {Array.isArray(apisGuru) &&
          apisGuru.map((api, index) => (
            <Box key={index} sx={{ pb: 1 }}>
              <Typography>
                <a href={api} style={{ color: "orange" }}>
                  {api}
                </a>
              </Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default APIsGuru;
