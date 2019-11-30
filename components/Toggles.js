import React from 'react'

import css from './Toggles.scss'

const Toggles = ({ nightMode, setNightMode, editor, setEditor }) => (
  <div className={css.toggles}>
    <div className={css.toggle} onClick={() => setNightMode(!nightMode)}>
      {nightMode ? '🌞' : '🌒'}
    </div>
    <div className={css.toggle} onClick={() => setEditor(!editor)}>
      📏
    </div>
  </div>
)

export default Toggles
