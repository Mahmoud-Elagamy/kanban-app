import { Badge } from "@/components/ui/badge";
import { SidebarGroupLabel } from "@/components/ui/sidebar";
import useKanbanStore from "@/stores/use-kanban-store";

const SidebarLabel = () => {
  const { boards } = useKanbanStore();

  return (
    <SidebarGroupLabel className="justify-between">
      Boards
      {boards.length > 0 && (
        <Badge variant="outline" className="h-5 px-2 text-[0.625rem]">
          {boards.length}
        </Badge>
      )}
    </SidebarGroupLabel>
  );
};

export default SidebarLabel;
