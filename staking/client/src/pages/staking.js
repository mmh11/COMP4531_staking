import StakeModel from '../components/StakeModel'
import TollIcon from '@mui/icons-material/Toll';
import { Button } from '@mui/material'
import { motion } from "framer-motion"

const Staking = props => {
  const muiButtonSX = {
    backgroundColor: "#ffffff",
    "&:hover": { 
        backgroundColor: "#ff9900",
    }
  }
  const buttonStyle = {
    maxWidth:"150px",
    color: "black",
    fontSize: "0.7VW",
    marginTop:"0.5VH",
    height: "50px",
    marginLeft: "1VW",
    marginRight: "1VW"
  }
  const buttonStyle2={
    width: "100%",
    height: "25px",
    lineHeight: "25px",
    fontSize: "12px",
    color: "#000000",
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#ff9900"
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div 
        style={{
          backgroundColor: "#fbfcfe",
          textAlign: "center",
          minHeight: "79vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginTop: "5%"
        }}>
        <div style={{height: "100%", marginTop: "80px"}}>
          <div style={{
              backgroundColor: "#6e00b3",
              width: "620px",
              height: "170px",
              margin: "0 auto",
              top: "50%",
              borderRadius: "14px",
              padding: "8px"}}>
            <div 
              style={{marginBottom: "20px"}}>
              <span>
                <img style={{
                    backgroundColor: "#ffffff", 
                    borderRadius: "100px",
                    marginRight: "14px", 
                    marginBottom: "14px",
                    width: "28px",
                    height: "28px"}} 
                  src={require("../images/Ethereum_logo_webp.webp")}
                />
              </span>
              <span style={{
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: 800}}>
                Ethereum Market APR
              </span>
            </div>

            <div style={{display:"inline-flex", whiteSpace:"pre"}}>
              <div>
                <div style={{display:"inline-flex", marginLeft:"10px"}}>
                  <Button 
                    disableRipple 
                    style={buttonStyle} 
                    sx={muiButtonSX}
                    onClick={() => props.openStakingModel(30, '5%')}>
                      <TollIcon />
                  </Button>
                  <div>
                    <p style={{color: "#ffffff", fontWeight: 700, marginBottom: 0}}>1 Month</p>
                    <p style={{display: "block", fontSize: "24px", fontWeight: "1000", color: "#ff9900"}}>5%</p>
                  </div>
                </div>
              </div>

              <div>
                <div style={{display:"inline-flex", marginLeft:"10px"}}>
                  <Button 
                    disableRipple 
                    style={buttonStyle} 
                    sx={muiButtonSX}
                    onClick={() => props.openStakingModel(90, '10%')}>
                      <TollIcon />
                  </Button>
                  <div>
                    <p style={{color: "#ffffff", fontWeight: 700, marginBottom: 0}}>3 Months</p>
                    <p style={{display: "block", fontSize: "24px", fontWeight: "1000", color: "#ff9900"}}>10%</p>
                  </div>
                </div>
              </div>

              <div>
                <div style={{display:"inline-flex", marginLeft:"10px"}}>
                  <Button 
                    disableRipple 
                    style={buttonStyle} 
                    sx={muiButtonSX}
                    onClick={() => props.openStakingModel(180, '20%')}>
                      <TollIcon />
                  </Button>
                  <div>
                    <p style={{color: "#ffffff", fontWeight: 700, marginBottom: 0}}>6 Months</p>
                    <p style={{display: "block", fontSize: "24px", fontWeight: "1000", color: "#ff9900"}}>20%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: "#6e00b3",
            width: "620px",
            minHeight: "225px",
            margin: "auto",
            top: "50%",
            borderRadius: "14px",
            padding: "6px",
            padding: "8px",
            marginTop: "50px",
            color: "#ffffff",
            fontWeight: 500}}>
            <h3>Staked Assets</h3>
            <br/>
            <div>
              <div style={{fontWeight: 800, color: "#ff9900", display:"inline-flex", alignItem: "center"}}>
                <div style={{marginRight:"20px"}}></div>
                <div style={{marginRight:"50px"}}>Assets</div>
                <div style={{marginRight:"50px"}}>APR</div>
                <div style={{marginRight:"50px"}}>Staked ETH</div>
                <div style={{marginRight:"50px"}}>Interest</div>
                <div style={{marginRight:"50px"}}>Remaining Days</div>
                <div style={{marginRight:"50px"}}></div>
              </div>
            </div>
            <br/>
            {props.assets.length > 0 && props.assets.map((a, idx) => (
              <div>
                <div style={{display: "inline-flex", width: "604px", whiteSpace:"nowrap"}}>
                <div style={{marginRight:"30px"}}></div>
                  <div style={{marginRight:"50px"}}>
                    <span>
                        <img style={{
                          backgroundColor: "#ffffff", 
                          borderRadius: "100px",
                          marginRight: "14px", 
                          marginBottom: "14px",
                          width: "28px",
                          height: "28px"}} 
                          src={require("../images/Ethereum_logo_webp.webp")}/>
                    </span>
                  </div>
                  <div style={{marginRight:"55px"}}>
                    {a.interest} %
                  </div>
                  <div style={{marginRight:"80px"}}>
                    {a.etherStaked}
                  </div>
                  <div style={{marginRight:"105px"}}>
                    {a.etherInterest}
                  </div>
                  <div style={{marginRight:"60px"}}>
                    {a.daysRemaining}
                  </div>
                  <div style={{marginRight:"0px"}}>
                    {a.start ? (
                      <div style={buttonStyle2} onClick={() => props.withdraw(a.posId)}>Withdraw</div>
                    ) : (
                      <span>closed</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {props.showStakeModel && (
          <StakeModel
            open={props.showStakeModel}
            onClose={() => props.setShowStakeModel(false)}
            stakingLength={props.stakingLength}
            stakingPercent={props.stakingPercent}
            amount={props.amount}
            setAmount={props.setAmount}
            stakeEther={props.stakeEther}
          />
        )}
      </div>
    </motion.div>
  );
}

export default Staking;
