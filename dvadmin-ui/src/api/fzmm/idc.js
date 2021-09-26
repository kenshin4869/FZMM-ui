import request from "@/utils/request";

// 查询机房列表
export function listIdc(query) {
  return request({
    url: "/fzmm/idc/",
    method: "get",
    params: query
  });
}

// 查询机房详细
export function getIdc(idcId) {
  return request({
    url: "/fzmm/idc/" + idcId + "/",
    method: "get"
  });
}

// 新增机房
export function addIdc(data) {
  return request({
    url: "/fzmm/idc/",
    method: "post",
    data: data
  });
}

// 修改机房
export function updateIdc(data) {
  return request({
    url: "/fzmm/idc/" + data.id + "/",
    method: "put",
    data: data
  });
}

// 删除机房
export function delIdc(idcId) {
  return request({
    url: "/fzmm/idc/" + idcId + "/",
    method: "delete"
  });
}

// 导出机房
export function exportIdc(query) {
  return request({
    url: "/fzmm/idc/export/",
    method: "get",
    params: query
  });
}

// 下载机房导入模板
export function importTemplate() {
  return request({
    url: "/fzmm/idc/importTemplate/",
    method: "get"
  });
}

// 机房导入
export function importsIdc(data) {
  return request({
    url: "/fzmm/idc/importTemplate/",
    method: "post",
    data: data
  });
}
