import { API } from "../config";

export default {
  signup: (user) => {
    return fetch(`${API}/user/signup`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else
        return {
          isAuthenticated: false,
          user: { username: "", email: "", contact: "" },
        };
    });
  },
  signin: (user) => {
    return fetch(`${API}/user/signin`, {
      method: "post",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      return res.json().then((data) => data);
    });
  },
};