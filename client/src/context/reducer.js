export const types = {
  SIGNUP_USER: "SIGNUP_USER",
  SIGNIN_USER: "SIGNIN_USER",
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case types.SIGNIN_USER:
      return state;
    case types.SIGNUP_USER:
      return state;
    default:
      return state;
  }
};
