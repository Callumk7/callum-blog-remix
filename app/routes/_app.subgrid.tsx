export default function SubGridTestRoute() {
  return (
    <div className="grid-rows-12 grid grid-cols-3 gap-1 bg-slate-900">
      <SubItem count={2} />
      <SubItem count={4} />
      <SubItem count={5} />
      <SubItem count={1} />
      <SubItem count={3} />
      <SubItem count={4} />
    </div>
  );
}

const SubItem = ({ count }: { count: number }) => {
  const items = Array.from({ length: count }).map((_, index) => <p key={index}>stuff</p>);
  return (
    <div className="grid-rows-subgrid row-span-3 grid grid-cols-1 gap-1 bg-red-800">
      <div className="grid-rows-subgrid grid bg-blue-800">{items}</div>
      <div className="grid-rows-subgrid grid bg-green-800">{items}</div>
      <div className="grid-rows-subgrid grid bg-yellow-800">{items}</div>
    </div>
  );
};
