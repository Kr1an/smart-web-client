/*
 *
 * Pages
 *
 */

import React, { PropTypes } from 'react';
import Page from 'containers/Page';
import styled from 'styled-components';
import {
  gql,
  graphql,
} from 'react-apollo';
import { Route, Switch } from 'react-router-dom';
import PagesNavigator from 'containers/PagesNavigator';
import LoadingWrapper from 'components/LoadingWrapper';
import Placeholder from 'components/Placeholder';
import windowSize from 'react-window-size';

import Wrapper from 'components/Wrapper';

const SwitchModeBtn = styled.div``;



export class Pages extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    windowWidth: PropTypes.number.isRequired,
    data: PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.state = {
      detailsMode: false,
    };
  }

  render() {
    const {
      data: {
        loading,
        error,
        pages,
      },
    } = this.props;

    return (
      <Wrapper>
        <Placeholder componentTitle="Behavior" />
      </Wrapper>
      // <div style={{ width: '100%', height: '100vh' }}>
      //   <LoadingWrapper loading={loading} error={error} >
      //     <Wrapper>
      //       <SwitchModeBtn style={{ fontStyle: 'italic', fontWeight: 600, zIndex: '10', position: 'fixed', left: 100, bottom: 0, margin: '30px', width: '50px', height: '50px', fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', borderRadius: '100%', background: 'black', color: 'white' }} onClick={() => this.setState({ detailsMode: !this.state.detailsMode })}>
      //         {
      //           this.state.detailsMode ? 'select mode' : 'modify mode'
      //         }
      //       </SwitchModeBtn>
      //       {
      //         !this.state.detailsMode ? <PagesNavigator pagesBluePrints={pages} /> : null
      //       }

      //       {
      //         this.props.windowWidth > 800 || this.state.detailsMode ? (
      //           <Switch>
      //             <Route path="/pages/:id" component={Page} />
      //             <Route exact path="/pages" component={Placeholder} />
      //           </Switch>
      //         ) : null
      //       }
      //     </Wrapper>
      //   </LoadingWrapper>
      // </div>
    );
  }
}

const GraphedPages = graphql(gql`
  query {
    pages {
      _id
      title
      refTitle
    }
  }
`)(Pages);

export default windowSize(GraphedPages);
