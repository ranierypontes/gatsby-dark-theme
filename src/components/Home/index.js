import React, { useState, useEffect } from "react"

import GlobalStyles from "../../styles/global"

import * as S from "./styled"

const Home = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "-dark"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <>
      <GlobalStyles />
      <S.Header>
        <S.GatsbyIcon />
        <h1>Gatsby Dark Theme</h1>
      </S.Header>
      <S.Main>
        <S.ReactIcon />
        <S.Button
          type="button"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "-light" : "-dark")
          }}
        >
          {isDarkMode ? "Light theme" : "Dark theme"}
        </S.Button>
      </S.Main>
      <S.Footer>
        <h6>
          Developed by{" "}
          <a
            href="https://www.ranierypontes.com/"
            title="Raniery Pontes"
            rel="noreferrer"
            target="_blank"
          >
            Raniery Pontes
          </a>
        </h6>
      </S.Footer>
    </>
  )
}

export default Home
