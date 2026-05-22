import { Tabs } from "@heroui/react";

const allDoctor = async () => {
  const res = await fetch("");
  if (!res.ok) return {};
  const data = await res.json();
  return data || {};
};

export function SecondaryVertical() {
  return <div></div>;
}
