import http from 'k6/http'
import { sleep } from 'k6';

export const options = {
    stages:[
        {
             duration: '60s',
             target: 50      
        },
        {
             duration: '5m',
             target: 50      
        },
        {
             duration: '60s',
             target: 0      
        } 
    ]
}

export default function(){

    const body = JSON.stringify({
        title: 'test_'+ Date.now(),
        body: 'body_' + Date.now(),
        userId: 1,
    });

    const params = {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    };

    http.post('https://jsonplaceholder.typicode.com/posts', body, params);
    sleep(10);
}