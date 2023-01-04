import { useEffect, useState } from "react"
import {
  faHtml5,
  faStackOverflow,
  faGithub,
  faPython,
  faPhp,
  faSymfony,
} from "@fortawesome/free-brands-svg-icons"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./index.scss"

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm a Python and PHP developer with more than 2 years of experience
            in developing high quality and large scale software. I am currently looking 
            for opportunities in high paced environment.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPhp} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faSymfony} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGithub} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faHtml5} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faStackOverflow} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" active />
    </>
  )
}

export default About
