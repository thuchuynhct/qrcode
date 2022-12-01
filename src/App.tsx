import { useState } from "react";
import CreateQrCode from "./components/CreateQrCode";
import DowloadQrCode from "./components/DowloadQrCode";
import ReadQrCode from "./components/ReadQrCode";

function App() {
  const [pageNumber, setPageNumber] = useState<number>(0)
  const [qrLink, setQrLink] = useState<string>("https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld")
  return (
    <div className="w-[400px] h-[600px] p-5 rounded-2xl bg-white">
      <div className="h-full flex flex-col overflow-hidden">
        <div className="">
          <div className="grid grid-cols-2">
            <button onClick={() => setPageNumber(0)} className="btn-white">Read</button>
            <button onClick={() => setPageNumber(1)} className="btn-white">Create</button>
          </div>
          <div className={`h-2 bg-second w-[40%] ${pageNumber === 0 ? "translate-x-[10%]" : "translate-x-[135%]" } rounded-xl transition-all duration-300 ease-linear`}></div>
        </div>
        <div className={`flex-1 w-[300%] grid grid-cols-3 ${pageNumber === 1 ? "-translate-x-[33%]" : pageNumber === 2 ? "-translate-x-[67%]" : ""} transition-all duration-300 ease-linear`}>
          <ReadQrCode img={qrLink} />
          <CreateQrCode setQrLink={setQrLink} setIsRead={setPageNumber} />
          {/* <QrCode img={img} /> */}
          <DowloadQrCode qrLink={qrLink} />
        </div>
      </div>
    </div >
  )
}

export default App;
