import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

interface ConfirmDialogProps {
  open: boolean
  title?: string
  message: string
  onClose: () => void
  onConfirm: () => void
  okTitle?: string
  cancelTitle?: string
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = (
  {
    open,
    title = 'Confirm',
    message,
    onClose,
    onConfirm,
    okTitle = 'Yes',
    cancelTitle = 'No'
  }: ConfirmDialogProps) => {
  return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="confirm-dialog"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{message}</DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={onClose}
            color="primary"
          >
            {cancelTitle}
          </Button>
          <Button
            variant="contained"
            onClick={onConfirm}
            color="primary"
          >
            {okTitle}
          </Button>
        </DialogActions>
      </Dialog>
  )
}
