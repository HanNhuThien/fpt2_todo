import { isStringBlank } from "../utils/ValidateUtils";

const axios = require("axios");

const METHOD_POST = "post";
const METHOD_GET = "get";
const METHOD_PUT = "put";
const METHOD_DELETE = "delete";

const BASE_URL = "http://localhost:3004";

const BASE_URL_TODOS = BASE_URL + "/todos";

export const dbFetchTodos = (callback) => {
  const config = {
    method: METHOD_GET,
    url: `${BASE_URL_TODOS}?_sort=id&_order=desc`,
    data: {},
  };

  doRequest(config, (data) => {
    callback(data);
  });
};

export const dbFilterTodos = (queryString, callback) => {
  if (isStringBlank(queryString)) {
    dbFetchTodos(callback);
    return;
  }
  dbFetchTodos((todos) => {
    const filteredTodos = todos.filter(
      (todo) =>
        todo.title.includes(queryString) ||
        todo.description.includes(queryString)
    );
    callback(filteredTodos);
  });

  // const config = {
  //   method: METHOD_GET,
  //   url: `${BASE_URL_TODOS}?title_like=${queryString}`,
  //   data: {},
  // };

  // doRequest(config, (data) => {
  //   callback(data);
  // });
};

export const dbUpdateTodo = (todo, filterString, callback) => {
  const config = {
    method: METHOD_PUT,
    url: `${BASE_URL_TODOS}/${todo.id}`,
    data: todo,
  };

  doRequest(config, () => {
    dbFilterTodos(filterString, (data) => {
      callback(data);
    });
  });
};

export const dbDeleteTodo = (todoId, filterString, callback) => {
  const config = {
    method: METHOD_DELETE,
    url: `${BASE_URL_TODOS}/${todoId}`,
    data: {},
  };

  doRequest(config, () => {
    dbFilterTodos(filterString, (data) => {
      callback(data);
    });
  });
};

export const dbAddTodo = (todo, filterString, callback) => {
  const config = {
    method: METHOD_POST,
    url: BASE_URL_TODOS,
    data: { ...todo, id: undefined },
  };

  doRequest(config, () => {
    dbFilterTodos(filterString, (data) => {
      callback(data);
    });
  });
};

async function doRequest(config, callback) {
  try {
    const response = await axios(config);
    callback(response?.data);
  } catch (error) {
    console.error(error);
    console.log("Error at config:");
    console.log(config);
  }
}
