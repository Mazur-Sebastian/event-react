import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

import { config } from 'config/appConfig';
import { StorageService } from 'common/services/StorageService';
import { Response } from 'common/models/httpModel';

export class HttpService {
    constructor(private readonly storageService: StorageService) {}

    public GET<R>(url: string): Observable<Response<R>> {
        return this.makeRequest('GET', url);
    }

    public PUT<B, R>(url: string, body: B): Observable<Response<R>> {
        return this.makeRequest('PUT', url, body);
    }

    public PATCH<B, R>(url: string, body: B): Observable<Response<R>> {
        return this.makeRequest('PATCH', url, body);
    }

    public POST<B, R>(url: string, body: B): Observable<Response<R>> {
        return this.makeRequest('POST', url, body);
    }

    public DELETE<R>(url: string): Observable<Response<R>> {
        return this.makeRequest('DELETE', url);
    }

    private makeRequest<B, R>(method: string, url: string, body?: B): Observable<Response<R>> {
        const bodyJSON = JSON.stringify(body);
        const token = this.storageService.getItem(config.authConfig.tokenField);
        const headers = {
            'Content-Type': 'application/json',
            Authorization: token ? `JWT ${token}` : null,
        };

        const options = {
            method,
            headers,
            body: bodyJSON,
        };

        const requestUrl = `${config.routeConfig.API_URL}${url}`;

        return ajax({ ...options, url: requestUrl }) as Observable<AjaxResponse & Response<R>>;
    }
}
