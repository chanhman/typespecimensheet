import React from 'react'

import PropTypes from 'prop-types'

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

Toggles.propTypes = {
  nightMode: PropTypes.bool,
  setNightMode: PropTypes.func,
  editor: PropTypes.bool,
  setEditor: PropTypes.func
}

export default Toggles
