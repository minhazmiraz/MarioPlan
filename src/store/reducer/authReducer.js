const initstate = {};

const authReducer = (state = initstate, action) => {
  console.log("auth", action);
  return state;
};

export default authReducer;
