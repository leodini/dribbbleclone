import api from "../api";
import JWT from "../helpers/jwt";

export const types = {
  SIGNUP_USER: "SIGNUP_USER",
  SIGNIN_USER: "SIGNIN_USER",
};

export const userReducer = async (state, action) => {
  switch (action.type) {
    case types.SIGNIN_USER:
      const form = {
        username: action.username,
        password: action.password,
      };

      try {
        action.loading = true;

        const {
          data: { token },
        } = await api.post("/signin", form);

        JWT.storeJwt(token);

        state.token = JWT.readToken();

        const { sub } = JWT.parseJwt(token);

        state.username = sub;

        action.loading = false;
      } catch (err) {
        console.log(err);

        action.error = true;
      }
      return;
    case types.SIGNUP_USER:
      console.log(state, action);
      return state;
    default:
      return state;
  }
};
