<template>
    <div>
        <el-container>
            <el-header><h2>学生成绩管理系统</h2></el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu router>
                        <el-submenu index="1"  v-for="(item,index) in this.$router.options.routes" :key="index"  >
                            <template v-if="!item.hidden">
                                <template slot="title">
                                    <i class="el-icon-message"></i>
                                    <span>{{item.name}}</span>
                                </template>
                                <el-menu-item :index="children.path" v-for="(children,indexj) in item.children" :key="indexj">{{children.name}}</el-menu-item>
                            </template>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name:"Home",
   // created(){
   //     console.log(this.$router.options.routes);
   //     console.log(this.$router);
   // }
}
</script>

<style>

</style>