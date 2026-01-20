import axios from "axios";

import Swal from "sweetalert2";
// import Swal_Error from "./Swal_Error";
const GetDataTransection = async () => {
  const url = `${
    import.meta.env.VITE_IP_API_NEST
  }/manage-financial/summary/get-data`;
  const params = {  };

  try {
    const response = await axios.get(url, { params });
    if (response.status === 200) {
      if (response.data.status === "OK") {
        Swal.close();
        return response.data;
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "ไม่มีข้อมูลรหัสพนักงานในระบบ กรุณากรอกใหม่",
        });

        return response.data;
      }
    }
  } catch (err: any) {
    Swal.close();
    return null;
  }
};

export default GetDataTransection;
