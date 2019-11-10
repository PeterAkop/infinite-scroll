import React, {FC, useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {Card, CardContent, CardHeader} from '@material-ui/core';

import {getContract as get, IContractRes} from '../../api/transport'
import Paragraphs from '../../component/Paragraphs'
import {history} from '../../App'
import {useStyles} from './style'

interface IСontractsProps extends RouteComponentProps<{ id: string }> {
    getContract?: (id: string) => Promise<IContractRes>;
}

const Contract: FC<IСontractsProps> = (props) => {
    const {match, getContract = get} = props;
    const [name, setName] = useState('');
    const [contractId, setContractId] = useState();

    useEffect(() => {
        getContract(match.params.id).then(
            ({data}) => {
                if (data.message) {
                    history.push(`/`);
                } else {
                    setName(data.name);
                    setContractId(match.params.id);
                }
            }
        );
    }, [match.params.id, getContract]);

    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardHeader
                title={<div data-testid={'test-id'}>{name}</div>}
            />
            <CardContent>
                {contractId && <Paragraphs id={contractId}/>}
            </CardContent>
        </Card>
    )
};

export default Contract;