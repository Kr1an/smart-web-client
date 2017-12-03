/*
 *
 * Page
 *
 */

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import HTMLHolder from 'containers/Template/HTMLHolder';

import {
  gql,
  graphql,
  compose,
} from 'react-apollo';

import styled from 'styled-components';

import LoadingWrapper from 'components/LoadingWrapper';

import SourceEditorHolder from 'containers/Template/SourceEditorHolder';
import TabAutoIndentTextarea from 'containers/Template/TabAutoIndentTextarea';
import ScrollArea from 'containers/PagesNavigator/ScrollArea';
import AddTemplateSection from './AddTemplateSection';
import Wrapper from './Wrapper';

const SwitchModeBtn = styled.div``;

export class Page extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    data: PropTypes.object,
    updatePage: PropTypes.func,

  }
  constructor(props) {
    super(props);
    this.state = {
      isEditSourceMode: false,
      editCodeText: null,
      html: null,
    };
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({ html: nextProps.data && nextProps.data.page && nextProps.data.page.html });
  }
  onCodeEditSave = async () => {
    if (this.state.isEditSourceMode) {
      const updated = await this.props.updatePage({ variables: { pageId: this.props.data.page._id, page: { html: this.state.html } } });
      if (updated) {
        this.props.data.refetch();
      }
    }
    this.setState({ isEditSourceMode: !this.state.isEditSourceMode });
  }
  updateHtml = async (html) => {
    const updated = await this.props.updatePage({ variables: { pageId: this.props.data.page._id, page: { html } } });
    if (updated) {
      this.props.data.refetch();
    }
  }
  addHtmlAfter = async (html) => {
    this.updateHtml(this.state.html + html);
  }
  updateHtmlContent = async (html) => {
    this.updateHtml(html);
  }
  onElementClick = (e) => {
    console.log(e.target.children);
    if (!e.target.children.length) {
      return;
    }

    // e.target.innerText = 'hello'; const newHtml = ReactDOM.findDOMNode(this.htmlHolder).innerHTML; this.updateHtmlContent(newHtml); }}
  }

  render() {
    const {
      data: {
        loading,
        error,
      },
    } = this.props;
    return (
      <LoadingWrapper loading={loading} error={error} >
        {
          <ScrollArea>
          <Wrapper>
            <SwitchModeBtn style={{ filter: this.state.isEditSourceMode ? 'invert(100%)' : 'invert(0%)', userSelect: 'none', transition: 'all 0.31s linear', fontStyle: 'italic', fontWeight: 600, zIndex: '10', position: 'fixed', right: 0, top: 0, margin: '30px', width: '50px', height: '50px', fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', borderRadius: '100%', background: 'black', color: 'white' }} onClick={() => this.onCodeEditSave()}>
              {
                !this.state.isEditSourceMode ? 'show code' : 'save'
              }
            </SwitchModeBtn>

              {
                this.state.isEditSourceMode ? (
                  <SourceEditorHolder styles={{ height: 'auto' }}>
                    <TabAutoIndentTextarea value={this.state.html} onChange={(editCodeText) => this.setState({ html: editCodeText })} />
                  </SourceEditorHolder>
                ) : null
              }
              <HTMLHolder ref={(target) => this.htmlHolder = target} onClick={this.onElementClick} dangerouslySetInnerHTML={{ __html: this.state.html }} />
              <AddTemplateSection onSelect={this.addHtmlAfter} />
          </Wrapper>
            </ScrollArea>
        }
      </LoadingWrapper>
    );
  }
}

const QueriedPage = graphql(gql`
  query getPage($refTitle: String) {
    page(refTitle: $refTitle) {
      _id
      title
      html
      refTitle
    }
  }
`, {
  options: (props) => ({ variables: { refTitle: props.match.params.id } }),
})(Page);

const MutatedPage = compose(
  graphql(gql`
    mutation removePage($pageId: ID!) {
      removePage(_id: $pageId)
    }
  `, { name: 'removePage' }),
  graphql(gql`
    mutation updatePage($pageId: ID!, $page: PageInput!) {
      updatePage(_id: $pageId, page: $page)
    }
  `, { name: 'updatePage' }),
)(QueriedPage);

export default MutatedPage;
