import Swal from 'sweetalert2/src/sweetalert2';

/**
 * 
 * @param title -> titulo de la alerta
 * @param text -> texto informativo
 * @param button -> tipo de boton en Alerta
 */
export function errorAlert(title?: string, text?: string, button?: string){
   Swal.fire({
        title: title,
        text: text,
        icon: 'error',
        confirmButtonText: button
   })
}