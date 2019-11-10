import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(3, 2),
            margin: 'inherit'
        },
        wrapper: {
            height: 400,
            overflow: 'auto'
        },
        button: {
            margin: 'auto'
        }
    }),
);