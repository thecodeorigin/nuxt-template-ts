import { useContext } from '@nuxtjs/composition-api';
import { Service } from '@/types/service';

interface ProjectService extends Service {
  getProjects: () => Promise<Array<Project>>;
  getProject: (slug: string) => Promise<Project>;
  createProject: (form: Project) => Promise<Project>;
  updateProject: (slug: string, form: Project) => Promise<Project>;
  deleteProject: (slug: string) => Promise<Project>;
}

// You must pass "this" like useAuthService(this) in Vuex to get the $axios instance
export const useProjectService = (context: any): ProjectService => {
  const { $axios } = context || useContext();

  const getProjects = (): Promise<Array<Project>> => $axios.$get('/projects');

  const getProject = (slug: string): Promise<Project> => $axios.$get(`/projects/${slug}`);

  const createProject = (form: Project): Promise<Project> => $axios.$post('/projects', form);

  const updateProject = (slug: string, form: Project): Promise<Project> => $axios.$patch(`/projects/${slug}`, form);

  const deleteProject = (slug: string): Promise<Project> => $axios.$delete(`/projects/${slug}`);

  return {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
  };
};
