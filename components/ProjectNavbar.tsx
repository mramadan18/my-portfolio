import { Category } from "@/type";

export const NavItem: React.FunctionComponent<{
  value: Category;
  navActive: string;
  handleFilterCategory: Function;
}> = ({ value, navActive, handleFilterCategory }) => {
  return (
    <li
      className={`cursor-pointer hover:text-green capitalize ${
        navActive === value ? "text-green" : ""
      }`}
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectNavbar = ({ handleFilterCategory, navActive }: any) => {
  return (
    <ul className="space-x-3 flex px-3 py-2 list-none overflow-x-auto">
      <NavItem
        value="all"
        navActive={navActive}
        handleFilterCategory={handleFilterCategory}
      />
      <NavItem
        value="vanilla js"
        navActive={navActive}
        handleFilterCategory={handleFilterCategory}
      />
      <NavItem
        value="react"
        navActive={navActive}
        handleFilterCategory={handleFilterCategory}
      />
      <NavItem
        value="nextjs"
        navActive={navActive}
        handleFilterCategory={handleFilterCategory}
      />
    </ul>
  );
};

export default ProjectNavbar;
