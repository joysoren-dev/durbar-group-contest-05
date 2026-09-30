function commonSkills(skills1, skills2) {
  // Prothom candidate er skills lowercase kore Set e rakhbo
  const skillSet = new Set(skills1.map((skill) => skill.toLowerCase()));

  // Dwitiyo candidate er common skills gula collect kortesi
  const common = skills2
    .map((skill) => skill.toLowerCase())
    .filter((skill) => skillSet.has(skill));

  // Duplicate bad diye alphabetically sort kortesi
  return [...new Set(common)].sort();
}
