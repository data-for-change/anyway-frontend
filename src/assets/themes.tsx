import { createMuiTheme } from "@material-ui/core"
import { withStyles, makeStyles } from '@material-ui/core/styles';



export const darkTheme = createMuiTheme({
    overrides: {
        MuiButton: {
            text: {
                paddingLeft: "20px",
                paddingRight: "20px"
            }
        }
    },
    palette: {
        primary: {
            main: '#24292e'
        },
        type: 'dark'
    },
    typography: {
        button: {
            textTransform: 'capitalize',
            fontSize: 16
        }
    },
    direction: 'rtl',
    spacing: 8
})