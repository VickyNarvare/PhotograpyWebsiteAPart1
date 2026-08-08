import { services } from "../domain/data/serviceData";

export const serviceRepository = {
  getAll() {
    return services;
  },
};
