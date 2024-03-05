## Aplicação criada para o desafio Front end da Lacrei Saúde


### Descrição do Teste:
Este teste verifica se o componente Main está sendo renderizado corretamente e se seus elementos esperados estão presentes na tela.


### Resultados Esperados:
Espera-se que o teste passe sem erros, indicando que o componente Main está funcionando conforme o esperado.


### Código do Teste:
```javascript
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

 it('Verifica se os botões estão presentes', () => {
     const bttnsElement = screen.getByTestId('main-bttns');
     expect(bttnsElement).toBeInTheDocument();
   });
   
 it('Verifica se a imagem está presente', () => {
 const imgElement = screen.getByTestId('main-img');
 expect(imgElement).toBeInTheDocument();
 });
});

```

### Descrição do Teste:
Este teste verifica se o componente Footer está sendo renderizado corretamente e se seus elementos esperados estão presentes na tela.


### Resultados Esperados:
Espera-se que o teste passe sem erros, indicando que o componente Footer está funcionando conforme o esperado.


### Código do Teste:
```javascript 
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer/Footer';


describe('Testando Footer', () => {
    beforeEach(() => {
      render(<Footer />);
    });
  
    it('Verifica About', () => {
      const firstUlElement = screen.getByTestId('footer-firstUl');
      expect(firstUlElement).toBeInTheDocument();
      const secondUlElement = screen.getByTestId('footer-secondUl');
      expect(secondUlElement).toBeInTheDocument();
      const thirdElement = screen.getByTestId('footer-thirdUl');
      expect(thirdElement).toBeInTheDocument();
    });
  
    it('Verifica Disclaimer', () => {
        const firstTextDisclaimerElement = screen.getByTestId('footer-firstTextDisclaimer');
        expect(firstTextDisclaimerElement).toBeInTheDocument();
        const secondTextDisclaimerElement = screen.getByTestId('footer-secondTextDisclaimer');
        expect(secondTextDisclaimerElement).toBeInTheDocument();
        const UpBttnElement = screen.getByTestId('footer-UpBttn');
        expect(UpBttnElement).toBeInTheDocument();
    });
    it('Verifica Social',()=>{
      const facebookElement = screen.getByTestId('footer-facebook');
      expect(facebookElement).toBeInTheDocument();
      const instagramElement = screen.getByTestId('footer-instagram');
      expect(instagramElement).toBeInTheDocument();
      const emailElement = screen.getByTestId('footer-email');
      expect(emailElement).toBeInTheDocument();
      const logoElement = screen.getByTestId('footer-logo');
      expect(logoElement).toBeInTheDocument();
    })
  });

```


### Descrição do Teste:
Este teste verifica se o componente Header está sendo renderizado corretamente e se seus elementos esperados estão presentes na tela.


### Resultados Esperados:
Espera-se que o teste passe sem erros, indicando que o componente Header está funcionando conforme o esperado.


### Código do Teste:
```javascript 
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
```


### Dependências:
- Jest
- @testing-library/react

### Instruções de Execução:
1. Certifique-se de ter as dependências necessárias instaladas, incluindo Jest e @testing-library/react.
2. Navegue até o diretório do projeto.
3. Execute o seguinte comando para rodar o teste:

```bash
npm test
```

