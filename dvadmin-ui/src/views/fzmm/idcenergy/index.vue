<template>
  <div>
    <model-display :list-api="listApi" :fields="fields" :funcs="funcs"></model-display>
  </div>
</template>

<script>
import * as Fzmm from "../../../api/fzmm/idcenergy";
import * as Idc from "../../../api/fzmm/idc";

export default {
  name: "Idcenergy",
  data() {
    return {
      listApi: Fzmm.listIdcEnergy,
      fields: [
        { prop: "id", label: "ID", show: false, unique: true, required: false },
        { prop: "idc", label: "机房名称", show: true, type: "model_select", select_data: { listApi: Idc.listIdc, label_name: "name" }, search: true, form: true, required: true },
        { prop: "totalAirs", label: "总空调数", show: true, search: true, form: true, required: true },
        { prop: "usedAirs", label: "在用空调数", show: true, search: true, form: true, required: true },
        { prop: "totalPower", label: "总功率", show: true, search: true, form: true, required: true },
        { prop: "airsPower", label: "空调功率", show: true, search: true, form: true, required: true },
        { prop: "equipPower", label: "设备功率", show: true, search: true, form: true, required: true },
        { prop: "idcpve", label: "能源效率", show: true, search: true, form: true, required: true },
        { prop: "create_datetime", label: "创建时间", show: true, search: true, type: "date" },
        { prop: "creator_name", label: "创建者", show: true, search: false },
        { prop: "description", label: "描述", show: true, search: false, form: true }
      ],
      funcs: [
        { type: "add", label: "新增", permis: ["fzmm:idcenergy:post"], "icon": "el-icon-plus", api: Fzmm.addIdcEnergy },
        { type: "update", label: "修改", permis: ["fzmm:idcenergy:{id}:put"], api: Fzmm.updateIdcEnergy },
        { type: "delete", label: "删除", permis: ["fzmm:idcenergy:{id}:delete"], api: Fzmm.delIdcEnergy },
        { type: "export", label: "导出", permis: ["fzmm:idcenergy:export:get"], api: Fzmm.exportIdcEnergy },
        { type: "import", label: "导入", permis: ["fzmm:idcenergy:importTemplate:get", "fzmm:idcenergy:importTemplate:post"], api: Fzmm.importsIdcEnergy, template_api: Fzmm.importTemplate },
        { type: "select", label: "详情", permis: ["fzmm:idcenergy:get"], api: Fzmm.getIdcEnergy }
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
