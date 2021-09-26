import request from "@/utils/request";

// 查询机房能效列表
export function listIdcEnergy(query) {
  return request({
    url: "/fzmm/idcenergy/",
    method: "get",
    params: query
  });
}

// 查询机房能效详细
export function getIdcEnergy(idcEnergyId) {
  return request({
    url: "/fzmm/idcenergy/" + idcEnergyId + "/",
    method: "get"
  });
}

// 新增机房
export function addIdcEnergy(data) {
  return request({
    url: "/fzmm/idcenergy/",
    method: "post",
    data: data
  });
}

// 修改机房
export function updateIdcEnergy(data) {
  return request({
    url: "/fzmm/idcenergy/" + data.id + "/",
    method: "put",
    data: data
  });
}

// 删除机房
export function delIdcEnergy(idcEnergyId) {
  return request({
    url: "/fzmm/idcenergy/" + idcEnergyId + "/",
    method: "delete"
  });
}

// 导出机房
export function exportIdcEnergy(query) {
  return request({
    url: "/fzmm/idcenergy/export/",
    method: "get",
    params: query
  });
}

// 下载机房导入模板
export function importTemplate() {
  return request({
    url: "/fzmm/idcenergy/importTemplate/",
    method: "get"
  });
}

// 机房导入
export function importsIdcEnergy(data) {
  return request({
    url: "/fzmm/idcenergy/importTemplate/",
    method: "post",
    data: data
  });
}
