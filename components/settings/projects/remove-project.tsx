'use client';

import { removeProject } from '@/actions/projects/remove-project';
import { cn } from '@/lib/utils';
import { TrashIcon } from '@radix-ui/react-icons';
import { useTransition } from 'react';

interface RemoveProjectButtonProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  projectId: string;
}

const RemoveProjectButton: React.FC<RemoveProjectButtonProps> = ({
  projectId,
  children,
}) => {
  const [isPending, startTransition] = useTransition();

  const handleRemoveProject = () => {
    startTransition(() => {
      removeProject(projectId);
    });
  };
  return (
    <div
      onClick={handleRemoveProject}
      className={cn(
        'bg-gray-100 p-1 rounded-md cursor-pointer group dark:bg-accent-300',
        isPending && 'bg-black'
      )}
    >
      <TrashIcon className="ml-auto w-5 h-5 cursor-pointer text-accent-300 group-hover:text-red-500 transition-colors dark:text-white/60 dark:group-hover:text-red-500" />
    </div>
  );
};

export default RemoveProjectButton;
