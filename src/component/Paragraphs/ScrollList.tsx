import React, {FC, memo, UIEvent, useMemo} from 'react';
import {Paper, Typography} from '@material-ui/core';

import {useStyles} from './style'

interface IListProps {
    paragraphs: IParagraph[],
    onScroll: () => void
}

interface IParagraph {
    id: string;
    text: string;
    page: string
}

const ScrollList: FC<IListProps> = (props) => {
    const {paragraphs, onScroll} = props;

    const handleScroll = (event: UIEvent) => {
        const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
        if (scrollTop + clientHeight >= scrollHeight) {
            onScroll()
        }
    };

    const classes = useStyles();

    const content = useMemo(() => paragraphs.map((par: IParagraph) => (
        <Paper data-testid={'scroll-element'} className={classes.paper} key={`${par.page}-${par.id}`}>
            <Typography data-testid={`test-id-${par.id}`}>
                {par.text}
            </Typography>
        </Paper>
    )), [paragraphs]);

    return (<div className={classes.wrapper} onScroll={handleScroll}>
        <ul>
            {content}
        </ul>
    </div>)
};

export default memo(ScrollList);