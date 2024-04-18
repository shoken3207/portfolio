"use client";
import { Rating } from "@mui/material";
import React from "react";

const SkillItem = ({ name, level }: { name: string; level: number }) => {
  return (
    <tr>
      <td title={name} align="center">
        {name}
      </td>
      <td align="center">
        <Rating value={level} readOnly precision={0.5} />
      </td>
    </tr>
  );
};

export default SkillItem;
