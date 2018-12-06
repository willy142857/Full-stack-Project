export interface Project {
  id?: number;
  raising_user_id: number;
  fundraiser: string;
  email: string;
  name: string;
  category_id: number;
  category_name: string;
  brief: string;
  started_at: string;
  ended_at: string;
  curr_amount?: number;
  goal_amount: number;
  backer?: number;
  description: string;
  feedbacks: Feedback[];
  comments?: Comment[];
  img_path: string;
  relative_web: string;
  created_at?: string;
  updated_at?: string;
}

export interface Category {
  id: number;
  category: string;
}

export interface Comment {
  profile_URL: string;
  username: string;
  rating: number;
  comment: string;
  date: string;
  stars: Boolean[];
}

export interface Feedback {
  id?: number;
  date: string;
  price: number;
  description: string;
  backer?: number;
  img_path?: any;
  updated_at?: string;
}

export interface ProjectPlus {
  id?: number;
  fundraiser: string;
  email: string;
  name: string;
  category_id: number;
  category_name: string;
  brief: string;
  started_at: string;
  ended_at: string;
  curr_amount?: number;
  goal_amount: number;
  backer?: number;
  description: string;
  feedbacks: Feedback[];
  comments?: Comment[];
  img_path: string;
  relative_web: string;
  created_at?: string;
  updated_at?: string;
  feedbackid?: number;
  feedbackdes?: string;
  feedbackprice?: number;
}
