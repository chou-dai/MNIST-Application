import { MNISTControllerApi } from "./api";
import { Configuration } from "./configuration";

const basePath = process.env.REACT_APP_API_PATH;
const option = {};

export const mnistApi = new MNISTControllerApi({ baseOptions: option, basePath: basePath } as Configuration);
