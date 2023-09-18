/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from 'axios'
import { BASE_URL } from '../utils/system'


export function findProfile(profileName: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return axios.get(`${BASE_URL}/${profileName}`);
}

export function findCEP(cep: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}


