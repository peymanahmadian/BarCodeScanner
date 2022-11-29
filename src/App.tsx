import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    if (!("BarcodeDetector" in window)) {
      setState("Barcode Detector is not supported by this browser.");
    } else {
      setState("Barcode Detector supported!");
    }
  }, []);
  return (
    <div className="App">
      Barcode scanner
      {state}
    </div>
  );
}

export default App;
