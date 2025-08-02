import React from 'react';
import { render, screen } from '@testing-library/react';
import { PortafolioMainResponse } from '@/domain/models/portafolioMain/portafolioMain';
import { DataContext } from '../PortafolioMain';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import Skills from './Skills';

// Mock de datos
const mockData: PortafolioMainResponse = {
  data: [
    {
        id: 1,
        key: "skills",
        section: "Habilidades",
        title: "Domino lenguajes de programacion en los que soy competente en el mercado",
        skills: [
            {
                name: "HTML & CSS",
                icon: "/dataMock/Portafolio/imgs/htmlCss.jpg",
                description: "Conocimientos en HTML5 y CSS3, creando estructuras semánticas y estilos responsivos."
            },
            {
                name: "Node js",
                icon: "/dataMock/Portafolio/imgs/nodeJs.png",
                description: "Experiencia en desarrollo de aplicaciones del lado del servidor con Node.js, utilizando Express y bases de datos SQL."
            }
        ],

        description: '',
        image: '',
        url: ''
    },
  ]
};

describe('Skills Component', () => {
  const renderWithChakra = (ui: React.ReactNode) => {
    return render(<ChakraProvider value={defaultSystem}>{ui}</ChakraProvider>);
  };

  it('debe renderizar el título y la sección', () => {
    renderWithChakra(
      <DataContext.Provider value={mockData}>
        <Skills />
      </DataContext.Provider>
    );

    expect(screen.getByText('Habilidades')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Domino lenguajes de programacion/i })).toBeInTheDocument();
  });

  it('debe renderizar el componente Skills', () => {
    renderWithChakra(
      <DataContext.Provider value={mockData}>
        <Skills />
      </DataContext.Provider>
    );

    // Verifica que los nombres de los skills estén en pantalla
    expect(screen.getByText('HTML & CSS')).toBeInTheDocument();
    expect(screen.getByText('Node js')).toBeInTheDocument();

    // Verifica que las descripciones aparezcan
    expect(screen.getByText(/Conocimientos en HTML5 y CSS3, creando estructuras semánticas y estilos responsivos./)).toBeInTheDocument();
    expect(screen.getByText(/Experiencia en desarrollo de aplicaciones del lado del servidor con Node.js, utilizando Express y bases de datos SQL./)).toBeInTheDocument();
  });

  it('debe manejar el caso sin datos', () => {
    renderWithChakra(
      <DataContext.Provider value={null}>
        <Skills />
      </DataContext.Provider>
    );

    // No debe renderizar ningún servicio
    expect(screen.queryByText('Habilidades')).not.toBeInTheDocument();
  });
});