import data from "./assets/data.json";

/**
 * Retrieves an accommodation object by its ID.
 * @param id - The ID of the accommodation to retrieve.
 * @returns The accommodation object matching the specified ID, or undefined if not found.
 */
export const getAccommodationById = (id: string) => {
  return data.find((item) => item.id === id);
};

/**
 * Retrieves a list of accommodations.
 * @returns An array of accommodations with title, cover, and id properties.
 */
export const getAccommodationsList = () => {
  return data.map((item) => ({
    title: item.title,
    cover: item.cover,
    id: item.id,
  }));
};
