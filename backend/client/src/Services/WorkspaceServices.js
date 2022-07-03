import { API } from "../config.js";

export default {
  getAllWorkSpaces: (data) => {
    return fetch(`${API}/workspace/getAllWorkSpaces`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json().then((data) => data);
    });
  },
  createWS: (data) => {
    return fetch(`${API}/workspace/create`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => data));
  },
  getAllNotes: (data) => {
    return fetch(`${API}/workspace/getWSNotes`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => data));
  },
  getAllLinks: (data) => {
    return fetch(`${API}/workspace/getWSLinks`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => data));
  },
  getAllTodo: (data) => {
    return fetch(`${API}/workspace/getWSTodos`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => data));
  },
  getAllCollaborators: (data) => {
    return fetch(`${API}/workspace/getWSCollaborators`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => data));
  },
  getAllMessages: (data) => {
    return fetch(`${API}/workspace/getAllMessages`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => data));
  },
  getAllNotesOfUser: (data) => {
    return fetch(`${API}/workspace/getAllNotesOfUser`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => data));
  },
  getAllTodosOfUser: (data) => {
    return fetch(`${API}/workspace/getAllTodosOfUser`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => data));
  },
  getAllLinksOfUser: (data) => {
    return fetch(`${API}/workspace/getAllLinksOfUser`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => data));
  },
  getAllWSFromUID: (data) => {
    return fetch(`${API}/workspace/getAllWSFromUID`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => data));
  },
  deleteWS: (data) => {
    return fetch(`${API}/workspace/deleteWS`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => data));
  },
  getWSFrom_ID: (data) => {
    return fetch(`${API}/workspace/getWSFrom_ID`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json().then((data) => data));
  },
};
