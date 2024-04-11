import { getAllProjects } from '@/data/all-projects';
import AddProjectsForm from '@/components/settings/projects/add-projects-form';
import TableProjects from '@/components/settings/projects/table-projects';

const AddProjectPage = async () => {
  const projects = await getAllProjects();

  return (
    <div className="mt-10">
      <p className="text-3xl font-semibold">Проекты</p>
      <TableProjects projects={projects} />
      <AddProjectsForm />
    </div>
  );
};

export default AddProjectPage;
