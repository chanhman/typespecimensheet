import React, { useState } from 'react'

import classes from 'classnames'
import fetch from 'isomorphic-unfetch'
import uuid from 'react-uuid'

import Headings from '../components/Headings';
import TypefaceBasics from '../components/TypefaceBasics';
import TypefaceName from '../components/TypefaceName'
import css from "./index.scss"

const Home = ({ nyt }) => {
  const [nightMode, setNightMode] = useState(false);

  return (
    <div className={classes(css.outer, nightMode ? css.nightMode : '')}>
      <div className={css.container}>
        <div className={css.toggles}>
          <div className={css.toggle} onClick={() => setNightMode(!nightMode)}>
            {nightMode ? '🌞' : '🌒'}
          </div>
          <div className={css.toggle}>📏</div>
        </div>

        <TypefaceName />
        <TypefaceBasics />

        <div className={css.grid1}>
          {nyt.slice(18, 20).map(article => (
            <div key={uuid()}>
              <h1>{article.title}</h1>
              <p>{article.abstract}</p>
            </div>
          ))}
        </div>

        <div className={css.grid2}>
          {nyt.slice(15, 18).map(article => (
            <div key={uuid()}>
              <h5>{article.title}</h5>
              <p>{article.abstract}</p>
            </div>
          ))}
        </div>

        <div className={css.grid2}>
          {nyt.slice(0, 2).map(article => (
            <div key={uuid()}>
              <h2>{article.title}</h2>
              <h4>{article.section}</h4>
              <p>{article.abstract}</p>
            </div>
          ))}
        </div>

        <div className={css.grid2}>
          {nyt.slice(2, 6).map(article => (
            <div key={uuid()}>
              <h3>{article.title}</h3>
              <h5>{article.section}</h5>
              <p>{article.abstract}</p>
            </div>
          ))}
        </div>

        <div className={css.grid2}>
          {nyt.slice(6, 12).map(article => (
            <div key={uuid()}>
              <h4>{article.title}</h4>
              <h6>{article.section}</h6>
              <p>{article.abstract}</p>
            </div>
          ))}
        </div>

        <Headings data={ nyt } />
      </div>
    </div >
  )
}

Home.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8dgk2NGTAm0Aiulv7Td0dLnmAbvLvGAx')
  const json = await res.json()
  return { nyt: json.results }
}

export default Home
