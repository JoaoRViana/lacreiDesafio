import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Main from '@/components/Main/Main';

describe('Testando Main', () => {
    beforeEach(() => {
      render(<Main />);
    });
    it('Verifica se o texto está presente', () => {
      const textContentElement = screen.getByTestId('main-textContent');
      expect(textContentElement).toBeInTheDocument();
    });
  
    it('Verifica os botões estão presentes', () => {
        const bttnsElement = screen.getByTestId('main-bttns');
        expect(bttnsElement).toBeInTheDocument();
      });
    it('Verifica se a imagem está presente', () => {
    const imgElement = screen.getByTestId('main-img');
    expect(imgElement).toBeInTheDocument();
    });
  });