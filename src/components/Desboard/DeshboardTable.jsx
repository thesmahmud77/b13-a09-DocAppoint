"use client";
import { Table } from "@heroui/react";
import DeshboardTableROW from "./DeshboardTableROW";

const appointment = async () => {
  const res = await fetch("http://localhost:8080/appointments");
  if (!res.ok) return {};
  const data = await res.json();
  return data || [];
};

const DeshboardTable = async () => {
  const appointmentData = await appointment();
  return (
    <div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Se No</Table.Column>
              <Table.Column>Patient Name</Table.Column>
              <Table.Column>Consultent Time</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>

            <Table.Body>
              {appointmentData.map((appointPatients, index) => (
                <DeshboardTableROW
                  appointPatients={appointPatients}
                  index={index}
                  key={appointPatients._id}
                />
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default DeshboardTable;
