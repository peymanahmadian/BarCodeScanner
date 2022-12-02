import { useEffect, useState } from 'react';
import './App.css';
import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import ScanBill from './scanBill/ScanBill';

const App = () => {
  // const [state, setState] = useState("");
  // const onScanSuccess = (decodedText: string, decodedResult: string) => {
  //   setState(`code scanned is ${decodedText} and result is ${decodedResult}`)
  // }
  // let html5QrcodeScanner: any;
  // const start = () => {
  //   //@ts-ignore
  //   html5QrcodeScanner.render(onScanSuccess);
  //   html5QrcodeScanner.getState("SCANNING");
  // }
  // if (document.getElementById("qr-reader")) {
  //   //@ts-ignore
  //   html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 30, qrbox: { width: "100%", height: "100%" }, });
  //   start();

  // }
  // useEffect(() => {
  //   if (!("BarcodeDetector" in window)) {
  //     setState("Barcode Detector is not supported by this browser.");
  //   } else {
  //     setState("Barcode Detector supported!");


  //   }
  // }, []);



  return (
    <div className="App">
      {/* <div>
        Barcode scanner
        {state}
      </div>
      <div>
        <input value={"start"} type={"button"} onClick={() => start()} />

      </div>
      <div>
        <div id="qr-reader" style={{ width: "100vw" }}></div>

      </div> */}
      <ScanBill />

    </div>
  );
}

export default App;
