<template>
  <div class="g-table">
    <table>
      <thead>
      <tr>
        <th :key="item.key" v-for="(item, index) in columns">{{item.title}}</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="item.id" v-for="(item, index) in dataTable">
        <td :key="value.key" v-for="(value,key) in columns">{{item[value.dataIndex]}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'g-table',
    props: {
      columns: {
        type: Array,
        required: true,
      },
      dataTable: {
        type: Array,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped>
  .g-table {
    table {
      min-width: 719px;
      margin: 2em 0;
      font-size: 14px;
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
      line-height: 1.5;
      border-width: 0;
    }

    table th {
      border-width: 0 0 2px 0;
      color: #5c6b77;
      font-weight: 500;
      white-space: nowrap;
      background: rgba(0, 0, 0, 0.02);
    }

    tr {
      border-top: 0;
    }

    th, td {
      padding: 14px 16px;
      text-align: left;
      border-color: #e8e8e8;
      border-width: 1px 0;
    }

    table td:first-child {
      width: 20%;
      color: #003a8c;
      font-weight: 500;
    }

    table td:nth-child(3) {
      width: 22%;
      color: #c41d7f;
      font-size: 13px;
      word-break: break-all;
    }

    table td:nth-child(4) {
      width: 13%;
      font-size: 13px;
    }
  }
</style>
