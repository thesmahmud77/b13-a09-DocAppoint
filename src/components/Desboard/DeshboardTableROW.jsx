import { Button, Table } from "@heroui/react";

const DeshboardTableROW = ({ appointPatients, index }) => {
  const { patientName, time, status } = appointPatients;

  return (
    <Table.Row>
      <Table.Cell>{index + 1}</Table.Cell>
      <Table.Cell>{patientName}</Table.Cell>
      <Table.Cell>{time}</Table.Cell>
      <Table.Cell>
        <Button variant="bordered">{status}</Button>
      </Table.Cell>
      <Table.Cell className="flex gap-2">
        <Button color="primary">Edit</Button>
        <Button color="danger">Delete</Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default DeshboardTableROW;
