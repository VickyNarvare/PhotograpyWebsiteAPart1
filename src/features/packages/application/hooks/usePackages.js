import { packageRepository } from "../../infrastructure/packageRepository";

export function usePackages() {
  return {
    packages: packageRepository.getAll(),
  };
}
