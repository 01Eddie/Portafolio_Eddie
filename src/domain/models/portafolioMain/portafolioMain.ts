export interface PortafolioMainResponse {
    data: data[]
}

interface data {
    id: number;
    key: string;
    section?: string;
    title: string;
    description: string;
    image: string;
    url: string;
    detail?: detail[];
    skills?: skills[];
    projects?: projects[];
    services?: services[];
}

interface detail {
    number: number;
    sign: string;
    description: string;
}

interface skills {
    name: string;
    icon: string;
    description: string;
}

interface projects {
    name: string;
    description: string;
    image: string;
    url: string;
}

interface services {
    name: string;
    description: string;
    icon: string;
}