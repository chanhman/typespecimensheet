import React, { useState } from 'react'

import classes from 'classnames'
import fetch from 'isomorphic-unfetch'

import Grid from '../components/Grid'
import Headings from '../components/Headings'
import TypefaceBasics from '../components/TypefaceBasics'
import TypefaceName from '../components/TypefaceName'
import css from './index.scss'

const Home = ({ nyt }) => {
  const [nightMode, setNightMode] = useState(false)

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
        <Grid data={nyt} />
        <Headings data={nyt} />
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch(
    'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8dgk2NGTAm0Aiulv7Td0dLnmAbvLvGAx'
  )
  const json = await res.json()
  return { nyt: json.results }
}

export default Home
