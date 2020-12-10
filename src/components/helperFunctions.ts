import { MyFormData } from "../../types";
import download from 'downloadjs';
import axios from "axios";

export const executePdfRequest = async (requestData: any) => {
  // console.log("jjson: ",JSON.stringify(requestData));
  try {
    const data = JSON.stringify(requestData);
    const response = await axios({
      method: "POST",
      url: "https://europe-west1-aeco-gcp.cloudfunctions.net/pdfGenerator",
      data: data,      
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/pdf",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
        "x-api-key": "SpN95swW5qAdDllm3PIB",
      },
      // do this so that an error is only returned if the statuscode is >= 400
      validateStatus: function (status) {
        return status <= 499;
      },
    });
    if (response.status !== 200) {
      // console.log("success stuff");

    }
    return response;
  } catch (err) {
    console.error("something went wrong when posting to the pdf api", err);
    return err;
  }
};

export const downloadPDF = (response : any) => {
  const content = response.headers['content-type'];
  const pdfData = response.data;
  download(pdfData, "dum.pdf", content);
};

export const executeTaxRequest = async (requestData?: MyFormData) => {
  // console.log("jjson: ",JSON.stringify(requestData));
  try {
    const response = await axios({
      method: "POST",
      url: "http://localhost:3001/vennootschap",
      data: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      // // do this so that an error is only returned if the statuscode is >= 400
      // validateStatus: function (status) {
      //   return status <= 399;
      // },
    });
    if (response.status === 200) {
      // console.log("success stuff");
    }
    return response;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const executeMailRequest = async(requestData : any) => {
  try {
    const data = JSON.stringify(requestData);
    const response = await axios({
      method: "POST",
      url: "http://localhost:5001/aeco-gcp/europe-west1/sendMail",
      data: data,      
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
        "x-api-key": "SpN95swW5qAdDllm3PIB",
      },
      // do this so that an error is only returned if the statuscode is >= 400
      validateStatus: function (status) {
        return status <= 499;
      },
    });
    if (response.status !== 200) {
      // console.log("success stuff");

    }
    return response;
  } catch (err) {
    console.error("something went wrong when posting to the pdf api", err);
    return err;
  }
};
