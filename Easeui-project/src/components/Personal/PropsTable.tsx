interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <table className="w-full">
        <thead className="">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold ">Prop</th>
            <th className="px-4 py-3 text-left text-sm font-semibold ">Type</th>
            <th className="px-4 py-3 text-left text-sm font-semibold ">
              Default
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold ">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 text-sm font-mono text-blue-600">
                {row.prop}
              </td>
              <td className="px-4 py-3 text-sm font-mono text-gray-600">
                {row.type}
              </td>
              <td className="px-4 py-3 text-sm font-mono text-gray-500">
                {row.default}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
