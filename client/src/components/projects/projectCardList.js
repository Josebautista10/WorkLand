import React, {useState, useEffect} from 'react';
import './projects.css';
import ProjectCard from './ProjectCard';
import Form from './Form';
import Button from '../button/Button';
import axios from "axios";
import useApplicationData from '../../hooks/useApplicationData';

function ProjectCardList(props) {
  const { state, createProject } = useApplicationData();
  const [showForm, setShowForm] = useState(false);

  // console.log
  

  const projectsList = state.projects.map(project => {
    return (
      <ProjectCard
        key={project.id}
        name={project.name}
        description={project.description}
      />
    )
  });


  return (
    <div className='rpgui-content'>
      <div className='welcome'>
        <h1>Projects</h1>
      </div>

      <section>
        {projectsList}
        {showForm ? 
          <Form 
            setShowForm={setShowForm}
            onSave={createProject}
          /> 
          :
          <Button 
            onClick={() => setShowForm(true)}
          >
            New Project
          </Button>}
      </section>
    </div>
  );
};

export default ProjectCardList;