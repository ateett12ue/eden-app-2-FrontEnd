import { Project, RoleType } from "@graphql/eden/generated";
import { createContext } from "react";

import { LaunchProjectModal, ProjectAction } from "./LaunchProjectProvider";
export interface LaunchProjectContextType {
  project?: Project;
  dispatchProject?: React.Dispatch<ProjectAction>;
  openModal?: LaunchProjectModal | null;
  setOpenModal?: any;
  selectedRole?: RoleType | null;
  setSelectedRole?: any;
}

export const LaunchProjectContext = createContext<LaunchProjectContextType>({});
