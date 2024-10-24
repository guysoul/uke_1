const SkillsButton = ({ skills, onSkillClick }) => {
  const showDetails = () => {
    alert(`Skills: ${skills.join(", ")}`);
  };

  return (
    <div>
      {skills.map((skill, index) => (
        <button key={index} onClick={() => onSkillClick(skill)}>
          {skill}
        </button>
      ))}
    </div>
  );
};

export default SkillsButton;
