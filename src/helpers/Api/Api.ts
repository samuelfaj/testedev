import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { retry, timeout } from 'rxjs/operators';

import App from '../App/App';
import Me from '../Me/Me';

export const link = 'https://hapi.meuvesti.com/api/appcompras/';
export type Callback = (response: Response) => void;

export interface ResponseInterface {
    readonly api;
    readonly result : {
        success: boolean;
        message: string;
        messages: any
    }
}

@Injectable()
export default class Base {
    url = 'https://hapi.meuvesti.com/api/appcompras/';

    public development = false;

    constructor(
        readonly app: App,
        readonly http: HttpClient,
        readonly me: Me
    ) {
        const self = this;

        if(self.url.indexOf('localhost') > -1){
            self.development = true;
        }else{
            self.url = link;
        }
    }

    public new() {
        return new Api(this);
    }
}

class Api {
    public retry = 5;
    public timeout = 60 * 1000;

    public log = false;
    public cache = true;
    public error = true;
    public exception = true;
    public loader: any = true;

    private headers: HttpHeaders;

    constructor(private base: Base) {}

    public set(field: 'log' | 'cache' | 'error' | 'loader' | 'exception', value: boolean) {
        this[field] = value;
        return this;
    }

    public silentMode(bool = true){
        const self = this;

        if(bool){
            self.error = false;
            self.exception = false;
            self.loader = false;
        }else{
            self.error = true;
            self.exception = true;
            self.loader = true;
        }

        return this;
    }

    public async get(url, args?: any, callback ?: (response: Response, cached: boolean) => void): Promise<Response> {
        const self = this;
        const response = new Response();

        if (self.loader) {
            self.loader = self.base.app.new.loader();
            self.loader.show();
        }

        return new Promise(async (resolve: Callback, reject) => {
            await self.setHeaders();

            const cache = {
                name: 'cache-' + self.base.url + url + JSON.stringify(args),
                data: null
            };

            self.base.http
                .get(self.base.url + url, { headers: self.headers, params: args || {} })
                .pipe(retry(self.retry))
                .pipe(timeout(self.timeout))
                .subscribe(
                    (data: Response) => {
                        for (const item in data) {
                            response[item] = data[item];
                            response.data[item] = data[item];
                        }

                        if (self.log) {
                            console.log('app/helpers/Api/Api/post', response, this);
                        }

                        if (self.loader) {
                            self.loader.dismiss();
                        }


                        if (callback && data !== cache.data) {
                            callback(response, false);
                        }

                        if (response.error === false) {
                            resolve(response);
                        } else {
                            if (self.error) {
                                self.error_alert(data);
                            }

                            if (self.exception) {
                                reject(response);
                            } else {
                                resolve(response);
                            }
                        }
                    },
                    (error) => {
                        if(error.error){
                            for (const item in error.error) {
                                response[item] = error.error[item];
                                response.data[item] = error.error[item];
                            }
                        }

                        console.error('app/helpers/Api/Api/get', error, this);

                        if (callback && error !== cache.data) {
                            callback(response, false);
                        }

                        if (self.error) {
                            self.error_alert(response);
                        }

                        if (self.loader) {
                            self.loader.dismiss();
                        }

                        if (self.exception) {
                            reject(response);
                        } else {
                            resolve(response);
                        }
                    }
                );
        });

    }
    public async post(url: string, args: {[a: string]: any}, commaToFloat = true): Promise<Response> {
        const self = this;
        const response = new Response();

        args = Object.assign({}, args);

        if (self.loader) {
            self.loader = self.base.app.new.loader();
            self.loader.show();
        }

        if(commaToFloat){
            for(let item in args){
                let value = args[item];
                if(typeof args[item] === 'string'){
                    const isValid = /^[0-9,.]*$/.test(args[item]);
                    if(isValid){
                        value = value.replace(".", "");
                        value = value.replace(",", ".");
                        args[item] = parseFloat(value);
                    }
                }
            }
        }

        return new Promise<Response>(async (resolve, reject) => {
            await self.setHeaders();

            self.base.http
                .post(self.base.url + url, args, { headers: self.headers })
                .pipe(retry(self.retry))
                .pipe(timeout(self.timeout))
                .subscribe(
                    (data: Response) => {
                        for (const item in data) {
                            response[item] = data[item];
                            response.data[item] = data[item];
                        }

                        if (self.log) {
                            console.log('app/helpers/Api/Api/post', response, this);
                        }

                        if (self.loader) {
                            self.loader.dismiss();
                        }


                        if (response.error === true) {
                            if (self.error) {
                                self.error_alert(data);
                            }

                            if (self.exception) {
                                reject(response);
                            } else {
                                resolve(response);
                            }
                        } else {
                            resolve(response);
                        }
                    },
                    (error: any) => {
                        if(error.error){
                            for (const item in error.error) {
                                response[item] = error.error[item];
                                response.data[item] = error.error[item];
                            }
                        }

                        console.error('app/helpers/Api/Api/post', error, response, this);

                        if (self.error) {
                            self.error_alert(response);
                        }

                        if (self.loader) {
                            self.loader.dismiss();
                        }

                        if (self.exception) {
                            reject(response);
                        } else {
                            resolve(response);
                        }
                    }
                );
        });
    }
    public async put(url: string, args: {[a: string]: any}, commaToFloat = true): Promise<Response> {
        const self = this;
        const response = new Response();

        args = Object.assign({}, args);

        if (self.loader) {
            self.loader = self.base.app.new.loader();
            self.loader.show();
        }

        if(commaToFloat){
            for(let item in args){
                let value = args[item];
                if(typeof args[item] === 'string'){
                    const isValid = /^[0-9,.]*$/.test(args[item]);
                    if(isValid){
                        value = value.replace(".", "");
                        value = value.replace(",", ".");
                        args[item] = parseFloat(value);
                    }
                }
            }
        }

        return new Promise<Response>(async (resolve, reject) => {
            await self.setHeaders();

            self.base.http
                .put(self.base.url + url, args, { headers: self.headers })
                .pipe(retry(self.retry))
                .pipe(timeout(self.timeout))
                .subscribe(
                    (data: Response) => {
                        for (const item in data) {
                            response[item] = data[item];
                            response.data[item] = data[item];
                        }

                        if (self.log) {
                            console.log('app/helpers/Api/Api/post', response, this);
                        }

                        if (self.loader) {
                            self.loader.dismiss();
                        }

                        if (response.error === true) {
                            if (self.error) {
                                self.error_alert(data);
                            }

                            if (self.exception) {
                                reject(response);
                            } else {
                                resolve(response);
                            }
                        } else {
                            resolve(response);
                        }
                    },
                    (error) => {
                        if(error.error){
                            for (const item in error.error) {
                                response[item] = error.error[item];
                                response.data[item] = error.error[item];
                            }
                        }

                        console.error('app/helpers/Api/Api/put', error, response, this);

                        if (self.error) {
                            self.error_alert(response);
                        }

                        if (self.loader) {
                            self.loader.dismiss();
                        }

                        if (self.exception) {
                            reject(response);
                        } else {
                            resolve(response);
                        }
                    }
                );
        });
    }
    public async delete(url: string): Promise<Response> {
        const self = this;
        const response = new Response();

        if (self.loader) {
            self.loader = self.base.app.new.loader();
            self.loader.show();
        }

        return new Promise<Response>(async (resolve, reject) => {
            await self.setHeaders();

            self.base.http
                .delete(self.base.url + url, { headers: self.headers })
                .pipe(retry(self.retry))
                .pipe(timeout(self.timeout))
                .subscribe(
                    (data: Response) => {
                        for (const item in data) {
                            response[item] = data[item];
                            response.data[item] = data[item];
                        }

                        if (self.log) {
                            console.log('app/helpers/Api/Api/post', response, this);
                        }

                        if (self.loader) {
                            self.loader.dismiss();
                        }

                        resolve(response);

                        if (response.error === true) {
                            if (self.error) {
                                self.error_alert(data);
                            }

                            if (self.exception) {
                                reject(response);
                            } else {
                                resolve(response);
                            }
                        } else {
                            resolve(response);
                        }
                    },
                    (error) => {
                        if(error.error){
                            for (const item in error.error) {
                                response[item] = error.error[item];
                                response.data[item] = error.error[item];
                            }
                        }

                        console.error('app/helpers/Api/Api/delete', error, response, this);

                        if (self.error) {
                            self.error_alert(response);
                        }

                        if (self.loader) {
                            self.loader.dismiss();
                        }

                        if (self.exception) {
                            reject(response);
                        } else {
                            resolve(response);
                        }
                    }
                );
        });
    }

    private async setHeaders() {
        const self = this;
        const token = await this.base.me.token;


        self.headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        if (token !== null) {
            console.log('token', token);
            self.headers = new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.substr(1, token.length - 2)
            });
        }
    }
    private async error_alert(data: Response) {
        return await this.base.app.new.alert(
            'Erro',
            data.result.message || 'Erro de comunicação com o servidor'
        );
    }
}

export class Response{
    public readonly api: any = {};
    result = {
        success: false,
        message: '',
        messages: ''
    };

    public data: any = {};

    public get success(){
        return (this.result.success == true);
    }
    public get error(){
        return (this.result.success == false);
    }
}
