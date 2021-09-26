import request from "@/utils/request";

// 查询机房列表
export function listJob(query) {
  return request({
    url: "/fzmm/job/",
    method: "get",
    params: query
  });
}

// 查询机房详细
export function getJob(jobId) {
  return request({
    url: "/fzmm/job/" + jobId + "/",
    method: "get"
  });
}

// 新增机房
export function addJob(data) {
  return request({
    url: "/fzmm/job/",
    method: "post",
    data: data
  });
}

// 修改机房
export function updateJob(data) {
  return request({
    url: "/fzmm/job/" + data.id + "/",
    method: "put",
    data: data
  });
}

// 删除机房
export function delJob(jobId) {
  return request({
    url: "/fzmm/job/" + jobId + "/",
    method: "delete"
  });
}

// 导出机房
export function exportJob(query) {
  return request({
    url: "/fzmm/job/export/",
    method: "get",
    params: query
  });
}

// 下载机房导入模板
export function importTemplate() {
  return request({
    url: "/fzmm/job/importTemplate/",
    method: "get"
  });
}

// 机房导入
export function importsJob(data) {
  return request({
    url: "/fzmm/job/importTemplate/",
    method: "post",
    data: data
  });
}
