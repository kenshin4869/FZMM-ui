<template>
  <div>
    <model-display :list-api="listApi" :fields="fields" :funcs="funcs"></model-display>
  </div>
</template>

<script>
import * as Fzmm from "../../../api/fzmm/job";
import * as Idc from "../../../api/fzmm/idc";

export default {
  name: "Job",
  data() {
    return {
      listApi: Fzmm.listJob,
      fields: [
        { prop: "id", label: "ID", show: false, unique: true, required: false },
        { prop: "title", label: "标题", show: true, search: true, form: true, required: true },
        { prop: "user", label: "房长", show: true, search: true, type: "users", form: true, required: true },
        { prop: "idctype", label: "机房类型", show: true, search: true, form: true, required: true },
        { prop: "starttime", label: "起始时间", show: true, search: true, form: true, required: true, type: "date" },
        { prop: "endtime", label: "截止时间", show: true, search: true, form: true, required: true, type: "date" },
        { prop: "complete", label: "是否完成", show: true, search: true, type: "option", option_key: "fzmm_completed", sortable: true, form: true, required: true },
        { prop: "completetime", label: "完成时间", show: true, search: true, sortable: true, form: true, required: true, type: "date" },
        { prop: "idc", label: "机房名称", show: true, type: "model_select", select_data: { listApi: Idc.listIdc, label_name: "name" }, search: true, form: true, required: true },
        { prop: "create_datetime", label: "创建时间", show: true, search: true, type: "date" },
        { prop: "creator_name", label: "创建者", show: true, search: false },
        { prop: "description", label: "描述", show: true, search: false, form: true }
      ],
      funcs: [
        { type: "add", label: "新增", permis: ["fzmm:job:post"], "icon": "el-icon-plus", api: Fzmm.addJob },
        { type: "update", label: "修改", permis: ["fzmm:job:{id}:put"], api: Fzmm.updateJob },
        { type: "delete", label: "删除", permis: ["fzmm:job:{id}:delete"], api: Fzmm.delJob },
        { type: "export", label: "导出", permis: ["fzmm:job:export:get"], api: Fzmm.exportJob },
        { type: "import", label: "导入", permis: ["fzmm:job:importTemplate:get", "fzmm:job:importTemplate:post"], api: Fzmm.importsJob, template_api: Fzmm.importTemplate },
        { type: "select", label: "详情", permis: ["fzmm:job:get"], api: Fzmm.getJob }
      ]
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }

};
</script>

<style scoped>
</style>
