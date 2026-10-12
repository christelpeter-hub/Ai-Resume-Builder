import axios from "axios";

const axiosInstance = axios.create({
      baseURL:"https://server-aibuilder.onrender.com",
      timeout:10000
})

axiosInstance .interceptors.response.use(
      (response)=>{
            console.log("API Response Recieved!!!");
            return response    
      },
      (error)=>{
            if (error.response) {
                  const status  = error.response.status
                  if (status==401) {
                        console.log("unauthorised access - Redirect to Login page ");      
                  }else if (status==404){
                        console.log("API Not found ");  
                  }else if (status==500){
                        console.log("server Error");    
                  }else if (error.request){
                        console.log("No response from server");
                  }else {
                        console.log("Error"+error.message);
                        
                  }
                  return Promise .reject(error)

            }
      }
)
export default axiosInstance