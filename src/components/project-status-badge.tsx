import { ProjectStatus } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

const statusConfig: Record<ProjectStatus, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline'; className?: string }> = {
  active: {
    label: 'Active',
    variant: 'default',
    className: 'bg-green-500/20 text-green-500 hover:bg-green-500/30 border-green-500/50',
  },
  in_progress: {
    label: 'In Progress',
    variant: 'secondary',
    className: 'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 border-yellow-500/50',
  },
  archived: {
    label: 'Archived',
    variant: 'outline',
    className: 'bg-slate-500/20 text-slate-400 hover:bg-slate-500/30 border-slate-500/50',
  },
};

export function ProjectStatusBadge({ status, className }: ProjectStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge
      variant={config.variant}
      className={cn(config.className, className)}
    >
      {config.label}
    </Badge>
  );
}
