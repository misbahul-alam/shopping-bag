import axios from "./axios";

interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}
export const fetchAllCategories = async () => {
  try {
    const response = await axios.get("/categories");
    if (response.status === 200) {
      return {
        categories: response.data as Category[],
        message: "Categories fetched successfully",
      };
    }
    return { categories: [], message: "No categories found" };
  } catch (error) {
    return { categories: [], message: "Something went wrong!" };
  }
};

export const fetchCategoryById = async (id: string) => {
  try {
    const response = await axios.get("/categories/" + id);
    if (response.status === 200) {
      return {
        ...(response.data as Category),
        message: "Categories fetched successfully",
      };
    }
    return { categories: [], message: "No categories found" };
  } catch (error) {
    return { categories: [], message: "Something went wrong!" };
  }
};

export const createCategory = async (data: FormData) => {
  try {
    const response = await axios.post("/categories", data);
    console.log(response);
    if (response.status === 200) {
      return {
        ...(response.data as Category),
        message: "Category created successfully",
      };
    }
    return { message: response.data.message };
  } catch (error) {
    return { message: "Something went wrong!" };
  }
};
