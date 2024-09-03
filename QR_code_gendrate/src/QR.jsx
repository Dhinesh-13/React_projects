import { useState } from 'react';
import './qr.css';

const QR = () => {
  const [img, setImg] = useState("");
  const [qrData, setQrData] = useState("");
  const [qrsize, setQrsize] = useState("");

  const generateQRCode = () => {
    if (qrData.trim() === "") {
      alert("Please enter some data to generate a QR code!");
      return;
    }
    setImg(`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrData)}`);
  };

  return (
    <div className="contain">
      <h1>QR Code Generator</h1>
      {img && <img src={img} alt="QR Code" className="img" />}
      
      <div className="input1">
        <label htmlFor="data">Enter the link</label>
        <input
          type="text"
          id="data"
          placeholder="Address of QR"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
        />
        <label htmlFor="size">Enter the Size</label>
        <input type="text" id="size" placeholder="Size of QR"value={qrsize}
          onChange={(e) => setQrsize(e.target.value)} />
      </div>
      <div>
        <button className="gen" onClick={generateQRCode}>GENERATE QR</button>
      
      </div>
    </div>
  );
}

export default QR;
