import React, { useEffect, useState } from 'react';
import { projectsData } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
            setProjects(projectsData);
    },[]);


    return (
        <div>
            <div className="project__container container grid">
                {projects.map((item) => {
                    return <ProjectItems item={item} key={item.id}/>
                })}
            </div>
        </div>
    );
}

export default Projects;