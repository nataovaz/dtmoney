import styled from 'styled-components'
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { Dashboard } from './components/Dashboard/index';


export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
      
    </>
  );
}


