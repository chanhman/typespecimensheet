import React from 'react'
import fetch from 'isomorphic-unfetch'
import uuid from 'react-uuid'
import css from "./index.scss"

const Home = ({ nyt }) => {
  console.log(nyt);

  return (
    <div className={css.container}>
      <header className={css.typefaceName}>
        <h1>Title</h1>
        <p>Read the news while testing out a typeface.</p>
      </header>

      <div className={css.typefaceBasics}>
        <h1>
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        </h1>

        <h1>
          a b c d e f g h i j k l m n o p q r s t u v w x y z
        </h1>

        <h1>
          1 2 3 4 5 6 7 8 9 0
        </h1>
      </div>

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

      <div className={css.grid3}>
        <div>
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
        </div>

        <aside>
          {nyt.slice(12, 15).map(article => (
            <div className={css.article} key={uuid()}>
              <h4>{article.title}</h4>
              <h6>{article.section}</h6>
              <p>{article.abstract}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8dgk2NGTAm0Aiulv7Td0dLnmAbvLvGAx')
  const json = await res.json()
  return { nyt: json.results }
}

export default Home
