import { GETDATA } from "../actions/actionTypes";

import ImgItem from "../../Image/imgItem.jpg";
import ImgDetail from "../../Image/imgDetail.jpg";
import ImgDetailOne from "../../Image/imgDetailOne.jpg";
import ImgDetailTwo from "../../Image/imgDetailTwo.jpg";

const initialState = {
  data: [
    {
      imgSource: ImgItem,
      content: "Váy cổ V",
      price: "399,000đ",
      imgDetail: ImgDetail,
      imgDetailOne: ImgDetailOne,
      imgDetailTwo: ImgDetailTwo,
      _id: "T1",
    },
    {
      imgSource: ImgItem,
      content: "Chân váy cạp chun",
      price: "399,000đ",
      imgDetail: ImgDetail,
      imgDetailOne: ImgDetailOne,
      imgDetailTwo: ImgDetailTwo,
      _id: "T2",
    },
    {
      imgSource: ImgItem,
      content: "Váy nhăn cổ tròn nhún eo",
      price: "399,000đ",
      imgDetail: ImgDetail,
      imgDetailOne: ImgDetailOne,
      imgDetailTwo: ImgDetailTwo,
      _id: "T3",
    },
    {
      imgSource: ImgItem,
      content:
        "Váy mixi 2 dây hoạ tiết chun eo jashjd jhasdbas jhasdb ạdba sabd ",
      price: "399,000đ",
      imgDetail: ImgDetail,
      imgDetailOne: ImgDetailOne,
      imgDetailTwo: ImgDetailTwo,
      _id: "T4",
    },
  ],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETDATA: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default dataReducer;
