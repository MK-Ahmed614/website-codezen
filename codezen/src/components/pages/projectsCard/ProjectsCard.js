import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./ProjectsCard.scss";
import { useLocation } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const ProjectsCard = (props) => {
  const { grid } = props;
  const location = useLocation();
  const { t } = useTranslation()
  const data = t('Projects', { returnObjects: true })
  return (
    <>

    {data.map((items) => {
        return (
            <div key={items.id}
            className={`${
              location.pathname === "/our-work"
                ? `col-${grid} col-${grid}-grider`
                : "col-3"
            }`}
          >
            <Link className="go-to" to={`/SingleProduct/${items.id}`}>
              <div className="project-card">
                <div className="project-img">
                  <img
                    className="img-fluid"
                    src={items.bage.imgUrl} alt={items.bage.title}
                  />
                </div>
                <div className="project-info">
                  <span className="project-name"> project name {/* {items.bage.name} */} </span>
                  <h4 className="project-title">
                  {items.bage.title}
                  </h4>
                  <div className="project-starts">
                    <ReactStars
                      count={5}
                      size={18}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p
                    className={`pro-description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                  >
{items.bage.description}
                  </p>
                  <button className="review-project">
                                <Link to={`/SingleProduct/${items.id}`}>See more <HiOutlineArrowNarrowRight/> </Link>
                      </button>
                </div>
              </div>
            </Link>
          </div>
        )
    })}
    
    </>
  );
};

export default ProjectsCard;
