import React, { Component } from 'react';
import { connect } from 'react-redux';
import withI18n from '../components/Ui/withI18n';
import styled from 'styled-components';
import values from 'lodash/values';
import { camelizeKeys } from 'humps';
import { Link } from 'react-router';

import { Container, spacing, Button } from '../ui';
import { fetchVillages } from '../actions/villages';

const Wrapper = styled.div`
  min-height: calc(100vh - 60px);
  padding-top: ${spacing(2)};
  padding-bottom: ${spacing(2)};
`;

const Villages = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style-type: none;
`;

export const Box = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: ${props => (props.padded ? spacing(2) : props.bare ? 0 : spacing())};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  color: #006694;
`;

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatchFetchVillages();
    this.state = {}
  }

  render() {
    const { datas } = this.props;
    const { villageById } = datas;
    const villages = values(villageById);

    return (
      <Container>
        <ul>
          <li>
            <p>Créez un village.</p>
          </li>
          <li>
            <p>Invitez vos villageois.</p>
          </li>
          <li>
            <p>Grattez votre ticket.</p>
          </li>
        </ul>

        <Link to="/villages/new">
          <Button>New village</Button>
        </Link>
        <Wrapper>
          <Villages>
            {camelizeKeys(villages).map((v, index) =>
              <li key={index}>
                <Link to={`/village/${v.id}`}>
                  <Box>{v.displayName}</Box>
                </Link>
              </li>
            )}
          </Villages>
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  datas: state.villages,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchVillages: () => dispatch(fetchVillages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withI18n(HomePage));
