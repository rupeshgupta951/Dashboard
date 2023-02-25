import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./box3.scss";

function Box3() {
  const [value, setValue] = useState("1");
  const [amount, setAmount] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const inputRef = useRef();

  const handleAmount = (e) => {
    let a = e.target.value;
    setAmount(a * 0.9486)
    setAmount2(a * 1.0541)
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box id="box3">
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            textColor="black"
            centered
            variant="fullWidth"
            
          >
            <Tab label="Stake" value="1" fontWeight= 'bold' />
            <Tab label="Unstake" value="2" fontWeight= 'bold' />
            <Tab label="Withdraw" value="3" fontWeight= 'bold' />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <div class="space-between">
              <p>My BNB: 0</p>
              <p>My BNBx: 0</p>
            </div>
            <div id="amount">
              <input
                ref={inputRef}
                type="number"
                onChange={handleAmount}
                placeholder="Enter BNB Amount"
                style={{
                  width: "80%",
                  border: "none",
                  height: "40px",
                  paddingLeft: "15px",
                }}
              />
              <span>Max</span>
            </div>
            <p id="p1">You will get : <strong>{amount}</strong> BNBx</p>
            <p id="p2">Connect your wallet now to start staking</p>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
              class="fullwidth"
            >
              Connect Wallet
            </Button>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div>
            <div class="space-between">
              <p>Available Balance : 0 BNBx</p>
            </div>
            <div id="amount">
              <input
                ref={inputRef}
                type="number"
                placeholder="Enter BNBx Amount"
                onChange={handleAmount}
                style={{
                  width: "80%",
                  border: "none",
                  height: "40px",
                  paddingLeft: "15px",
                }}
              />
              <span>Max</span>
            </div>
            <p id="p1">You will get : <strong>{amount2}</strong>  BNB</p>
            <p id="p3">
              Please Approve Unstaking using the button below to activate
              unstaking
            </p>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
              class="fullwidth"
            >
              Connect Wallet
            </Button>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <p id="p4">
            You will be able to withdraw your tokens after the withdraw request
            has been processed. To <strong>unstake </strong>your amount go to
            Unstake Tab.
          </p>
          <p
            style={{
              textAlign: "center",
              verticalAlign: "center",
              marginTop: "30px",
            }}
          >
            No Claims Found
          </p>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Box3;
