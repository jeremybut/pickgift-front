import React, { Component } from 'react';
import { connect } from 'react-redux';
import withI18n from '../components/Ui/withI18n';
import { Container } from '../ui';

class HomePage extends Component {
  render() {
    return (
      <Container>
        <section>
          Homepage
        </section>
      </Container>
    );
  }
}

export default connect(null, null)(withI18n(HomePage));
