const SkillsButton = () => {
  const showDetails = () => {
    alert("Skills : HTML, CSS, Nodejs");
  };
  return (
    <div>
      <button onClick={showDetails}>Show Details</button>
    </div>
  );
};

export default SkillsButton;
