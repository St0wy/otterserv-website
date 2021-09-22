var game = new Vue({
    el: '#view',
    data: {
        players: true,
        origins: false,
        classes: false,
        users: [{
                name:"Exylo",
                origin: "apian",
                class: "lumberjack",
                uuid:"5e4fa152-795b-4686-a556-f0db831781e4",
                logged:true,
                data: {}
            }, {
                name:"Stowy_",
                origin: "wolf",
                class: "blacksmith",
                uuid:"b4498d9c-5399-480f-bd8b-3f6c8bf52fb6",
                logged:true,
                data: {}
            }, {
                name:"MoiLePseudo",
                origin: "avian",
                class: "fisherman",
                uuid:"1038ea49-8b8a-4392-8801-e746df031c8d",
                logged:false,
                data: {}
            }, {
                name:"Roxaasora",
                origin: "elytrian",
                class: "cook",
                uuid:"8d2857e0-5eb0-4ce0-a5b5-f7e9e07902ba",
                logged:false,
                data: {}
            }, {
                name:"Swordyn",
                origin: "enderian",
                class: "merchant",
                uuid:"c152a660-21e6-458a-b79b-6a9cdd1403f2",
                logged:false,
                data: {}
            }, {
                name:"Krakao76",
                origin: "merling",
                class: "fisherman",
                uuid:"addc6468-d97c-40fe-8f44-26907c673e66",
                logged:false,
                data: {}
            }, {
                name:"Gougou",
                origin: "wolf",
                class: "miner",
                uuid:"",
                logged:false,
                data: {}
            }, {
                name:"Eli0s_",
                origin: "fox",
                class: "cook",
                uuid:"2268e844-5772-48c7-a903-6026598e09f5",
                logged:false,
                data: {}
            },
        ]
    },
    methods: {
       tick: function(tick) {
            tick = Number(tick);
            sec = tick / 20;
            j = Math.floor(sec / 86400);
            h = Math.floor(sec % 86400 / 3600);
            m = Math.floor(sec % 86400 % 3600 / 60);

            jDisplay = j > 0 ? j + "j " : "";
            hDisplay = h > 0 ? h + "h " : "";
            mDisplay = m > 0 ? m + "m " : "";
            return jDisplay + hDisplay + mDisplay; 
       }
    },
    mounted(){
        for (let i = 0; i < this.users.length; i++){
        let player = this.users[i];
            if(player.logged){
                axios.get('https://otterserv.eu/stats/'+player.uuid+'.json')
                     .then((response)=> {
                    let strData = JSON.stringify(response.data);
                    console.log(strData);
                    strData = strData.replaceAll("minecraft:","minecraft_");
                    console.log(strData);
                    player.data= JSON.stringify(strData);
                })
            }
        }
    }
})
