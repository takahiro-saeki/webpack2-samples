import React from 'react';
import { Header } from 'semantic-ui-react';
const headerStyle = {
  borderBottom: '1px solid rgba(0,0,0,0.15)',
  padding: '1rem',
  textAlign: 'center'
}

const Headers = () => (
  <Header as='h2' style={headerStyle} content='webpack2-example' />
)

export default Headers;
