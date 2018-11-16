export interface Project {
  id: number;
  fundraiser: string;
  email: string;
  name: string;
  category_id: number;
  brief: string;
  started_at: string;
  ended_at: string;
  curr_amount: number;
  goal_amount: number;
  backer: number;
  description: string;
  feedback: string;
  comment: string;
  img_path: string;
  relative_web: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  category: string;
}
