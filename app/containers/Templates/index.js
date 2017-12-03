/*
 *
 * Templates
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  gql,
  graphql,
} from 'react-apollo';
import Wrapper from 'components/Wrapper';
import Placeholder from 'components/Placeholder';
import LoadingWrapper from 'components/LoadingWrapper';
import Template from 'containers/Template';
import TemplateCreator from 'containers/TemplateCreator';
import List from './List';

export class Templates extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      data: {
        loading,
        error,
        templates,
      },
    } = this.props;
    let sortedTemplates;
    if (templates) {
      sortedTemplates = templates.concat().sort((a, b) => a.title > b.title);
    }

    return (
      <Wrapper>
        <Placeholder componentTitle="Behavior" />
        {/* <LoadingWrapper loading={loading} error={error}>
          <div>
            <TemplateCreator onUpdate={() => this.props.data.refetch()} />
            <List component={Template} items={sortedTemplates} onUpdate={() => this.props.data.refetch()} />
          </div>
        </LoadingWrapper> */}
      </Wrapper>
    );
  }
}

Templates.propTypes = {
  data: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const GraphedTemplates = graphql(gql`
  query {
    templates {
      _id
      title
      html
    }
  }
`)(Templates);


export default connect(null, mapDispatchToProps)(GraphedTemplates);
