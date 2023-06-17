import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './Projects.scss';
import { Link } from 'react-router-dom';
const Projects = () => {


  const { t } = useTranslation()
  const data = t('Projects', { returnObjects: true })

  return (
    <section className="projects">
      <div className="container">
        <h1 className="text-center">{t('Projects_title')}</h1>
        <div className="projects_container">
          <div className="row">
            {data.slice(0, 6).map((item) => {
              return (
                <div className="col-4" key={item.id}>
                  <div className="parent-content">
                    <div className="image"> <img src={item.bage.imgUrl} alt={item.bage.title} /> </div>
                    <div className="overlay">
                    overlay color
                    <button>
                                <Link to={`/SingleProduct/${item.id}`}>See more</Link>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="button-countainer text-center">
        <a href="/our-work">show more !</a>
      </div>
    </section>
  )
}

export default Projects