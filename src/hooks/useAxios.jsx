import axios from "axios";
import { REQUEST } from "./useEnv";

export const useAxios = () => axios.create({ baseURL: REQUEST });
