import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            margin: 'auto',
            marginTop: '10%',
            width: '60%'
        },
        title: {
            textAlign: 'center'
        },
        button: {
            margin: 'auto'
        }
    }),
);