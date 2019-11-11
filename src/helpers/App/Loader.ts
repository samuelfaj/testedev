import Swal from 'sweetalert2';

export default class Loader{
    private timerInterval;
    private swal;

    constructor(){
        this.swal = Swal;
    }

    show(){
        this.swal.fire({
            timer: 15000,
            onBeforeOpen: () => {
                Swal.showLoading();
            },
            onClose: () => {
                // clearInterval(timerInterval)
            }
        })
    }

    dismiss(){
        this.swal.close();
    }
}
