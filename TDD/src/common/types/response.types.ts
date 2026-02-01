export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  timestamp?: string;
}

export interface ErrorResponse {
  success: false;
  message: string;
  error?: string;
  timestamp: string;
}
