import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(3, 2),
            margin: 'auto',
            marginTop: '10%',
            width: '50%',
            display: 'flex',
            flexDirection: 'column'
        },
        title: {
            textAlign: 'center'
        },
        button: {
            margin: 'auto'
        }
    }),
);