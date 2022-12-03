import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useState } from "react";
const ScanBill = () => {
  const [text, setText] = useState("---");
  useEffect(() => {
    let cameraFront = new Html5Qrcode("qr-reader");
    cameraFront
      .start(
        { facingMode: { exact: "environment" } },
        {
          fps: 10, // Optional, frame per seconds for qr code scanning
          qrbox: { width: 80, height: 80 },
        },
        (decodedText: string, decodedResult: any) => {
          // do something when code is read
          let res: string = decodedResult?.decodedText as string;
          setText(res);
        },
        (errorMessage) => {}
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "red" }}>
      <div>{text}</div>
      <div id="qr-reader" style={{ width: "100vw", height: "100vh" }}></div>
    </div>
  );
};
export default ScanBill;
