import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box
        sx={{
          height: "20%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Home</Typography>
      </Box>
      <Box
        sx={{
          height: "20%",
          width: "100%",
          pl: { xs: "11%", md: "33%" },
          pr: { xs: "11%", md: "33%" },
        }}
      >
        <Typography sx={{ pb: 2 }}>
          Instructions: Use the bar on the left to look through the example
          pages of each different free API.
        </Typography>
        <Typography>
          Credit to Mixed Analytics for the list of free APIs.
        </Typography>
        <Typography>
          <a
            href="https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/"
            style={{ color: "orange" }}
          >
            https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
          </a>
        </Typography>
      </Box>
      <Box sx={{ height: "20%", width: "100%" }}></Box>
      <Box sx={{ height: "20%", width: "100%" }}></Box>
      <Box sx={{ height: "20%", width: "100%" }}></Box>
    </Box>
  );
}

export default Home;
