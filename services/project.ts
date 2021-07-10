import { Service, ServiceContext } from '@/core/types/service';

interface ProjectService extends Service {
  getProjects: () => Promise<Array<Project>>;
  getProject: (slug: string) => Promise<Project>;
  createProject: (form: Project) => Promise<Project>;
  updateProject: (slug: string, form: Project) => Promise<Project>;
  deleteProject: (slug: string) => Promise<Project>;
}

// Pass context from Vue component or Vuex
// const context = useContext();
// const { getProjects } = useProjectService(context);
export const useProjectService = ({ $clientApi, $authApi }: ServiceContext): ProjectService => {
  const endpoint = '/projects';

  const getProjects = (): Promise<Array<Project>> => $clientApi.$get(endpoint);

  const getProject = (slug: string): Promise<Project> => $clientApi.$get(`${endpoint}/${slug}`);

  const createProject = (form: Project): Promise<Project> => $authApi.$post(endpoint, form);

  const updateProject = (slug: string, form: Project): Promise<Project> => $authApi.$patch(`${endpoint}/${slug}`, form);

  const deleteProject = (slug: string): Promise<Project> => $authApi.$delete(`${endpoint}/${slug}`);

  return {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
  };
};
