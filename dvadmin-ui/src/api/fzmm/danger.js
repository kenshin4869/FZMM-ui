import request from "@/utils/request";

// 查询机房列表
export function listDanger(query) {
  return request({
    url: "/fzmm/danger/",
    method: "get",
    params: query
  });
}

// 查询机房详细
export function getDanger(dangerId) {
  return request({
    url: "/fzmm/danger/" + dangerId + "/",
    method: "get"
  });
}

// 新增机房
export function addDanger(data) {
  return request({
    url: "/fzmm/danger/",
    method: "post",
    data: data
  });
}

// 修改机房
export function updateDanger(data) {
  return request({
    url: "/fzmm/danger/" + data.id + "/",
    method: "put",
    data: data
  });
}

// 删除机房
export function delDanger(dangerId) {
  return request({
    url: "/fzmm/danger/" + dangerId + "/",
    method: "delete"
  });
}

// 导出机房
export function exportDanger(query) {
  return request({
    url: "/fzmm/danger/export/",
    method: "get",
    params: query
  });
}

// 下载机房导入模板
export function importTemplate() {
  return request({
    url: "/fzmm/danger/importTemplate/",
    method: "get"
  });
}

// 机房导入
export function importsDanger(data) {
  return request({
    url: "/fzmm/danger/importTemplate/",
    method: "post",
    data: data
  });
}
