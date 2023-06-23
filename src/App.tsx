import React from 'react';
import {Routes,Route} from 'react-router-dom'
import { Container,Menu,PageBody } from './AppStyled';
import MenuItem from './components/MenuItem';
import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import NotFound from './pages/NotFound';
import PriveteRoute from './components/PrivateRoute';
import { Cart } from './components/cart';
import { Tooltip } from 'react-tooltip'


function App() {

  return (
    <Container>
      <Menu>
        <MenuItem title="Loja" icon="/assets/store.png" link="/"/>
        <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders"/>
        <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile"/>
      </Menu>
      <PageBody>
        <Routes>

          <Route path='/' element={<HomeScreen />}/>
          <Route path='/orders' element={
            <PriveteRoute>
              <Tela2Screen />
            </PriveteRoute>
          }/>
          <Route path='*' element={
            <PriveteRoute>
              <NotFound />
            </PriveteRoute>
          }/>

        </Routes>
      </PageBody>
      <Cart />
      <Tooltip id ="tip-top" place="top" />
      <Tooltip id ="tip-right" place="right" />
    </Container>
  );
}

export default App;
