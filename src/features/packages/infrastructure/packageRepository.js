import { packages } from "../domain/data/packageData";

export const packageRepository = {
  getAll() {
    return packages;
  },
};
