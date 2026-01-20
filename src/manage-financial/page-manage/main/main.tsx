import UseFeature from "./hooks/UseFeature";
import Table_MUIX from "../components/Table_MUIX";
import { GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";

const ManageFinancialMainPage = () => {

const { dataTransectionLoading, dataTransection } = UseFeature();

 const columns: GridColDef[] = [
    // { field: "id", headerName: "ID", width: 90 },
    {
      field: "create_at",
      headerName: "Created At",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params: any) => {
        return (
          <div className="text-sm md:text-base overflow-hidden text-ellipsis">
            {dayjs(params.value).format("YYYY-MM-DD HH:mm:ss")}
          </div>
        );
      },
    },

    {
      field: "msh_id_code",
      headerName: "Code",
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "msh_name_eng",
      headerName: "Name",
      width: 350,
      headerAlign: "center",
    },
    {
      field: "mhr_dept",
      headerName: "Dept",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "msh_cc",
      headerName: "Cost Center",
      width: 450,
      headerAlign: "center",
    },
   
    {
      field: "msh_car_infor",
      headerName: "Car Info",
      width: 250,
      headerAlign: "center",
      align: "center",
    },

  
  ];

return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Financial Main Page</h1>   
        <Table_MUIX
        datas={dataTransection}
        columns={columns}
        not_show_Count={false}
        loading={dataTransectionLoading}
        height={450}
      />
      </div>
 )
}

export default ManageFinancialMainPage;