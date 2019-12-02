import { createMuiTheme } from "@material-ui/core"
import { withStyles, makeStyles } from '@material-ui/core/styles';



export const darkTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#24292e'
        },
        type: 'dark'
    },
    typography: {
        button: {
            textTransform: 'capitalize'
        }
    },
    direction: 'rtl',
})