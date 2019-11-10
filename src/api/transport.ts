import axios from 'axios';

const transport = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 1000
});

export interface IContractRes {
    data: {
        name: string;
        message?: string;
    }
}

export interface IParagraph {
    id: string;
    text: string;
    page: string
}

export interface IParagraphsRes {
    data: { paragraphs: IParagraph[] }
}

export const getContract = (id: string): Promise<IContractRes> => transport.get(`/contract/${id}`);

export const getParagraphs = (id: string, page: number, from: number, to: number): Promise<IParagraphsRes> =>
    transport.get(`/paragraphs/${id}?page=${page}&from=${from}&to=${to}`);
