import React, {FC, memo, useEffect, useState} from 'react';
import ScrollList from './ScrollList'
import {getNextParam} from './utilities'

import {getParagraphs as get, IParagraph, IParagraphsRes} from '../../api/transport'


interface IContainer {
    getParagraphs?: (id: string, page: number, from: number, to: number) => Promise<IParagraphsRes>;
    id: string
}

export interface IParam {
    page: number;
    from: number;
    to: number;
}

const Paragraphs: FC<IContainer> = (props) => {
    const {getParagraphs = get, id} = props;
    const [param, setParam] = useState<IParam>({page: 1, from: 0, to: 50});
    const [paragraphs, setParagraphs] = useState<IParagraph[]>([]);

    useEffect(() => {
        getParagraphs(id, param.page, param.from, param.to).then(
            ({data}) => {
                setParagraphs([...paragraphs, ...data.paragraphs]);
            }
        );
    }, [param]);

    const onScroll = () => {
        setParam(getNextParam(param))
    };

    return (<ScrollList paragraphs={paragraphs} onScroll={onScroll}/>)

};


export default memo(Paragraphs);