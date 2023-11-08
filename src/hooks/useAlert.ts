import React from 'react'
import { AlertInterface } from '../types/alert';

export function useAlert() {
    
    const [alert, setAlert] = React.useState<AlertInterface>({showError:false,message:""});
    
    const handleClose = () => {
        setAlert({ ...alert,showError:false});
    }

    return {
      handleClose,alert,setAlert
    }
}
