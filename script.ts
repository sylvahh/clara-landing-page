async function makeApiRequest(url: string, method: string, body?: object, token?: string) {
  interface Options extends RequestInit {
    method: string;
    headers: HeadersInit;
    body?: string;
  }
  try {
    const baseUrl = 'https://myclara.com.ng/backend';
    const headers: HeadersInit = { 'Content-Type': 'application/json', Accept: 'application/json' };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    let options: Options = {
      method,
      headers,
    };
    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      options.body = JSON.stringify(body);
    }
    console.log(options);
    let response = await fetch(baseUrl + url, options);
    let data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw error;
  }
}
makeApiRequest('/api/market-type', 'GET').then((res) => console.log(res));
