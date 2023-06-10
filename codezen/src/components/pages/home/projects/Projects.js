import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './Projects.scss';
import { useGlobalContext } from '../../../context/context.jsx';

const Projects = () => {
  const { bageid, setbageid } = useGlobalContext()


  const handleCopy = (event) => {
    event.preventDefault()
    alert('Copying content from this site is not allowed.')
  }

  const handleSeeMore = (id) => {
    setbageid(id)
   
  }

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
                <div className="col-lg-6" key={item.id}>
                  <div className="parent-content">
                    <div className="image">{item.bage.imgUrl}</div>
                    <div className="oberly">
                      overly color
                      <button onClick={() => handleSeeMore(item.id)}>
                        see more
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
        <a href="/our-work">show more!</a>
      </div>
    </section>
  )
}

export default Projects