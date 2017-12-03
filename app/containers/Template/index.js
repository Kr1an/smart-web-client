import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { MdClose, MdEdit, MdCheck, MdContentCopy, MdContentPaste, MdDeveloperBoard, MdDelete, MdCode } from 'react-icons/lib/md';
import ReactTooltip from 'react-tooltip';
import copy from 'copy-to-clipboard';
import ReactTimeout from 'react-timeout';
import {
  gql,
  graphql,
  compose,
} from 'react-apollo';
import Wrapper from './Wrapper';
import DashedWrapper from './DashedWrapper';
import TabAutoIndentTextarea from './TabAutoIndentTextarea';
import HTMLHolder from './HTMLHolder';
import Controllers from './Controllers';
import { EditAnimation, CloseAnimation } from './Animation';
import SourceEditorHolder from './SourceEditorHolder';
import Title from './Title';

class Template extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    setTimeout: PropTypes.func.isRequired,
    removeTemplate: PropTypes.func.isRequired,
    updateTemplate: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
      isFocused: false,
      isEditMode: false,
      editTitleText: this.props.item.title,
      editCodeText: this.props.item.html,
      infoMessage: '',
      isEditSourceMode: false,
    };
  }
  onPasted = (e) => {
    this.setState({ editCodeText: e.clipboardData.getData('Text') });
    this.showInfoMessage('pasted');
  }
  onCopied = () => {
    copy(this.props.item.html);
    this.showInfoMessage('copied');
  }
  onDelete = async (templateId) => {
    const deleted = await this.props.removeTemplate({ variables: { templateId } });
    if (deleted) {
      this.props.onUpdate();
      this.setState({ isEditMode: false, isFocused: false });
    }
  }
  onUpdate = async (templateId) => {
    const updated = await this.props.updateTemplate({ variables: { templateId, template: { title: this.state.editTitleText, html: this.state.editCodeText } } });
    if (updated) {
      this.props.onUpdate();
    }
  }
  showInfoMessage = (msg) => {
    this.setState({ infoMessage: msg });
    this.props.setTimeout(() => ReactTooltip.show(this.infoTooltip), 50);
    this.props.setTimeout(() => ReactTooltip.hide(this.infoTooltip), 1000);
  }

  render() {
    const {
      html,
      title,
      _id,
    } = this.props.item;
    if (this.text) {
      this.text.selectionStart = 40;
      this.text.selectionEnd = 40;
    }
    return (
      <Wrapper
        tabIndex="0"
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
        onFocus={() => this.setState({ isFocused: true })}
        onBlur={() => { this.setState({ editCodeText: this.state.isHover ? this.state.editCodeText : html, isFocused: this.state.isHover, isEditMode: this.state.isHover, isEditSourceMode: this.state.isEditSourceMode && this.state.isHover }); }}
        onClick={() => this.setState({ isFocused: true })}
        onPaste={!this.state.isEditSourceMode ? this.onPasted : null}
        onCopy={!this.state.isEditSourceMode ? this.onCopied : null}
      >
        {
          this.state.isEditSourceMode ? (
            <SourceEditorHolder styles={{ height: 'auto' }}>
              <TabAutoIndentTextarea value={this.state.editCodeText} onChange={(editCodeText) => this.setState({ editCodeText })} />
            </SourceEditorHolder>
          ) : null
        }
        <HTMLHolder dangerouslySetInnerHTML={{ __html: this.state.editCodeText }} />
        {
          this.state.isFocused && !this.state.isEditSourceMode ? (
            <Controllers>
              {
                this.state.isEditMode ? (
                  <div>
                    <ReactTooltip
                      id="code-tooltip"
                      aria-haspopup="true"
                      delayShow={300}
                      effect="solid"
                    >Show source
                    </ReactTooltip>
                    <MdCode
                      data-tip
                      data-for="code-tooltip"
                      size={40}
                      onClick={() => this.setState({ isEditSourceMode: true })}
                    />
                  </div>
                ) : null
              }
              {
                this.state.isEditMode ? (
                  <div>
                    <ReactTooltip
                      id="copy-tooltip"
                      aria-haspopup="true"
                      delayShow={300}
                      effect="solid"
                    >
                      Copy content:
                      <ul>
                        <li>ctrl+c</li>
                        <li>click on copy icon</li>
                      </ul>
                    </ReactTooltip>
                    <MdContentCopy
                      data-tip
                      data-for="copy-tooltip"
                      size={40}

                      onClick={this.onCopied}
                    />
                  </div>
                ) : null
              }

              {
                this.state.isEditMode ? (
                  <div>
                    <ReactTooltip
                      id="paste-tooltip"
                      aria-haspopup="true"
                      delayShow={300}
                      effect="solid"
                    >
                      Paste content:
                      <ul>
                        <li>ctrl+v</li>
                      </ul>
                    </ReactTooltip>
                    <MdContentPaste
                      data-tip
                      data-for="paste-tooltip"
                      size={40}
                    />
                  </div>
                ) : null
              }
              {
                this.state.isEditMode ? (
                  <div>
                    <ReactTooltip
                      id="delete-tooltip"
                      aria-haspopup="true"
                      delayShow={300}
                      effect="solid"
                    >Delete
                    </ReactTooltip>
                    <MdDelete
                      data-tip
                      data-for="delete-tooltip"
                      size={40}
                      onClick={() => this.onDelete(_id)}
                    />
                  </div>
                ) : null
              }

              <EditAnimation>
                {
                  this.state.isEditMode ? (
                    <div>
                      <div>
                        <ReactTooltip
                          id="save-tooltip"
                          aria-haspopup="true"
                          delayShow={300}
                          effect="solid"
                        >Save
                        </ReactTooltip>

                        <MdCheck
                          data-tip
                          data-for="save-tooltip"
                          size={40}
                          onClick={() => { this.onUpdate(_id); this.setState({ isEditMode: false }); }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <ReactTooltip
                        id="edit-tooltip"
                        aria-haspopup="true"
                        delayShow={300}
                      >Edit</ReactTooltip>
                      <MdEdit
                        data-tip
                        data-for="edit-tooltip"
                        size={40}
                        onClick={() => this.setState({ isEditMode: true })}
                      />
                    </div>
                  )
                }


              </EditAnimation>
              <CloseAnimation>
                <div>
                  <ReactTooltip
                    id="close-tooltip"
                    aria-haspopup="true"
                    delayShow={300}
                  >Close</ReactTooltip>
                  <MdClose
                    data-tip
                    data-for="close-tooltip"
                    size={40}
                    onClick={(e) => { this.setState({ editCodeText: html, isEditMode: false, isFocused: false }); e.stopPropagation(); }}
                  />
                </div>
              </CloseAnimation>
            </Controllers>
          ) : null
        }
        {
          this.state.isEditSourceMode ? (
            <Controllers style={{ background: 'rgba(0,0,0,0.5)' }}>
              <div>
                <ReactTooltip
                  id="save-tooltip"
                  aria-haspopup="true"
                  delayShow={300}
                  effect="solid"
                >To page
                </ReactTooltip>

                <MdDeveloperBoard
                  style={{ color: '#ffffff' }}
                  data-tip
                  data-for="save-tooltip"
                  size={40}
                  onClick={(e) => { this.setState({ isEditSourceMode: false }); e.stopPropagation(); }}
                />
              </div>
              <CloseAnimation>
                <div>
                  <ReactTooltip
                    id="close-tooltip"
                    aria-haspopup="true"
                    delayShow={300}
                  >Do not save. Exit</ReactTooltip>
                  <MdClose
                    style={{ color: '#ffffff' }}
                    data-tip
                    data-for="close-tooltip"
                    size={40}
                    onClick={(e) => { this.setState({ editCodeText: html, isEditSourceMode: false }); e.stopPropagation(); }}
                  />
                </div>
              </CloseAnimation>
            </Controllers>
          ) : null
        }
        {
          this.state.isHover || this.state.isFocused ? (
            <DashedWrapper />
          ) : null
        }
        {
          this.state.isHover && !this.state.isFocused ? (
            <Title>{title}</Title>
          ) : null
        }

        <p style={{ position: 'absolute', left: '50%', top: '35%' }} data-tip={this.state.infoMessage} data-for="info-message-tooltip" data-place="top" ref={(ref) => { this.infoTooltip = ref; }}></p>
        <ReactTooltip id="info-message-tooltip" />
      </Wrapper>
    );
  }
}

const GraphedTemplate = compose(
  graphql(gql`
    mutation removeTemplate($templateId: ID!) {
      removeTemplate(_id: $templateId)
    }
  `, { name: 'removeTemplate' }),
  graphql(gql`
    mutation updateTemplate($templateId: ID!, $template: TemplateInput!) {
      updateTemplate(_id: $templateId, template: $template)
    }
  `, { name: 'updateTemplate' }),
)(Template);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ReactTimeout(GraphedTemplate));
