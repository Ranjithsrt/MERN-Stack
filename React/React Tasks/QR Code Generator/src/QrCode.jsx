import { useState } from "react";
const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  //    const [qrData, setQrData] = useState("Ranjith");
  const [qrData, setQrData] = useState("https://google.com");
  const [qrSize, setQrSize] = useState(150);

  /*
    const generateQR = () => {
        alert("QR Code Generated")
    }

    const downloadQR = (name) => {
        alert("Welcome " + name)
    }
    */

  const generateQR = async () => {
    setLoading(true);
    try {
      // const url ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://google.com";
      //  const url =
      //    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}`;
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
        qrData
      )}`;
      setImg(url);
    } catch (error) {
      console.error("Error generating QR Code:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadQR = () => {
    fetch(img)
      // blob() -`binary large object - returns a promise that resolves to a Blob object representing the data in the response body.`
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qr-code.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading QR Code:", error);
      });
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };
  return (
    <div className="app-container">
      <h1>QR Code Generator</h1>

      {/* <img src="" alt="" className='qr-code-image' id="qrCodeImage"  onMouseEnter={()=>downloadQR("Ranjith")} /> */}

      {loading && <p>Loading QR Code...</p>}
      {img && <img src={img} alt="" className="qr-code-image" />}

      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR Code :
        </label>
        <input
          type="text"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
          id="dataInput"
          placeholder="Enter Data for QR Code"
        />
        <label htmlFor="sizeInput" className="input-label">
          Image Size (e.g..,150) :
        </label>
        <input
          type="text"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
          id="sizeInput"
          placeholder="Enter Image Size"
        />

        {/*
        
        <button className="generate-button" onClick={generateQR}>
          Generate QR Code
        </button>
        <button
          className="downlod-button"
          onClick={() => downloadQR("Abhishek")}
        >
          Download QR Code
        </button>

        */}

        <button
          className="generate-button"
          disabled={loading}
          onClick={generateQR}
        >
          Generate QR Code
        </button>

        <button className="downlod-button" onClick={downloadQR}>
          Download QR Code
        </button>
      </div>
      <p>
        Created by: <a href="https://github.com/Abhishek-2000">Abhishek</a>
      </p>
    </div>
  );
};

export default QrCode;
