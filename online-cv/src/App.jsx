import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PersonalInfo from "./components/Personalinfo";
import SkillsButton from "./components/SkillsButton";
import Education from "./components/Education";

import useCVData from "./hooks/useCVData";

const texts = {
  norsk: {
    title: "Min Online CV",
    name: "Navn",
    age: "Alder",
    profession: "Yrke",
    skills: "Ferdigheter",
    addskills: "Legg til ferdighet",
  },
  engelsk: {
    title: "My Online CV",
    name: "Name",
    age: "Age",
    profession: "Profession",
    skills: "Skills",
    addskills: "Add Skills",
  },
};

function App() {
  const { cvData, updateInfo, addSkill } = useCVData();
  const [language, setLanguage] = useState("norsk");

  // const [name, setName] = useState("");
  // const [profession, setProfession] = useState("");
  // const [age, setAge] = useState("");
  const [ferdighet, setferdighet] = useState("");
  // const [ferdigheter, setferdigheter] = useState([]);

  const handleSkillClick = (skill) => {
    alert(`You clicked on: ${skill}`);
  };

  const onButtonClick = () => {
    addSkill(ferdighet);
    setferdighet("");
  };

  const text = texts[language];

  return (
    <div>
      {/* <Header />
      <PersonalInfo />
      <SkillsButton
        skills={["Javascript", "NodeJS", "CSS", "MySQL", "PHP"]}
        onSkillClick={handleSkillClick}
      />
      <Education school="Gokstad" degree="Fagskole" />
      <Education school="USJ-R" degree="BSIT" />
      <Education school="CIT" degree="Highschool" />
      <Education school="UV" degree="Elementary" /> */}
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="norsk">Norwegian</option>
        <option value="engelsk">English</option>
      </select>
      <h1>{text.title}</h1>
      <input
        type="text"
        placeholder={text.name}
        value={cvData.name}
        onChange={(event) => updateInfo("name", event.target.value)}
      />
      <input
        type="text"
        placeholder={text.profession}
        value={cvData.profession}
        onChange={(event) => updateInfo("profession", event.target.value)}
      />
      <input
        type="text"
        placeholder={text.age}
        value={cvData.age}
        onChange={(event) => updateInfo("age", event.target.value)}
      />
      <p>
        {text.name} {cvData.name}
      </p>
      <p>
        {text.profession} {cvData.profession}
      </p>
      <p>
        {text.age} {cvData.age}
      </p>

      <h2>{text.skills}</h2>

      <input
        type="text"
        placeholder={text.addskills}
        value={ferdighet}
        onChange={(event) => setferdighet(event.target.value)}
      />
      <button onClick={onButtonClick}>{text.addskills}</button>
      <ul>
        {cvData.ferdigheter.map((ferdighet, index) => (
          <li key={index}>{ferdighet}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
