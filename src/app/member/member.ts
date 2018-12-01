import { Project, Feedback } from 'src/app/project/project';

export interface Member {
  id: number;
  name: string;
  phone: string;
  description: Text;
  sex: string;
  address: string;
  birth: Date;
  photo: any;
  profile_URL: string;
  followingProjects?: Project[];
  followingFeedbacks?: Feedback[];
  raisingProjects?: Project[];
}
