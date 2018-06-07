<template>
  <!--推荐客户-->
  <div id="user-recommend" class=" clearfix">
    <form class="form mt60" id="remForm" action="">
      <div class="input-group mt30">
        <label class="label yellow">推荐人姓名</label>
        <input class="input required" sucmsg=" " type="text" placeholder="请输入推荐人姓名">
        <span class="Validform_checktip ml20"></span>
      </div>

      <div class="input-group mt30">
        <label class="label yellow">推荐人电话</label>
        <input class="input required" sucmsg=" " type="text" placeholder="请输入推荐人电话">
        <span class="Validform_checktip ml20"></span>
      </div>

      <button class="btn-rec">我要推荐</button>
    </form>

    <div class="user-hr mt40"></div>

    <h1 class="title">已推荐人列表</h1>

    <table class="table mb40">
      <tbody>
      <tr>
        <td>刘涛</td>
        <td>13986325412</td>
        <td>推荐成功！</td>
        <td class="edit-box">

        </td>
      </tr>
      <tr>
        <td>刘涛2</td>
        <td>13986325412</td>
        <td class="rec">推荐中...</td>
        <td class="edit-box">
          <a class="edits edit" href="javascript:void(0);">编辑</a>
          <a class="edits del"  data-method="notice" href="javascript:void(0);">删除</a>
        </td>
      </tr>
      <tr>
        <td>刘涛</td>
        <td>13986325412</td>
        <td class="rec">推荐中...</td>
        <td class="edit-box">
          <a class="edits edit" href="javascript:void(0);">编辑</a>
          <a class="edits del"  data-method="notice" href="javascript:void(0);">删除</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "message"
    }
</script>

<style lang="scss" scoped>
  $host:'../../assets/';
  @import "../../assets/scss/userRecommend";
</style>
