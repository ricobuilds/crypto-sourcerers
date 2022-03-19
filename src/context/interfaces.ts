interface IFilter {
  title: string;
  skills: string[];
  description: string;
  type: string;
  salary: [number, number, boolean];
  location: [string, boolean];
  experience: number;
  ecosystem: string[];
}

export { IFilter as Filter };
