import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface ApiArt {
  description: string;
  title: string;
  artist_display: string;
  date_display: string;
  medium_display: string;
  dimensions: string;
  credit_line: string;
  place_of_origin: string;
  image_id: string;
}

function ArtInstituteOfChicago() {
  const [apisArt, setApisArt] = useState<ApiArt[]>([]);

  function fetchAPIsArt() {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((response) => response.json())
      .then((data) => {
        setApisArt(data.data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchAPIsArt();
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
          <Typography>Art Institute Of Chicago</Typography>
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
            href="https://api.artic.edu/docs/#quick-start"
            style={{ color: "orange" }}
          >
            https://api.artic.edu/docs/#quick-start
          </a>
        </Box>
      </Box>

      <Box
        sx={{
          height: "90%",
          width: "100%",
          overflow: "auto",
          p: { xs: 1, md: 5 },
        }}
      >
        <Typography sx={{ pb: 2 }}>Info: Artwork from the museum.</Typography>
        {apisArt.map((api, index) => (
          <Box key={index} sx={{ border: "solid 1px #0E181A", p: 1, mb: 1 }}>
            <Typography sx={{ pb: 1 }}>Title: {api.title}</Typography>
            <Typography sx={{ pb: 1 }}>
              Artist Display: {api.artist_display}
            </Typography>
            <Typography sx={{ pb: 1 }}>
              Display Date: {api.date_display}
            </Typography>
            <Typography sx={{ pb: 1 }}>Medium: {api.medium_display}</Typography>
            <Typography sx={{ pb: 1 }}>Dimensions: {api.dimensions}</Typography>
            <Typography sx={{ pb: 1 }}>
              Credit Line: {api.credit_line}
            </Typography>
            <Typography sx={{ pb: 1 }}>
              Place of Origin: {api.place_of_origin}
            </Typography>
            <Typography sx={{ pb: 1 }}>
              Description:
              <div dangerouslySetInnerHTML={{ __html: api.description }} />
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ArtInstituteOfChicago;
