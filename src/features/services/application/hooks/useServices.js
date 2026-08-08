import { serviceRepository } from "../../infrastructure/serviceRepository";

export function useServices() {
  return {
    services: serviceRepository.getAll(),
  };
}
