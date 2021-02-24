const getName = state => state.filter.filterName;
const getLastName = state => state.filter.filterLastName;
const getAge = state => state.filter.filterAge;
const getMale = state => state.filter.filterSex.male;
const getFemale = state => state.filter.filterSex.female;

const filterSelectors = {
  getName,
  getLastName,
  getAge,
  getMale,
  getFemale,
};

export default filterSelectors;
