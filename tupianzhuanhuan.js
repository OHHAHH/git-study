var app=new Vue({
    el:'#mask',
    data:{
        imgArr:[
            "./images/0.jpg",
            "./images/1.jpg",
            "./images/2.jpg",
            "./images/3.jpg",
            "./images/4.jpg",
            "./images/5.jpg",
            
        ],
        index:0
    },
    methods:{
        prev:function(){
            this.index--;
        },
        next:function(){
            this.index++;
        }
    }
})

