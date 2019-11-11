import {AppComponent} from '../app/app.component';
import {ActivatedRoute, Router} from '@angular/router';

export class DefaultBase {
    protected PAGE_STATUSBAR = '#14263e';

    protected params: any = {};
    protected query: any = {};
    protected sub = null;

    protected caches: {[a: string] : any} = {};
    protected cache_items = [];

    constructor(protected app: AppComponent, protected route: ActivatedRoute, protected router: Router) {
        const self = this;

        self.route.queryParams.subscribe(params => {
            self.params = params || {};
        });

        self.sub = self.route.params.subscribe(params => {
            self.query = params;
        });
    }

    protected get api(){
        return this.app.api.new();
    }

    protected get pageName(){
        return this.constructor.toString().match(/\w+/g)[1];
    }

    async ngOnInit() {
    }

    async ionViewWillEnter(){
        const self = this;
    }


    /**
     * Navigates to another page sending caches
     * @param url
     */
    protected navigate(url: string){
        const self = this;
        const verbose = true;

        if(verbose){
            console.log(self.pageName, `navigate`, url, self.caches[url], {state: {results: self.caches[url]}})
        }

        if(self.caches[url] && Object.keys(self.caches[url]).length > 0){
            self.app.router.navigateByUrl(url, {state: {results: self.caches[url]}});
        }else{
            self.app.router.navigateByUrl(url);
        }
    }

    protected async logout(){
        await this.app.me.logout();
        this.app.router.navigateByUrl('/login');
    }
}
