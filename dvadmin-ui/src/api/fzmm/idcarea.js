import request from "@/utils/request";

// 查询机房空间列表
export function listIdcArea(query) {
  return request({
    url: "/fzmm/idcarea/",
    method: "get",
    params: query
  });
}

// 查询机房空间详细
export function getIdcArea(idcAreaId) {
  return request({
    url: "/fzmm/idcarea/" + idcAreaId + "/",
    method: "get"
  });
}

// 新增机房空间
export function addIdcArea(data) {
  return request({
    url: "/fzmm/idcarea/",
    method: "post",
    data: data
  });
}

// 修改机房空间
export function updateIdcArea(data) {
  return request({
    url: "/fzmm/idcarea/" + data.id + "/",
    method: "put",
    data: data
  });
}

// 删除机房空间
export function delIdcArea(idcAreaId) {
  return request({
    url: "/fzmm/idcarea/" + idcAreaId + "/",
    method: "delete"
  });
}

// 导出机房空间
export function exportIdcArea(query) {
  return request({
    url: "/fzmm/idcarea/export/",
    method: "get",
    params: query
  });
}

// 下载机房空间导入模板
export function importTemplate() {
  return request({
    url: "/fzmm/idcarea/importTemplate/",
    method: "get"
  });
}

// 机房空间导入
export function importsIdcArea(data) {
  return request({
    url: "/fzmm/idcarea/importTemplate/",
    method: "post",
    data: data
  });
}
