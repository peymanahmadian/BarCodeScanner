import { useEffect, useState } from 'react';
import './App.css';
import { Html5QrcodeScanner } from "html5-qrcode";
const App = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    if (!("BarcodeDetector" in window)) {
      setState("Barcode Detector is not supported by this browser.");
    } else {
      setState("Barcode Detector supported!");
    }
  }, []);
  const onScanSuccess = (decodedText: string, decodedResult: string) => {
    setState(`code scanned is ${decodedText} and result is ${decodedResult}`)
  }
  //@ts-ignore
  const html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 30, qrbox: 250 });
  //@ts-ignore
  html5QrcodeScanner.render(onScanSuccess);
  return (
    <div className="App">
      Barcode scanner
      {state}
      <div id="qr-reader" style={{ width: "600px" }}></div>

    </div>
  );
}

export default App;
