const baseUrl = '/v1'


export class FetchApi {
  static save(data:object) {
    return fetch(`${baseUrl}/save`, {
      method: 'post',
      body: JSON.stringify(data),
      headers:{
        'Content-type':'application/json'
      }
    }).then(res=>res.json())
  }

  static get() {
    return fetch(`${baseUrl}/get`).then(res=>res.json())
  }
}