import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <div className="project__buttons">
            <a href={item.url} className="project__button" target="_blank">
                Demo <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
            <a href={item.github} className="project__button" target="_blank">
                Github <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
            </div>
        </div>
    );
}

export default ProjectItems;