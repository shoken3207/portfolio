const QualificationsTableColumn = ({
  name,
  acquisitionDate,
}: {
  name: string;
  acquisitionDate: string;
}) => {
  const date = new Date(acquisitionDate);
  const formatDate = `${date.getFullYear()}年${
    date.getMonth() + 1
  }月${date.getDate()}日`;
  return (
    <tr key={name} className="text-base sm:text-xl ">
      <td className="p-1">{name}</td>
      <td className="p-1">{formatDate}に取得</td>
    </tr>
  );
};

export default QualificationsTableColumn;
