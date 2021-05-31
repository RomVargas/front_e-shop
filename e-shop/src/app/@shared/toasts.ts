import Swal from 'sweetalert2/src/sweetalert2';
import { TYPE_ALERT, POSITION } from './values.config';
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

/**
 * 
 * @param title -> titulo de la alerta
 * @param text -> texto informativo
 * @param icon -> Tipo de icono
 * @param button -> tipo de boton en Alerta
 */
export function genericAlert(title?: string, text?: string, icon = TYPE_ALERT.SUCCESS, button?: string, position = POSITION.TOP){
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: button,
        position: position,
        toast: true
    })
}

