export interface Response<R> {
    url: string;
    status: number;
    response: R;
}
