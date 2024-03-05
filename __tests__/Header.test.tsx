import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '@/components/Header/Header'


describe('Testando Header', () => {
    beforeEach(() => {
      render(<Header />);
    });
  
    it('Verifica Logo', () => {
      const logoElement = screen.getByTestId('header-logo');
      expect(logoElement).toBeInTheDocument();
    });
  
    it('Verifica os botões do Header', () => {
      const quemSomosBttn = screen.getByTestId('header-QuemSomos-bttn');
      expect(quemSomosBttn).toBeInTheDocument();
      
      const ajudaBttn = screen.getByTestId('header-Ajuda-bttn');
      expect(ajudaBttn).toBeInTheDocument();
      
      const entrarBttn = screen.getByTestId('header-Entrar-bttn');
      expect(entrarBttn).toBeInTheDocument();
    });
  });