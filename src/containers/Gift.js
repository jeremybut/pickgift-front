import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snow from 'react-snow-effect';
import styled from 'styled-components';

import withI18n from '../components/Ui/withI18n';

const Container = styled.div`
  background: #6b92b9;
  width: 100vw;
  height: 100vh;
`;

class Gift extends Component {
  render() {
    return (
      <Container>
        <Snow />
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withI18n(Gift));
