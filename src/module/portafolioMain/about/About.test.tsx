import React from 'react';
import { render, screen } from '@testing-library/react';
import { PortafolioMainResponse } from '@/domain/models/portafolioMain/portafolioMain';
import { DataContext } from '../PortafolioMain';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import About from './About';

// Mock de datos
const mockData: PortafolioMainResponse = {
  data: [
    {
        id: 1,
        key: "about",
        section: "Acerca de mi",
        title: "Desarrollador web enfocado en crear experiencias digitales únicas",
        description: "Soy desarrollador web con pasión por el diseño funcional.",
        image: "/dataMock/Portafolio/imgs/aboutMe.jpg",
        url: "https://eddiehg.com/portafolio"
    },
  ]
};

describe('About Component', () => {
  const renderWithChakra = (ui: React.ReactNode) => {
    return render(<ChakraProvider value={defaultSystem}>{ui}</ChakraProvider>);
  };

  it('debe renderizar el título y la sección', () => {
    renderWithChakra(
      <DataContext.Provider value={mockData}>
        <About />
      </DataContext.Provider>
    );

    expect(screen.getByText('Acerca de mi')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Desarrollador web enfocado/i })).toBeInTheDocument();
  });

  it('debe renderizar el componente About', () => {
    renderWithChakra(
      <DataContext.Provider value={mockData}>
        <About />
      </DataContext.Provider>
    );

    // Verifica que la imagen del perfil esté en pantalla
    expect(screen.getByAltText('Eddie Jesus Huaripayta Gonzales')).toBeInTheDocument();

    // Verifica que las descripciones aparezcan
    expect(screen.getByText(/Soy desarrollador web con pasión por el diseño funcional./)).toBeInTheDocument();
  });

  it('debe manejar el caso sin datos', () => {
    renderWithChakra(
      <DataContext.Provider value={null}>
        <About />
      </DataContext.Provider>
    );

    // No debe renderizar ningún servicio
    expect(screen.queryByText('Acerca de mi')).not.toBeInTheDocument();
  });
});