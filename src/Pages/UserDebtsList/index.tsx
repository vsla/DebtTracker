import DashboardLayout from "Components/Dasboard";
import DebtsTable from "./Components/DebtsTable";

export default function UserDebtsList() {
  return (
    <DashboardLayout
      back={{ showBackButton: true, backTitle: "voltar", to: "/usuarios" }}
      title="Lista de débitos"
      type="Débitos"
    >
      <DebtsTable />
    </DashboardLayout>
  );
}
