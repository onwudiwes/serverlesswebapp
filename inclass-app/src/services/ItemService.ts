import http from "../http-common";
import { item } from "../types/Item";

const getAll = async () => {
  return http.get<Array<item>>("/movies");
};

const get = async (id: string) => {
  return http.get<item>(`/movies/${id}`);
};

const put  = async (data: item) => {
  return http.put<item>(`/movies`,data)
}
const remove = async (id: string) => {
  return http.delete(`/movies/${id}`);
};

const ItemService = {
  getAll,
  get,
  remove,
  put
};

export default ItemService;
