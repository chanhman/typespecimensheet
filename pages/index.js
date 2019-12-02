import React, { useState } from 'react'

import classes from 'classnames'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'

import Editor from '../components/Editor'
import Grid from '../components/Grid'
import Headings from '../components/Headings'
import Toggles from '../components/Toggles'
import TypefaceBasics from '../components/TypefaceBasics'
import TypefaceName from '../components/TypefaceName'
import css from './index.scss'

const Home = ({ nyt }) => {
  const [nightMode, setNightMode] = useState(false)
  const [editor, setEditor] = useState(false)

  return (
    <div className={classes(css.outer, nightMode ? css.nightMode : '')}>
      <Editor editor={editor} />
      <div className={classes(css.inner, editor ? css.innerAbsolute : '')}>
        <Toggles
          nightMode={nightMode}
          setNightMode={setNightMode}
          editor={editor}
          setEditor={setEditor}
        />
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

Home.propTypes = {
  nyt: PropTypes.array
}

export default Home
