import { PROJECT_INFO } from "@/app/_lib/projectInfo";

export type ProjectItem = typeof PROJECT_INFO[0];

export interface FormattedProjectItem extends ProjectItem {
    urlName: string;
    directory: string;
}

export interface ProjectDisplayProps {
    formattedData: FormattedProjectItem[];
} 