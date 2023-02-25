import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ImageSwiper from "./ImageSwiper";
import "./box4.scss";


function box4() {
  return (
    <div id="box4">
      <Box>
        <p style={{ textAlign: "center", margin: "20px" }}>
          Stader TVL &nbsp; &nbsp; &nbsp; <strong>$ 130,620,897</strong>
        </p>
        <Divider />
        <div className="space-between">
          <p style={{ width: "10em" }}>Earn ~49% with our Max Yield Strategy</p>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#f3ba2f",
              color: "black",
              height: "6vh",
            }}
          >
            Know More
          </Button>
        </div>
        <ImageSwiper/>
      </Box>
    </div>
  );
}

export default box4;
