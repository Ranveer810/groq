import { TabBar } from "./tabbar";

export const Header = () => {
  return (
    <div className="fixed right-0 left-0 w-full top-0 bg-white dark:bg-zinc-950 z-10">
      <TabBar />
    </div>
  );
};
