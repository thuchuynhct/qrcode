import FileSaver from "file-saver"

function DowloadQrCode({ qrLink }: { qrLink: string }) {
    const downloadImage = (e: any) => {
        e.preventDefault();
        FileSaver.saveAs(qrLink, `qrcode-${Math.random()}.png`);
    }
    return (
        <form onSubmit={downloadImage} className='form-flex'>
            <div className='flex-1'>
                <img src={qrLink} className="h-[200px]" alt="" />
            </div>
            <button type="submit" className='btn cursor-pointer'>Download</button>
        </form>
    )
}

export default DowloadQrCode