import { useEffect, useState } from 'react';
import './App.css';
import { Html5QrcodeScanner } from "html5-qrcode";
const App = () => {
  const [state, setState] = useState("");
  let html5QrcodeScanner: any;
  if (document.getElementById("qr-reader")) {
    //@ts-ignore
    html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 30, qrbox: 250 });
  }
  useEffect(() => {
    if (!("BarcodeDetector" in window)) {
      setState("Barcode Detector is not supported by this browser.");
    } else {
      setState("Barcode Detector supported!");
    }
  }, []);
  const start = () => {
    debugger;
    //@ts-ignore
    html5QrcodeScanner.render(onScanSuccess);
  }
  const onScanSuccess = (decodedText: string, decodedResult: string) => {
    debugger;
    setState(`code scanned is ${decodedText} and result is ${decodedResult}`)
  }

  return (
    <div className="App">
      <div>
        Barcode scanner
        {state}
      </div>
      <div>
        <input value={"start"} type={"button"} onClick={() => start()} />

      </div>
      <div>
        <div id="qr-reader" style={{ width: "100vw" }}></div>

      </div>

    </div>
  );
}

export default App;
