import { DECRE, INCRE } from "./actionTypes";

export const incre = () => (dispath) => {
  dispath({
    type: INCRE,
  });
};
