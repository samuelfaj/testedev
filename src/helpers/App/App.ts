import {Injectable} from '@angular/core';
import Swal, {SweetAlertIcon} from 'sweetalert2';
import Loader from './Loader';

@Injectable()
export default class App {
    VERSION = '1.00';

    constructor() {

    }

    get new() {
        return new New(this);
    }
}

class New {
    constructor(protected base: App) {
    }

    alert(
        title = 'Erro',
        message = 'Houve um erro inesperado',
        type: SweetAlertIcon = 'error'
    ) {
        Swal.fire(
            title,
            message,
            type || 'error'
        );
    }

    confirm(
        header = 'Você tem certeza?',
        message = 'Você tem certeza de que deseja prosseguir?'
    ): Promise<boolean> {
        return new Promise(resolve => {
            Swal.fire({
                title: header,
                text: message,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ccc',
                cancelButtonText: 'Cancelar',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
            }).then((result) => {
                resolve(result.value);
            });
        });
    }

    loader(){
        return new Loader();
    }
}



