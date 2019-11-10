import React, {ChangeEvent, FC, useState} from 'react';
import {Button, Paper, TextField, Typography} from '@material-ui/core';

import {useStyles} from './style'
import {history} from '../../App'


const Main: FC = () => {
        const [id, setId] = useState<string>('');

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => setId(event.target.value);
        const handleClick = () => {
            history.push(`/contracts/${id}`);
        };

        const classes = useStyles();
        return (
            <Paper className={classes.paper}>
                <Typography
                    className={classes.title}
                    variant="h5"
                    component="h3"
                >
                    Enter contract id to view details
                </Typography>
                <TextField
                    id={'text-id'}
                    value={id}
                    onChange={handleChange}
                    label="Contract ID"
                    margin="normal"
                    variant="outlined"
                />
                <Button
                    disabled={id === ''}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                    View details
                </Button>
            </Paper>
        )
    }
;

export default Main;