import React from 'react'

interface AlertInterface {
    showError: boolean
    message:string 
}

export function useAlert() {
    
    const [alert, setAlert] = React.useState<AlertInterface>({showError:false,message:""});
    
    const handleClose = () => {
        setAlert({ ...alert,showError:false});
    }

    return {
      handleClose,alert,setAlert
    }
}
