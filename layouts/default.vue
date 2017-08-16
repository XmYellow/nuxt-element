<template>

    <el-row >
      <el-col :xs="7" :sm="6" :md="5" :lg="4">
        <div class="bg-purple logo-box">

        </div>
        <div class="grid-content bg-purple">
        <SideMenu />
      </div>
      </el-col>
      <el-col :xs="17" :sm="18" :md="19" :lg="20">
        <div class="header bg-purple-light">

        </div>
        <div class="grid-content bg-gray content-box">
          <nuxt/>

        </div>

      </el-col>
    </el-row>
</template>

<script>
  import SideMenu from '~/components/SideMenu'
  import Logo from '~/components/Logo'
  export default{
    components:{
      SideMenu,Logo
    }
  }
</script>
<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}
.el-col {
  border-radius: 4px;
}

.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #eef1f6;
}
.bg-gray {
  background: #f7f5fa;
}
.logo-box ,.header{
  height: 50px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: 766px;

}
  .content-box{
    padding: 10px;
  }
</style>


