const getCicle = (unitatTics, selectedCicle) => {
  const result = unitatTics.filter(c => c.cicle === selectedCicle);
  return result.length > 0 ? result[0] : null;
};

const getCurs = (cursArray, selectedCurs) => {
  const result = cursArray.filter(c => c.numCurs === selectedCurs);
  return result.length > 0 ? result[0] : null;
};

const getProfes = (unitatTics, selectedCicle, selectedCurs) => {
  const cicle = getCicle(unitatTics, selectedCicle);
  if (cicle) {
    const curs = getCurs(cicle.curs, selectedCurs);
    if (curs) {
      return curs.profes;
    }
  }
  return [];
};

export { getProfes };