<template>
 <div>
       <el-menu default-active="2" class="el-menu-vertical-demo" :router='true' @open="handleOpen" @close="handleClose">
         <el-submenu index="1">
           <template slot="title"><i class="el-icon-message"></i>导航一</template>
           <el-menu-item-group>
             <template slot="title">分组一</template>
             <el-menu-item index="/">首页</el-menu-item>
             <el-menu-item index="/md/about">about</el-menu-item>
           </el-menu-item-group>
           <el-menu-item-group title="分组2">
             <el-menu-item index="/test">test</el-menu-item>
           </el-menu-item-group>
           <el-submenu index="1-4">
             <template slot="title">选项4</template>
             <el-menu-item index="/index">index</el-menu-item>
           </el-submenu>
         </el-submenu>
         <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
         <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
       </el-menu>
 </div>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>

</style>
