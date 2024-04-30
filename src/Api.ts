import data from "./assets/data.json";

export const getAccommodationById = (id: string) => {
  return data.find((item) => item.id === id);
};

export const getAccommodationsList = () => {
  return data.map((item) => ({
    title: item.title,
    cover: item.cover,
    id: item.id,
  }));
};
