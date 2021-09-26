<template>
  <div>
    <model-display :list-api="listApi" :fields="fields" :funcs="funcs"></model-display>
  </div>
</template>

<script>
import * as Fzmm from "../../../api/fzmm/idcarea";
import * as Idc from "../../../api/fzmm/idc";

export default {
  name: "Idcarea",
  data() {
    return {
      listApi: Fzmm.listIdcArea,
      fields: [
        { prop: "id", label: "ID", show: false, unique: true, required: false },
        { prop: "idc", label: "机房名称", show: true, type: "model_select", select_data: { listApi: Idc.listIdc, label_name: "name" }, search: true, form: true, required: true },
        { prop: "area", label: "机房面积", show: true, search: true, form: true, required: true },
        { prop: "totalRacks", label: "总机架数", show: true, search: true, form: true, required: true },
        { prop: "usedRacks", label: "在用机架数", show: true, search: true, form: true, required: true },
        { prop: "areaUsed", label: "空间效率", show: true, search: true, form: true, required: true },
        { prop: "create_datetime", label: "创建时间", show: true, search: true, type: "date" },
        { prop: "creator_name", label: "创建者", show: true, search: false },
        { prop: "description", label: "描述", show: true, search: false, form: true }
      ],
      funcs: [
        { type: "add", label: "新增", permis: ["fzmm:idcarea:post"], "icon": "el-icon-plus", api: Fzmm.addIdcArea },
        { type: "update", label: "修改", permis: ["fzmm:idcarea:{id}:put"], api: Fzmm.updateIdcArea },
        { type: "delete", label: "删除", permis: ["fzmm:idcarea:{id}:delete"], api: Fzmm.delIdcArea },
        { type: "export", label: "导出", permis: ["fzmm:idcarea:export:get"], api: Fzmm.exportIdcArea },
        { type: "import", label: "导入", permis: ["fzmm:idcarea:importTemplate:get", "fzmm:idcarea:importTemplate:post"], api: Fzmm.importsIdcArea, template_api: Fzmm.importTemplate },
        { type: "select", label: "详情", permis: ["fzmm:idcarea:get"], api: Fzmm.getIdcArea }
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
