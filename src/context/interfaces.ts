interface IFilter {
  title: string;
  skills: string[];
  description: string;
  type: string;
  salary: [number, number];
  location: [string, boolean];
  ecosystem: string[];
  benefits: [boolean];
}

export { IFilter as Filter };
