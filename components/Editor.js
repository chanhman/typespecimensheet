import React from 'react'

import classes from 'classnames'

import HeadingEditor from './HeadingEditor'
import css from './Editor.scss'

const Editor = ({ editor }) => (
  <div className={classes(css.editor, editor ? css.editorDisplay : '')}>
    <HeadingEditor name='H1' />
    <HeadingEditor />
  </div>
)

export default Editor
