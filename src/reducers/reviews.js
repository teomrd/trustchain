import { reviews } from "../sampleData/reviews";
import faker from "faker";

const initialState = reviews;

export default (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_REVIEW":
      return [
        {
          text: action.review,
          isGood: true,
          name: faker.name.findName(),
          title: faker.internet.email(),
          avatar: faker.image.avatar()
        },
        ...state
      ];
    default:
      return state;
  }
};
