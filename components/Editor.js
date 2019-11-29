import React from 'react'

import classes from 'classnames'

import css from './Editor.scss'

const Editor = ({ editor }) => (
  <div className={classes(css.editor, editor ? css.editorDisplay : '')}>
    Yay
  </div>
)

export default Editor
