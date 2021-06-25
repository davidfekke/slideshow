import React, { useEffect } from "react"

import "../components/reveal.css"
import "../components/white.css"
import Reveal from "reveal.js/dist/reveal"

const IndexPage = () => {
  useEffect(() => {
    Reveal.initialize();
  })
  return (
    <div>
      <div className="reveal">
        <div className="slides">
          <section>Slide 1</section>
          <section>Slide 2</section>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
