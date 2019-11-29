import React from 'react'

import css from './Headings.scss'

const Headings = ({ data }) => (
  <div>
    {data.slice(12, 13).map(article => (
      <h1 className={css.heading}>
        <span>Heading 1</span>
        {article.title}
      </h1>
    ))}
    {data.slice(13, 14).map(article => (
      <h2 className={css.heading}>
        <span>Heading 2</span>
        {article.title}
      </h2>
    ))}
    {data.slice(14, 15).map(article => (
      <h3 className={css.heading}>
        <span>Heading 3</span>
        {article.title}
      </h3>
    ))}
    {data.slice(15, 16).map(article => (
      <h4 className={css.heading}>
        <span>Heading 4</span>
        {article.title}
      </h4>
    ))}
    {data.slice(16, 17).map(article => (
      <h5 className={css.heading}>
        <span>Heading 5</span>
        {article.title}
      </h5>
    ))}
    {data.slice(17, 18).map(article => (
      <h6 className={css.heading}>
        <span>Heading 6</span>
        {article.title}
      </h6>
    ))}
  </div>
)

export default Headings
