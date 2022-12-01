import { useRef, useState } from 'react';
import { BiCopy } from "react-icons/bi"

function ReadQrCode({ img }: { img: string }) {
    const [qrContent, setQrContent] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");
    const formData = useRef(new FormData());

    function fetchRequest() {
        fetch("http://api.qrserver.com/v1/read-qr-code/",
            {
                method: 'POST',
                body: formData.current
            })
            .then(res => res.json())
            .then(result => setQrContent(result[0]?.symbol[0]?.data))
            .catch((error) => {
                setQrContent(error);
            });
    }
    function onFileChange(e: any) {
        let file = e.target.files[0];
        if (!file)
            return;
        if (file.size > 2000) {
            setQrContent("Please upload file small than 2000kb!");
            return;
        }

        formData.current = new FormData();
        formData.current.append('file', file);
        setFileName(file.name);
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        fetchRequest();
    }
    const onCopy = () => {
        navigator.clipboard.writeText(qrContent);
    }
    return (
        <form onSubmit={onSubmit} className='form-flex'>
            <div className='flex-1 w-full'>
                <label className='cursor-pointer flex justify-center'>
                    <img src={img} className="h-[200px]" alt="" />
                    <input onChange={onFileChange} type="file" hidden />
                </label>
                <p className='text-center font-medium mb-5'>{fileName}</p>
                <label onClick={onCopy} className='relative cursor-pointer'>
                    <p className='overflow-y-scroll h-[120px] no-scroll'>{qrContent}</p>
                    <div className='absolute right-1 top-0 text-gray-600'><BiCopy size={25} /></div>
                </label>
            </div>
            <button className='btn'>Read</button>
        </form>
    )
}

export default ReadQrCode