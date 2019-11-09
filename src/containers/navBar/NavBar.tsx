import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { darkTheme } from "../../assets/themes";
import { Link, useHistory } from "react-router-dom";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import { log } from 'util';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const styles = () => ({
    buttonPadding: {
        padding: '30px',
    },
});

const NavBar = () => {
    const history = useHistory();
    const handleClick = (e: any) => {
        history.push(`${e.currentTarget.value}`)
    }
    return (
        <div>
            {/* Apply rtl by setting jss={jss} */}
            <StylesProvider jss={jss}>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h4" >
                                <Button onClick={handleClick} value='map'>
                                    Map
                                    </Button>
                            </Typography>
                            <Typography variant="h4" >
                                <Button onClick={handleClick} value='vision-zero'>
                                    Vision Zero
                                    </Button>
                            </Typography>
                            <Typography variant="h4" >
                                <Button onClick={handleClick} value='about'>
                                    About
                                    </Button>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </StylesProvider>
        </div>
    )
}

export default NavBar
