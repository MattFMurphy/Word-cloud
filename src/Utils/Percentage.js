/**
 *
 * @param {*} property - The property to count count
 * @param {*} sourceObj - The object the property comes from
 * @returns a percentage between 0-100
 */
const percentage = (property, sourceObj) => {
  const countTotal = (obj) => {
    let sum = 0;
    for (const key in obj) {
      sum += obj[key];
    }
    return sum;
  };
  const total = countTotal(sourceObj);

  let num = Math.floor((property / total) * 100);
  return `${num}%`;
};

export { percentage };
