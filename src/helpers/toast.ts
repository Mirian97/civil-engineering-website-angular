import Swal, { SweetAlertOptions } from 'sweetalert2';

export const toast = (options: SweetAlertOptions) => {
  return Swal.fire({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    icon: 'success',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    ...options,
  });
};
