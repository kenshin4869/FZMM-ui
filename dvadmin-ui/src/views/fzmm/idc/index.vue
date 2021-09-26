<template>
  <div>
    <model-display :list-api="listApi" :fields="fields" :funcs="funcs"></model-display>
  </div>
</template>

<script>
import * as Fzmm from "../../../api/fzmm/idc";

export default {
  name: "Idc",
  data() {
    return {
      listApi: Fzmm.listIdc,
      fields: [
        { prop: "id", label: "ID", show: false, unique: true, required: false },
        { prop: "name", label: "机房名称", show: true, search: true, form: true, required: true },
        { prop: "address", label: "机房地址", show: true, search: true, form: true, required: true },
        { prop: "department", label: "所属部门", show: true, search: true, type: "depts", form: true, required: true },
        { prop: "idctype", label: "机房类型", show: true, search: true, form: true, required: true },
        { prop: "mowner", label: "总房长", show: true, search: true, sortable: true, type: "users", form: true, required: true },
        { prop: "owner", label: "房长", show: true, search: true, sortable: true, type: "users", form: true, required: true },
        { prop: "create_datetime", label: "创建时间", show: true, search: true, type: "date" },
        { prop: "creator_name", label: "创建者", show: true, search: false },
        { prop: "description", label: "描述", show: true, search: false, form: true }
      ],
      funcs: [
        { type: "add", label: "新增", permis: ["fzmm:idc:post"], "icon": "el-icon-plus", api: Fzmm.addIdc },
        { type: "update", label: "修改", permis: ["fzmm:idc:{id}:put"], api: Fzmm.updateIdc },
        { type: "delete", label: "删除", permis: ["fzmm:idc:{id}:delete"], api: Fzmm.delIdc },
        { type: "export", label: "导出", permis: ["fzmm:idc:export:get"], api: Fzmm.exportIdc },
        { type: "import", label: "导入", permis: ["fzmm:idc:importTemplate:get", "fzmm:idc:importTemplate:post"], api: Fzmm.importsIdc, template_api: Fzmm.importTemplate },
        { type: "select", label: "详情", permis: ["fzmm:idc:get"], api: Fzmm.getIdc }
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
