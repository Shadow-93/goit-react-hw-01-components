import React from "react";

import s from "./Statistics.module.css";

const randomBgColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const StatListItem = ({ label, percentage }) => {
  return (
    <li style={{ backgroundColor: randomBgColor() }} className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  );
};

export default StatListItem;
