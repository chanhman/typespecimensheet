import React from 'react'

import PropTypes from 'prop-types'
import uuid from 'react-uuid'

import css from './Grid.scss'

const Grid = ({ data }) => (
  <>
    <div className={css.grid1}>
      {data.slice(18, 20).map(article => (
        <div key={uuid()}>
          <h1>{article.title}</h1>
          <p>{article.abstract}</p>
        </div>
      ))}
    </div>

    <div className={css.grid2}>
      {data.slice(15, 18).map(article => (
        <div key={uuid()}>
          <h5>{article.title}</h5>
          <p>{article.abstract}</p>
        </div>
      ))}
    </div>

    <div className={css.grid2}>
      {data.slice(0, 2).map(article => (
        <div key={uuid()}>
          <h2>{article.title}</h2>
          <h4>{article.section}</h4>
          <p>{article.abstract}</p>
        </div>
      ))}
    </div>

    <div className={css.grid2}>
      {data.slice(2, 6).map(article => (
        <div key={uuid()}>
          <h3>{article.title}</h3>
          <h5>{article.section}</h5>
          <p>{article.abstract}</p>
        </div>
      ))}
    </div>

    <div className={css.grid2}>
      {data.slice(6, 12).map(article => (
        <div key={uuid()}>
          <h4>{article.title}</h4>
          <h6>{article.section}</h6>
          <p>{article.abstract}</p>
        </div>
      ))}
    </div>
  </>
)

Grid.propTypes = {
  data: PropTypes.array
}

export default Grid
