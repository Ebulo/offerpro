"use client";

export const getQueryParams = () => {
  const qpl = localStorage.getItem("queryParams");
  if (qpl) return JSON.parse(qpl);
  else return false;
};
