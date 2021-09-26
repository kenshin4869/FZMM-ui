<template>
  <div>
    <model-display :list-api="listApi" :fields="fields" :funcs="funcs"></model-display>
  </div>
</template>

<script>
import * as Fzmm from "../../../api/fzmm/danger";
import * as Idc from "../../../api/fzmm/idc";

export default {
  name: "Danger",
  data() {
    return {
      listApi: Fzmm.listDanger,
      fields: [
        { prop: "id", label: "ID", show: false, unique: true, required: false },
        { prop: "title", label: "隐患标题", show: true, search: true, form: true, required: true },
        { prop: "context", label: "详细内容", show: true, search: true, form: true, required: true },
        { prop: "idc", label: "机房名称", show: true, type: "model_select", select_data: { listApi: Idc.listIdc, label_name: "name" }, search: true, form: true, required: true },
        { prop: "complete", label: "是否解决", show: true, search: true, form: true, required: true },
        { prop: "step", label: "解决步骤", show: true, search: true, sortable: true, type: "users", form: true, required: true },
        { prop: "create_datetime", label: "创建时间", show: true, search: true, type: "date" },
        { prop: "creator_name", label: "创建者", show: true, search: false },
        { prop: "description", label: "描述", show: true, search: false, form: true }
      ],
      funcs: [
        { type: "add", label: "新增", permis: ["fzmm:danger:post"], "icon": "el-icon-plus", api: Fzmm.addDanger },
        { type: "update", label: "修改", permis: ["fzmm:danger:{id}:put"], api: Fzmm.updateDanger },
        { type: "delete", label: "删除", permis: ["fzmm:danger:{id}:delete"], api: Fzmm.delDanger },
        { type: "export", label: "导出", permis: ["fzmm:danger:export:get"], api: Fzmm.exportDanger },
        { type: "import", label: "导入", permis: ["fzmm:danger:importTemplate:get", "fzmm:danger:importTemplate:post"], api: Fzmm.importsDanger, template_api: Fzmm.importTemplate },
        { type: "select", label: "详情", permis: ["fzmm:danger:get"], api: Fzmm.getDanger }
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
