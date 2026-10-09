import axiosService from "../api/axioService";

export const saveResumeAPI = async(resumeDetails)=>{
      return await axiosService("POST","/resumes",resumeDetails)
}


export const viewResumeAPI = async(resumeId)=>{
      return await axiosService("GET",`/resumes/${resumeId}`,{})
}

export const getAllResumeAPI = async()=>{
      return await axiosService("GET",`/resumes`,{})
}


export const deleteResumeAPI = async(resumeId)=>{
      return await axiosService("DELETE",`/resumes/${resumeId}`,{})
}


export const editResumeAPI = async(resumeId,resumeDetails)=>{
      return await axiosService("PUT",`/resumes/${resumeId}`,resumeDetails)
}

export const downloadResumeAPI = async(resumeDetails)=>{
      return await axiosService("POST","/downloads",resumeDetails)
}

export const getAlldownloadAPI = async()=>{
      return await axiosService("GET","/downloads",{})
}