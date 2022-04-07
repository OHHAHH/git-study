var app= new Vue({
    el: '#app',
    data:{
       message:'hello Vue!'
    }
})

var app2=new Vue({
    el:'#app-2',
    data:{
        message:'页面加载于' + new Date().toLocaleDateString()
    }
})

var app3=new Vue({
    el:'#app-3',
    data:{
        seen:false,
        temperature:40
    },
    methods:{
        togoseen:function(){
            this.seen=!this.seen;
        }
    }
})

var app4=new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text:'学习 JavaScript'},
            {text:'学习 Vue'},
            {text:'学习项目'}
        ]
    },
    methods:{
        add:function(){
            this.todos.push({text:"学习java"});
        },
        remove:function(){
            this.todos.shift();
        }
    },
})

var app9=new Vue({
    el:"#app-9",
    data:{
        arr:["呼呼","嘿嘿","哈哈"],

    }
})

var app5=new Vue({
    el:'#app-5',
    data:{
        message:'Hello Vue.js'
    },
    methods:{
        reverseMessage:function(){
          //  this.message=this.message.split('').reverse().join('')
          this.message=!this.message;
        }
    }
})

var app6=new Vue({
    el:'#app-6',
    data:{
        message:'Hello Vue'
    }
})

Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})
var app7=new Vue({
    el:'#app-7',
    data:{
        groceryList:[
            {id:0,text:'蔬菜'},
            {id:1,text:'奶酪'},
            {id:2,text:'饼干'}
        ]
    }
})

var app8=new Vue({
    el:'#app-8',
    data:{
        ptitle:'吼吼吼',
        isActive:false
    },
    methods:{
        toggleActive:function(){
            this.isActive=!this.isActive;
        }
    }
})

var app10=new Vue({
    el:'#app-10',
    methods:{
        doIt:function(p1,p2){
            console.log(p1);
            console.log(p2);
        },
        sayHi:function(){
            alert("嗷嗷嗷");
        }
    },
})
var str = "str"