const baseUrl = process.env.REACT_APP_BASE_URL;

export const ApiService = {
    get
}

function get (url: string) {
    return fetch(baseUrl+url);
}

export default ApiService;