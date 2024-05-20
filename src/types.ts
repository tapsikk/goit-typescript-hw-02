export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

export interface ApiResponse {
  total_pages: number;
  results: Image[];
}
