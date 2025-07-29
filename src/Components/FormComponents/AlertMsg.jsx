import { Alert, Snackbar } from '@mui/material';

/**
 * Props:
 *  - open: boolean           // whether it’s visible
 *  - onClose: () => void     // called when user clicks close or timeout
 *  - severity: 'success' | 'error' | 'warning' | 'info'
 *  - title?: string          // optional bold title above the message
 *  - children: ReactNode     // the message body
 *  - autoHideDuration?: number // ms before auto‑dismiss (default 4000)
 */
const AlertMsg = ({
    open,
    onClose,
    severity,
    title,
    children,
    autoHideDuration = 10000,
}) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert
                onClose={onClose}
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {title && <strong className='mr-1'>{title}</strong>}
                {children}
            </Alert>
        </Snackbar>
    );
};

export default AlertMsg;
