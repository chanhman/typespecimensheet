import React from 'react'

import classes from 'classnames'
import PropTypes from 'prop-types'

import HeadingEditor from './HeadingEditor'
import css from './Editor.scss'

const Editor = ({ editor }) => (
  <div className={classes(css.editor, editor ? css.editorDisplay : '')}>
    <HeadingEditor name='H1' />
    <HeadingEditor />
  </div>
)

Editor.propTypes = {
  editor: PropTypes.bool
}

export default Editor
