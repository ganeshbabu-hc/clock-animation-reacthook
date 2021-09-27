import "./styles.css";

export default function Clock() {
  return (
    <div id="app">
      <div className="clock-container">
        <div className="clock">
          <div className="hor" id="hor">
            <div className="hr"></div>
          </div>
          <div className="min" id="min">
            <div className="mn"></div>
          </div>
          <div className="sec" id="sec">
            <div className="sc"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
