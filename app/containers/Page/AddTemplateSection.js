import React, { PropTypes } from 'react';
import styled from 'styled-components';
import {
  graphql,
  gql,
  withApollo,
} from 'react-apollo';

const Li = styled.li``;


class AddTemplateSection extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    client: PropTypes.object,
    onSelect: PropTypes.func.isRequired,
  }
  onTemplateClick = (x) => {
    this.props.client.query({
      query: gql`
        query getTemplate($templateId: ID) {
          template(_id: $templateId) {
            html
          }
        }
      `,
      variables: {
        templateId: x._id,
      },
    }).then((data) => { this.props.onSelect(data.data.template.html); });
  }
  render() {
    const {
      data: {
        loading,
        error,
        templates,
      },
    } = this.props;
    return (
      <ul>
        {
          (!error && !loading ? templates : []).map((x, idx) => <Li key={idx} onClick={() => this.onTemplateClick(x)}>{x.title}</Li>)
        }
      </ul>
    );
  }
}

const QueriedAddTemplateSection = graphql(gql`
  query {
    templates {
      _id
      title
    }
  }
`)(AddTemplateSection);


export default withApollo(QueriedAddTemplateSection);
