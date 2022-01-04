import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { Home } from './App';

describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /Sobre/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toBeDefined();
    console.log(history);

    userEvent.click(aboutLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');


    // const aboutTitle = screen.getByRole('heading',{ name: 'Você está na página Sobre' });
    const aboutTitle = screen.getByRole('heading',{ name: /Você está na página Sobre/i, level:1 });
    expect(aboutTitle).toBeInTheDocument();
  });

  test.only('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');
    //  A diferença nesse caso é que utilizamos a função history.push() 
    //  e passamos como argumento algum link que não existe dentro de nossa aplicação. 
    //  Depois disso, testamos se o texto que aparece no navegador, 
    //  ao digitar um caminho para uma página que não existe, é encontrado.

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  });

  it('verifica página home', () => {
    renderWithRouter(<Home />);
    const title = screen.getByRole('heading',{ name: /Você está na página Início/i, level:1 });
    expect(title).toBeInTheDocument();
  });

});