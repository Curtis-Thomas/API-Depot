import { Box, Button, Typography } from "@mui/material";

function SideBar({ setActivePage }: any) {
  const buttonTextColor = "#EED7A6";

  const buttonHoverTextColor = "#EED7A1";
  const buttonHoverBackgroundColor = "#162327";

  const boxBackgroundColor = "#1F3238";
  const boxShadow = "inset 0 0 5px #162327";

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "10%",
          backgroundColor: boxBackgroundColor,
          boxShadow: boxShadow,
        }}
      >
        <Button
          sx={{
            height: "100%",
            width: "100%",
            color: buttonTextColor,
            "&:hover": {
              backgroundColor: buttonHoverBackgroundColor,
              color: buttonHoverTextColor,
            },
          }}
          onClick={() => setActivePage("home")}
        >
          <Typography>Home</Typography>
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "10%",
          backgroundColor: boxBackgroundColor,
          boxShadow: boxShadow,
        }}
      >
        <Button
          sx={{
            height: "100%",
            width: "100%",
            color: buttonTextColor,
            "&:hover": {
              backgroundColor: buttonHoverBackgroundColor,
              color: buttonHoverTextColor,
            },
          }}
          onClick={() => setActivePage("APIs.guru")}
        >
          <Typography>APIs.guru</Typography>
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "10%",
          backgroundColor: boxBackgroundColor,
          boxShadow: boxShadow,
        }}
      >
        <Button
          sx={{
            height: "100%",
            width: "100%",
            color: buttonTextColor,
            "&:hover": {
              backgroundColor: buttonHoverBackgroundColor,
              color: buttonHoverTextColor,
            },
          }}
          onClick={() => setActivePage("ArtInstituteOfChicago")}
        >
          <Typography>Art Institute Of Chicago</Typography>
        </Button>
      </Box>
    </>
  );
}

export default SideBar;
