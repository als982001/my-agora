const BASE_PATH = "http://localhost:";
const PORT = 4000;
const endPoint = "discussions";

export const getDiscussions = async () => {
  const response = await fetch(`${BASE_PATH}${PORT}/${endPoint}`);
  const json = await response.json();

  return json;
};

export const getDiscussionOfId = async (id) => {
  const response = await fetch(`${BASE_PATH}${PORT}/${endPoint}/${id}`);
  const json = await response.json();

  return json;
};
