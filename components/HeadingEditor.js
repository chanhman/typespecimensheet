import React from 'react'

import PropTypes from 'prop-types'

import css from './HeadingEditor.scss'

const HeadingEditor = ({ name }) => (
  <div className={css.container}>
    <div className={css.name}>{name}</div>
    <div className={css.values}>
      <div className={css.value}>
        <label className={css.label} htmlFor='font-size'>
          Font size:
        </label>
        <input className={css.input} type='number' id='font-size' />
        <div className={css.unit}>px</div>
      </div>
      <div className={css.value}>
        <label className={css.label} htmlFor='top-margin'>
          Top margin:
        </label>
        <input className={css.input} type='number' id='top-margin' />
        <div className={css.unit}>px</div>
      </div>
      <div className={css.value}>
        <label className={css.label} htmlFor='bottom-margin'>
          Bottom margin:
        </label>
        <input className={css.input} type='number' id='bottom-margin' />
        <div className={css.unit}>px</div>
      </div>
    </div>
  </div>
)

HeadingEditor.defaultProps = {
  name: 'Heading'
}

HeadingEditor.propTypes = {
  name: PropTypes.string
}

export default HeadingEditor
