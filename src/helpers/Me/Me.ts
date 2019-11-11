import { Injectable } from '@angular/core';
import Api from '../Api/Api';
import {AppComponent} from '../../app/app.component';
export interface UserInterface {
    id: number;
    profile: number;
    login: string;
    password: string;
}

const CACHE_NAME = 'teste.user';

@Injectable()
export default class Me {


    get(): Promise<UserInterface | null>{
        return new Promise(async resolve => {
            const cache = await localStorage.getItem(CACHE_NAME);

            if(cache){
                try{
                    const user = JSON.parse(cache);
                    resolve(user);
                }catch (e) {
                    resolve(null);
                }
            }else{
                resolve(null);
            }
        });
    }

    get logged(): Promise<boolean>{
        const self = this;
        return new Promise(async resolve => {
            const cache = await localStorage.getItem(CACHE_NAME);

            if(cache){
                try{
                    const user = JSON.parse(cache);
                    resolve("id" in user);
                }catch (e) {
                    resolve(false);
                }
            }else{
                resolve(false);
            }
        });
    }

    get token(): Promise<string | null>{
        const self = this;
        return new Promise(async resolve => {
            const cache = await localStorage.getItem(CACHE_NAME + "_token");

            if(cache){
                resolve(cache);
            }else{
                resolve(null);
            }
        });
    }

    async logout(){
        return await localStorage.removeItem(CACHE_NAME);
    }

    //
    // async get(args ?: any, callback ?: Callback): Promise<UserInterface | null>{
    //     const self = this;
    //     const response = await self.api.get(self.LINK);
    //
    //     if(!response.success){
    //         return null;
    //     }
    //
    //     self.cache = response.return;
    //     await localStorage.setItem(CACHE_NAME, JSON.stringify(response.return));
    //
    //     if(callback){
    //         callback(response.return)
    //     }
    //
    //     return response.return;
    // }

    async setData(data){
        return await localStorage.setItem(CACHE_NAME, JSON.stringify(data));
    }

    async setToken(token){
        return await localStorage.setItem(CACHE_NAME + '_token', JSON.stringify(token));
    }
}
