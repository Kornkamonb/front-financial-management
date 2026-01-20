
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import GetDataTransection from "../funcs/GetDataTransection";
import Swal from "sweetalert2";


export const UseFeature = () => {

  const [dataTransection, setDataTransection] = useState<[]>([]);
  const [dataTransectionLoading, setDataTransectionLoading] = useState(false);




  const fetchDataTransection = async () => {
 
      setDataTransectionLoading(true);
      try {
        // await fetchOpInfo(inputOpID.trim());
        const result = await GetDataTransection();
        console.log(result);
        if (result && result.data.length > 0) {
        
          console.log(result);
          setDataTransection(result.data);
        
        }
      } finally {
        setDataTransectionLoading(false);
       
      }
    }
 
    

  useEffect(() => {
    fetchDataTransection();
  },[]);

 



  return {
   
    dataTransectionLoading,
    dataTransection

    
  };
};
