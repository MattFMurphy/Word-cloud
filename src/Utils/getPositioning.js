/**
 *
 * @param {*} data array input
 * @returns 2d  co-ordinates array with values between 0 and a 90
 */
const getPositioning = (data) => {
  let positionArray = [];
  data.forEach((element, index) => {
    let addition;

    if (index > 0) {
      do {
        addition = [
          Math.floor(Math.random() * 90),
          Math.floor(Math.random() * 90),
        ];
      } while (
        positionArray.find(
          (position) =>
            position[0] === addition[0] || position[1] === addition[1] //while position array contains dupes
        )
      );
    } else {
      addition = [
        Math.floor(Math.random() * 90),
        Math.floor(Math.random() * 90),
      ];
    }

    positionArray = [...positionArray, addition];
  });
  return positionArray;
};
export { getPositioning };
