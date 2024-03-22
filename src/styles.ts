import { createGlobalStyle } from 'styled-components'

export const Cores = {
    salmao: '#E66767',
    bege: '#FFF8F2',
    branco: '#FFFFFF',
    rosa: '#FFEBD9',
}

export const EstiloGlobal = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
  body {
    background-color: ${Cores.bege};
    color: ${Cores.salmao};
  }
  .container { 
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
