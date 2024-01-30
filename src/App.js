import React, { useState } from "react";
import { BiMessageAlt, BiSolidMessageAlt } from "react-icons/bi";
import { LuPointer } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { GoDot, GoDotFill } from "react-icons/go";

const SliderComponent = ({ value, low, high, currentValue, avgValue }) => {
  return (
    <div>
      <div>
        <h1 style={{
          display: "flex",
          justifyContent: "flex-start",
          alightItems: "flex-end"
        }}>Recommendation Rating <IoIosArrowForward /></h1>
        <div
          style={{
            borderBottom: "solid grey 2px",
            display: "flex",
            justifyContent: "flex-start",
            alightItems: "center",
            margin: "0 60px",
          }}
        >
          <div
            style={{
              marginLeft: `${value === 5 ? "100%" : (value - 1) * 23}%`,
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: 'relative'
            }}
          >
            <BiSolidMessageAlt color="#00c073" style={{ fontSize: '42px' }} />
            <span style={{ position: 'absolute', top: 0, color: "white", fontWeight: 700, height: '35px', display: 'flex', justifyContent: "center", alignItems: "center", }}>{value}</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            // margin: "0 60px",
          }}
        >
          <h3 style={{ width: "20%", padding: 0, margin: 0 }}>
            <div style={{ position: 'relative', bottom: '15px' }}>|</div>
            <div>1 <br />
              Strong Buy</div>
          </h3>
          <h3 style={{ width: "20%", padding: 0, margin: 0 }}>
            <div style={{ position: 'relative', bottom: '15px' }}>|</div>
            <div>2 <br />
              Buy</div>
          </h3>
          <h3 style={{ width: "20%", padding: 0, margin: 0 }}>
            <div style={{ position: 'relative', bottom: '15px' }}>|</div>
            <div>3 <br />
              Hold</div>
          </h3>
          <h3 style={{ width: "20%", padding: 0, margin: 0 }}>
            <div style={{ position: 'relative', bottom: '15px' }}>|</div>
            <div>4 <br />
              Under-perform</div>
          </h3>
          <h3 style={{ width: "20%", padding: 0, margin: 0 }}>
            <div style={{ position: 'relative', bottom: '15px' }}>|</div>
            <div>5 <br />
              Sell</div>
          </h3>
        </div>
      </div>

      <div>
        <h1 style={{
          display: "flex",
          justifyContent: "flex-start",
          alightItems: "flex-end"
        }}> Analyst Price Targets <IoIosArrowForward /> </h1>

        <div>
          <div>
            {/* <div style="position: relative; width: 200px; height: 200px; border: 2px solid black; overflow: hidden;">
              <div style="position: absolute; top: -10px; left: -10px; width: 20px; height: 20px; background-color: black; transform: rotate(45deg);"></div>
              <div style="position: absolute; top: -10px; right: -10px; width: 20px; height: 20px; background-color: black; transform: rotate(45deg);"></div>
            </div> */}

            <div
              style={{
                borderBottom: "solid grey 2px",
                display: "flex",
                justifyContent: "flex-start",
                margin: "0 60px",
              }}
            >
              <div
                style={{
                  marginLeft: `${currentValue === 350
                    ? "88"
                    : ((currentValue - low) / (high - low)) * 100 - 8
                    }%`,
                  height: "fit-content",
                  width: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: 'relative',
                  top: '75px'
                }}
              >
                <span
                  style={{
                    margin: "auto",
                    marginTop: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div><GoDotFill color="blue" style={{ margin: 0, padding: 0 }} /></div>
                  <div style={{ color: "blue", fontWeight: 700, fontSize: '35px', position: 'relative', bottom: '18px', margin: 0, padding: 0 }}>|</div>
                </span>
                <p
                  style={{
                    fontWeight: 600,
                    padding: "0px 6px",
                    margin: 0,
                    color: "blue",
                    // width: "90px",
                  }}
                >
                  Current: {currentValue}
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  marginLeft: `${avgValue === 350
                    ? "88"
                    : ((avgValue - low) / (high - low)) * 100 - 8
                    }%`,
                  height: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{position: 'relative', top: '15px'}}>
                <p
                  style={{
                    color: "black",
                    fontWeight: 600,
                    padding: "0px 6px",
                    margin: 0,
                  }}
                >
                  Average: {avgValue}
                </p>
                <span
                  style={{
                    margin: "auto",
                    marginTop: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ color: "black", fontWeight: 700, fontSize: '35px', position: 'relative', top: '7px', margin: 0, padding: 0 }}>|</div>
                  <div><GoDot color="black" style={{ margin: 0, padding: 0 }} /></div>
                </span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: 0,
              padding: "1rem"
            }}
          >
            <p>Low: {low}</p>
            <p>High: {high}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [val, setVal] = useState(2.8);

  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          margin: "auto",
        }}
      >
        <SliderComponent
          value={2.8}
          low={22.44}
          high={318.16}
          currentValue={192.22}
          avgValue={196.00}
        />
      </div>
    </div>
  );
}
