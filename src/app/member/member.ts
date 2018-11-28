import { Project } from 'src/app/project/project';

export interface Member {
  name: string;
  phone: string;
  description: Text;
  sex: string;
  address: string;
  birth: Date;
  photo: any;
  followingProjects?: Project[];
  raisingProjects?: Project[];
}
