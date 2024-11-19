//performance test
import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
    stages: [{ duration: '10s', target: 10 }], //carga 10 vu por 10s
    thresholds: {
        checks: ['rate > 0.95'],  //requisições com sucesso de 95%
        http_req_failed: ['rate < 0.01'], //requisições com falha <1%
        http_req_duration: ['p(95) < 500']  //duração da requisição p(95) <500
    }
}

export default function () {
    const USER = `${Math.random()}@mail.com`
    const PASS = 'user123'
    const BASE_URL = 'https://test-api.k6.io';

    console.log( USER + PASS);

    const res = http.post(`${BASE_URL}/user/register/`, {
        username: USER,
        first_name: 'crocrodilo',
        last_name: 'dino',
        email: USER,
        password: PASS
    });

    check(res, {
        'sucesso ao registar': (r) => r.status === 201
    });

    sleep(1)
}