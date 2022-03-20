interface IFilter {
  title: string;
  skills: string[];
  description: string;
  type: string;
  salary: [number, number];
  location: [string, boolean];
  experience: number;
  ecosystem: string[];
  benefits: [boolean];
}

export { IFilter as Filter };
