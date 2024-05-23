/* eslint-disable */
import service from "./baseRequest";

export const requestGet = (url: string, options: any) => {
  return service.get(url, options);
};

export const requestPost = (url: string, data: any, options: any) => {
  return service.post(url, data, options);
};

export const requestPut = (url: string, data: any, options: any) => {
  return service.put(url, data, options);
};

export const requestDelete = (url: string, options: any) => {
  return service.delete(url, options);
};

export const requestPatch = (url: string, data: any, options: any) => {
  return service.patch(url, data, options);
};
