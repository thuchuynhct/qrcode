import { useRef } from "react";

function CreateQrCode({ setQrLink, setIsRead }: { setQrLink: any, setIsRead: any }) {
    const contentQrCode = useRef("");

    const onSubmit = (e: any) => {
        e.preventDefault();
        const url = "http://api.qrserver.com/v1/create-qr-code/";
        setQrLink(url + "?data=" + contentQrCode.current)
        setIsRead(2);
    }
    return (
        <form onSubmit={onSubmit} className='form-flex'>
            <div className='flex-1 w-full'>
                <textarea
                    required
                    onChange={(e) => contentQrCode.current = e.target.value}
                    className='h-[50%] w-[98%] p-2 text-lg border-solid border-2 outline-second border-second' />
            </div>
            <button className="btn">Create</button>
        </form>
    )
}

export default CreateQrCode