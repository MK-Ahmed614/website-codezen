import { useState } from "react";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import "./Our-Work.scss";
import ProjectsCard from "../projectsCard/ProjectsCard";

const OurWork = () => {
  const [grid, setGrid] = useState(3);
  return (
    <>
    <BreadCrumb title="our work"/>
    <div className="our-work-wrapper">
      <div className="container">
        <div className="row">
      <div className="col-12">
              <div className="filter-sort-grid">
                <div className="default-part">
                  <button type="button">All</button>
                  <button type="button">web design</button>
                  <button type="button">web developer</button>
                  <button type="button">web applcation</button>
                  <button type="button">graphic design</button>
                  <button type="button">desktop app</button>
                </div>
                <div className="sort-img-ch">
                  <p>length of projects</p>
                  <div className="sort-img-part">
                    <img
                      className={grid === 3 ? "active" : " "}
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      alt="sort"
                    />
                    <img
                      className={grid === 4 ? "active" : " "}
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      alt="sort"
                    />
                    <img
                      className={grid === 6 ? "active" : " "}
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      alt="sort"
                    />
                    <img
                      className={grid === 12 ? "active" : " "}
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      alt="sort"
                    />
                  </div>
                </div>
              </div>
              <div className="project-list">
                <div className="row">
                  <ProjectsCard grid={grid} />
                </div>
              </div>
            </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default OurWork