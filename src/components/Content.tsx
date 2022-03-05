import { ReactNode } from "react";

const Content = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="content min-h-screen px-6 md:px-12 lg:px-64">
      {children}
    </div>
  );
};
export default Content;
