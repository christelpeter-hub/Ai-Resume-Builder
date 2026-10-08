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