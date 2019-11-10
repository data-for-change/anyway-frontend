import React from 'react';
import { AppBar, Paper, Tabs, Tab, withStyles } from '@material-ui/core/';
import { darkTheme } from "../../assets/themes";
import { useHistory } from "react-router-dom";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, makeStyles, Theme, ThemeProvider, createStyles } from '@material-ui/core/styles';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const routerList = [
    { text: 'Map', route: 'map' },
    { text: 'Vision Zero', route: 'vision-zero' },
    { text: 'About', route: 'about' },
]

interface StyledTabProps {
    label: string;
}

const StyledTab = withStyles((theme: Theme) =>
    createStyles({
        root: {
            textTransform: 'none',
            color: '#fff',
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: theme.typography.pxToRem(15),
            marginRight: theme.spacing(1),
            '&:focus': {
                opacity: 1,
            },
        },
    }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const NavBar = () => {

    const history = useHistory();
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        history.push(`${routerList[newValue].route}`)
        setValue(newValue);
    };

    return (
        //Apply RTL by setting dir='rtl'
        <div>
            <StylesProvider jss={jss}>
                <ThemeProvider theme={darkTheme}>
                    <AppBar position="static">
                        <Paper >
                            <Tabs
                                TabIndicatorProps={{ style: { backgroundColor: "white" } }}
                                value={value}
                                onChange={handleChange}>

                                {routerList.map((map, index) => <StyledTab label={map.text} />)}
                            </Tabs>
                        </Paper>
                    </AppBar>
                </ThemeProvider>
            </StylesProvider>
        </div>
    )
}

export default NavBar