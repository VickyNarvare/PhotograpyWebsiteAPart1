export function isProjectMatch(project, id) {
  return project.id === Number(id) || project.slug === id;
}
