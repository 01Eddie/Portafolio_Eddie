import React from 'react';
import { render, screen } from '@testing-library/react';
import { PortafolioMainResponse } from '@/domain/models/portafolioMain/portafolioMain';
import { DataContext } from '../PortafolioMain';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import Portfolio from './Portfolio';

// Mock de datos
const mockData: PortafolioMainResponse = {
  data: [
    {
        id: 1,
        key: 'portfolio',
        section: 'Portafolio',
        title: 'Echa un vistazo',
        projects: [
            {
                "name": "Rimac Seguros",
                "description": "Sitio web corporativo de Rimac Seguros con información sobre productos y servicios.",
                "image": "/dataMock/Portafolio/imgs/rimacSeguros.png",
                "url": "https://eddiehg.com/ecommerce"
            },
            {
                "name": "HealthFirst",
                "description": "Aplicación web de gestión de citas médicas y pacientes para clínicas y hospitales.",
                "image": "/dataMock/Portafolio/imgs/healthfirst.png",
                "url": "https://eddiehg.com/blog"
            }
        ],
        description: '',
        image: '',
        url: ''
    }
  ]
};

describe('Porfolio Component', () => {
  const renderWithChakra = (ui: React.ReactNode) => {
    return render(<ChakraProvider value={defaultSystem}>{ui}</ChakraProvider>);
  };

  it('debe renderizar el título y la sección', () => {
    renderWithChakra(
      <DataContext.Provider value={mockData}>
        <Portfolio />
      </DataContext.Provider>
    );

    expect(screen.getByText('Portafolio')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Echa un vistazo/i })).toBeInTheDocument();
  });

  it('debe renderizar el componente Portfolio', () => {
    renderWithChakra(
      <DataContext.Provider value={mockData}>
        <Portfolio />
      </DataContext.Provider>
    );

    // Verifica que los nombres de los servicios estén en pantalla
    expect(screen.getByText('Rimac Seguros')).toBeInTheDocument();
    expect(screen.getByText('HealthFirst')).toBeInTheDocument();

    // Verifica que las descripciones aparezcan
    expect(screen.getByText(/Sitio web corporativo de Rimac Seguros/)).toBeInTheDocument();
    expect(screen.getByText(/Aplicación web de gestión de citas médicas/)).toBeInTheDocument();
  });

  it('debe manejar el caso sin datos', () => {
    renderWithChakra(
      <DataContext.Provider value={null}>
        <Portfolio />
      </DataContext.Provider>
    );

    // No debe renderizar ningún servicio
    expect(screen.queryByText('Portafolio')).not.toBeInTheDocument();
  });
});