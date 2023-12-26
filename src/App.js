import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import AddTask from './addtask';
import ListTask from './listtask';
import { Container, Row, Col } from 'react-bootstrap';
import { composeWithDevTools } from 'redux-devtools-extension';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6}>
            <AddTask />
            <ListTask />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
};

export default App;
