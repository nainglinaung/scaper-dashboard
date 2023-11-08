import React, { useRef } from 'react'
import { AlertInterface } from '../types/alert';
import AlertComponent from './Alert'


interface FileInputProps {
    OnFileUpload: (data: FormData) => void
    alert: AlertInterface
    handleClose:() => void
}


function FileInput({ OnFileUpload,alert,handleClose }: FileInputProps) {

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (fileInputRef.current) {
            const selectedFile = fileInputRef.current.files?.[0];
            if (selectedFile) {
                const formData = new FormData();
                formData.append('file', selectedFile);
                OnFileUpload(formData)
            }
        }
    };

    return (
        <div className="w-1/2 mx-auto mt-10">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileInput">
                        Upload CSV
                    </label>
                    <input
                        ref={fileInputRef}
                        id="fileInput"
                        type="file"
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button id='upload'
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Upload
                    </button>
                </div>
                {alert.showError && < AlertComponent message={ alert.message } handleClose={ handleClose } />}
            </form>
        </div>
    );
}

export default FileInput