import DashboardLayout from "Components/Dasboard";
import UsersTable from "./Components/UsersTable";

export default function UsersList() {
  return (
    <DashboardLayout type="Débitos" title="Lista de usuários">
      <UsersTable />
    </DashboardLayout>
  );
}
