import { GETDATA } from "./actionTypes";

export const getData = () => (dispath) => {
  dispath({
    type: GETDATA,
  });
};
