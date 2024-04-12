import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const notify = (message) => {
  toast(message, {
    autoClose: 5000,
    position: "bottom-left",
    pauseOnHover: true,
    hideProgressBar: false,
    theme: "dark",
   //  closeOnClick: false 
  });
}
