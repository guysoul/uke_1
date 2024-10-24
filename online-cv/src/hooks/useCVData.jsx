import { useState } from "react";

const useCVData = () => {
  const [cvData, setCVData] = useState({
    name: "",
    age: "",
    profession: "",
    ferdigheter: [],
  });

  const updateInfo = (key, value) => {
    setCVData({ ...cvData, [key]: value });
  };

  const addSkill = (ferdighet) => {
    setCVData({ ...cvData, ferdigheter: [...cvData.ferdigheter, ferdighet] });
  };

  return { cvData, updateInfo, addSkill };
};

export default useCVData;
