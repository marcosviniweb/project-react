import axios from 'axios';
import {api} from '../../config';

export const handleLogin = ({email, password}, callback) => {
     return function(dispatch){
         axios.post(api + '/login', {email, password})
         .then((response) => {
             console.log(response.data);
         })
         .catch((err) => {
             console.log(err);
         })
     }
}