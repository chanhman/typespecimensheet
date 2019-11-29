import React from 'react'

import css from './Toggles.scss'

const Toggles = ({ nightMode, setNightMode }) => (
  <div className={css.toggles}>
    <div className={css.toggle} onClick={() => setNightMode(!nightMode)}>
      {nightMode ? '🌞' : '🌒'}
    </div>
    <div className={css.toggle}>📏</div>
  </div>
)

export default Toggles
