import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

// Challenge
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="img/img1.jpg" alt="Herling Botha" />  
}

function Intro() {
  return (
    <div>
      <h1>Herling Botha</h1>
      <p>
        I enjoy working with React. I am a web developer student. I love gaming in my off time and enjoy hiking.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
    {skills.map((skill) => (
      <Skill skill={skill.skill} color={skill.color} level={skill.level} />
    ))}
  </div>
  );
}



function Skill({skill,color,level}) {
  return <div className="skill" style={{backgroundColor: color}}>
    <span>{skill}</span>
    <span>
      {level === 'beginner' && '😈'}
      {level === 'intermediate' && '😊'}
      {level === 'advanced' && '😎'}
    </span>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
