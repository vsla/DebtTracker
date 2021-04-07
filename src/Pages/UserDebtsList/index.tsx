import DashboardLayout from "Components/Dasboard";
import UsersTable from "./Components/DebtsTable";

export default function UsersList() {
  return (
    <DashboardLayout type="Débitos">
      <UsersTable />
    </DashboardLayout>
  );
}
