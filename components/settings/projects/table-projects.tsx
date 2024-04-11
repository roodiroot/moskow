import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { Projects } from '@prisma/client';
import RemoveProjectButton from './remove-project';

interface TableProjectsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  projects: Projects[] | null;
}

const TableProjects: React.FC<TableProjectsProps> = ({
  projects,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn('mt-4 mb-10', className)}>
      <Table>
        <TableCaption>Список всех загруженных проектов.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Название</TableHead>
            <TableHead className="w-[100px]">Создано</TableHead>
            <TableHead>Описание</TableHead>
            <TableHead className="w-[200px]">Сайт</TableHead>
            <TableHead className="w-5"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects?.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>
                <span className="line-clamp-1">
                  {JSON.stringify(project?.createdAt)}
                </span>
              </TableCell>
              <TableCell>
                <span className="line-clamp-1">{project.description}</span>
              </TableCell>
              <TableCell>
                <a
                  href={project.link || ''}
                  target="_blank"
                  className=" line-clamp-1 text-sky-600 cursor-pointer underline"
                >
                  {project.link}
                </a>
              </TableCell>
              <TableCell>
                <RemoveProjectButton projectId={project.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableProjects;
