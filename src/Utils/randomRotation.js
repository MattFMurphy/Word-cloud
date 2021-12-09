/**
 * @param {*} start
 * @param {*} limit
 * @returns Return a random degree between start and limit, rounded to the nearest 10
 */
const randomRotation = (start = 0, limit = 360) => {
  const deg = Math.floor(Math.random() * limit) + start;
  //const randomBoolean = Math.random() > 0.5;
  //if(deg > 90){}
  return Math.round(deg / 10) * 10;
};

export { randomRotation };
