import {IParam} from "./Paragraphs";

export const getNextParam = (param: IParam) => {
    const {page, to, from} = param;
    return {
        page: to === 100 ? page + 1 : page,
        from: from === 50 ? 0 : 50,
        to: to === 50 ? 100 : 50
    }
}