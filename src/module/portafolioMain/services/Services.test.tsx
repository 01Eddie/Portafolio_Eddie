import React from 'react';
import { render, screen } from '@testing-library/react';
import { PortafolioMainResponse } from '@/domain/models/portafolioMain/portafolioMain';
import { DataContext } from '../PortafolioMain';
import Services from './Services';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

// Mock de datos
const mockData: PortafolioMainResponse = {
  data: [
    {
        id: 1,
        key: 'services',
        section: 'Mis Servicios',
        title: 'Lo que ofrezco',
        services: [
            {
                name: 'Desarrollo Web',
                description: 'Creación de sitios y aplicaciones web modernas.',
                icon: '/icons/web-dev.svg'
            },
            {
                name: 'Diseño UI/UX',
                description: 'Interfaces intuitivas y atractivas.',
                icon: '/icons/uiux.svg'
            }
        ],
        description: '',
        image: '',
        url: ''
    }
  ]
};

describe('Services Component', () => {
  const renderWithChakra = (ui: React.ReactNode) => {
    return render(<ChakraProvider value={defaultSystem}>{ui}</ChakraProvider>);
  };

  it('debe renderizar el título y la sección', () => {
    renderWithChakra(
      <DataContext.Provider value={mockData}>
        <Services />
      </DataContext.Provider>
    );

    expect(screen.getByText('Mis Servicios')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Lo que ofrezco/i })).toBeInTheDocument();
  });

  it('debe renderizar los servicios', () => {
    renderWithChakra(
      <DataContext.Provider value={mockData}>
        <Services />
      </DataContext.Provider>
    );

    // Verifica que los nombres de los servicios estén en pantalla
    expect(screen.getByText('Desarrollo Web')).toBeInTheDocument();
    expect(screen.getByText('Diseño UI/UX')).toBeInTheDocument();

    // Verifica que las descripciones aparezcan
    expect(screen.getByText(/Creación de sitios/)).toBeInTheDocument();
    expect(screen.getByText(/Interfaces intuitivas/)).toBeInTheDocument();
  });

  it('debe manejar el caso sin datos', () => {
    renderWithChakra(
      <DataContext.Provider value={null}>
        <Services />
      </DataContext.Provider>
    );

    // No debe renderizar ningún servicio
    expect(screen.queryByText('Desarrollo Web')).not.toBeInTheDocument();
  });
});