import { portfolio_qualification } from "@/types/cms-portfolio-types";
import React from "react";
import QualificationsTableColumn from "./QualificationsTableColumn";

const QualificationTable = ({
  qualifications,
}: {
  qualifications: portfolio_qualification[];
}) => {
  return (
    <table className="w-full max-w-[400px]">
      <thead></thead>
      <tbody>
        {qualifications.map(({ name, acquisitionDate }) => (
          <QualificationsTableColumn
            key={name}
            name={name}
            acquisitionDate={acquisitionDate}
          />
        ))}
      </tbody>
    </table>
  );
};

export default QualificationTable;
