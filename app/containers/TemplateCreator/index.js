/*
 *
 * TemplateCreator
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  gql,
  graphql,
  compose,
} from 'react-apollo';
import { MdAddCircle, MdCheckCircle } from 'react-icons/lib/md';
import Wrapper from './Wrapper';
import AddButton from './AddButton';
import TitleInput from './TitleInput';


export class TemplateCreator extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      isEditMode: false,
    };
  }
  onCreate = () => {
    this.props.addTemplate({
      variables: {
        template: {
          title: this.state.title,
          html: '<div style="color: white; flex-direction: column; font-size: 1.5rem; font-family: monospace;height: 300px; background: #ff7a7a;display: flex; justify-content: center; align-items: center; padding: 40px; text-align: center">\n\t<span style="font-size: 2rem; font-weight: 600;">\n\t\tEmpty Template.\n\t</span>\n\t<br />\n\tTo Edit, click on me then click edit button on the right top corner.\n</div>' } } })
      .then(() => {
        this.setState({ isEditMode: false });
        this.props.onUpdate();
      })
      .catch(() => {});
  }
  render() {
    const {
      title,
    } = this.state;
    return (
      <Wrapper>
        {
          this.state.isEditMode ? (
            <div style={{ background: 'rgba(255,255,255,0.3)', borderRadius: '0 100px 100px 0', paddingLeft: '30px' }}>
              <TitleInput spellCheck={false} placeholder="Name your Template..." value={title} onChange={(e) => this.setState({ title: e.target.value })} onKeyPress={(e) => e.charCode === 13 ? this.onCreate() : null} />
              <AddButton onClick={this.onCreate} >
                <MdCheckCircle style={{ color: 'black' }} size={80} />
              </AddButton>
            </div>
          ) : (
            <AddButton onClick={() => this.setState({ isEditMode: true })}>
              <MdAddCircle size={80} />
            </AddButton>
          )
        }

      </Wrapper>
    );
  }
}

TemplateCreator.propTypes = {
  addTemplate: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

const GraphedTemplateCreator = compose(
  graphql(gql`
    mutation addTemplate($template: TemplateInput!) {
      addTemplate(template: $template)
    }
  `, { name: 'addTemplate' }),
)(TemplateCreator);


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(GraphedTemplateCreator);
