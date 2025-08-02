import React from 'react';
import { render, screen } from '@testing-library/react';
import { PortafolioMainResponse } from '@/domain/models/portafolioMain/portafolioMain';
import { DataContext } from '../PortafolioMain';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import Presentation from './Presentation';

// Mock de datos
const mockData: PortafolioMainResponse = {
  data: [
    {
        id: 1,
        key: "home",
        title: "Hola, Soy Eddie HG! Un web developer",
        description: "Soy un desarrollador web con experiencia en la creación de aplicaciones web modernas y eficientes. Me apasiona el desarrollo front-end y back-end, y disfruto trabajando con tecnologías como React, Node.js y bases de datos SQL.",
        image: "/dataMock/Portafolio/imgs/eddieHG.jpg",
        url: "http://eddiehg.com",
        detail: [
            {
                number: 3,
                sign: "+",
                description: "años de experiencia"
            },
            {
                number: 15,
                sign: "+",
                description: "proyectos avanzados"
            }
        ]
    }
  ]
};

describe('Presentation Component', () => {
  const renderWithChakra = (ui: React.ReactNode) => {
    return render(<ChakraProvider value={defaultSystem}>{ui}</ChakraProvider>);
  };

  it('debe renderizar el título y la sección', () => {
    renderWithChakra(
      <DataContext.Provider value={mockData}>
        <Presentation />
      </DataContext.Provider>
    );

    expect(screen.getByText('Hola, Soy Eddie HG! Un web developer')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Hola, Soy Eddie HG!/i })).toBeInTheDocument();
  });

  it('debe renderizar el componente Presentation', () => {
    renderWithChakra(
      <DataContext.Provider value={mockData}>
        <Presentation />
      </DataContext.Provider>
    );

    // Verifica que los nombres de los servicios estén en pantalla
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(15)).toBeInTheDocument();

    // Verifica que las descripciones aparezcan
    expect(screen.getByText(/años de experiencia/)).toBeInTheDocument();
    expect(screen.getByText(/proyectos avanzados/)).toBeInTheDocument();
  });

  it('debe manejar el caso sin datos', () => {
    renderWithChakra(
      <DataContext.Provider value={null}>
        <Presentation />
      </DataContext.Provider>
    );

    // No debe renderizar ningún servicio
    expect(screen.queryByText('Presentacion')).not.toBeInTheDocument();
  });
});