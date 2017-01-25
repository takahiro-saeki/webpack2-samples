import React from 'react';
import { Header } from 'semantic-ui-react';
const headerStyle = {
  borderBottom: '1px solid rgba(0,0,0,0.15)',
  padding: '1rem',
  textAlign: 'center',
  background: '#00acc1',
  color: '#FFF',
  fontSize: '1.5rem'
}

const Headers = () => (
  <header style={headerStyle}>webpack2 with React.js example</header>
)

export default Headers;
