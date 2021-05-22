export interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

export interface GetUsersResponse {
  data: User[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
