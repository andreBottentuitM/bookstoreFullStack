import qs from "qs";

const BASEAPI = "http://localhost:5001";

const apiFetchGet = async (endPoint: string, body = []) => {
  const res = await fetch(`${BASEAPI + endPoint}?${qs.stringify(body)}`);
  const json = await res.json();

  return json;
};

const apiFetchPost = async (
  endPoint: string /*url */,
  body: {} /*informação passada pelo usuário */
) => {
  const res = await fetch(BASEAPI + endPoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }
  
  return json;
};

const bookstoreApi = {
  getBooks: async () => {
    const json = await apiFetchGet("/books");
    return json.books;
  },

  getSearch: async (valueSearch: string | null) => {
    const json = await apiFetchGet("/search", valueSearch as any);
    return json;
  },

  getLecture: async (lectureType: string | null) => {
    const json = await apiFetchGet("/lecture", lectureType as any);
    return json;
  },
  login: async (email: string, password: string) => {
    // fazer consulta ao webservice

    const json = await apiFetchPost("/user/signin", { email, password });
    return json;
  },
  register: async ({
    name,
    cpf,
    phone,
    email,
    cep,
    street,
    numberResidence,
    complement,
    city,
    neighbourhood,
    state,
    date,
    password,
  }: any) => {
    const json = await apiFetchPost("/user/signup", {
      name,
      cpf,
      phone,
      email,
      cep,
      street,
      numberResidence,
      complement,
      city,
      neighbourhood,
      state,
      date,
      password,
    });
    return json;
  },
};

export default () => bookstoreApi;
