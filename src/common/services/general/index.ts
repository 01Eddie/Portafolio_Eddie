import axios from "axios";

const ROUTEJSON = '/dataMock/Portafolio/data.json';
const fetcherJson = (url: string) => axios.get(url).then(res => res.data);

export { ROUTEJSON, fetcherJson };
