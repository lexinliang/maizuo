const path = require("path");

// https://m.maizuo.com/gateway?cityId=411300&pageNum=1&pageSize=10&type=1&k=5641321
 module.exports = {
     devServer:{
         open:true,
         proxy:{
             "/gateway":{
                 target:"https://m.maizuo.com",
                 changeOrigin:true
             }
         }
     },
     configureWebpack:{
         resolve:{
             alias:{
                 "@":path.resolve(__dirname,"./src/"),
                 "common":path.resolve(__dirname,"./src/common"),
                 "components":path.resolve(__dirname,"./src/components/"),
                 "router":path.resolve(__dirname,"./src/router/"),
                 "store":path.resolve(__dirname,"./src/store/"),
                 "utils":path.resolve(__dirname,"./src/utils/"),
                 "views":path.resolve(__dirname,"./src/views"),
                 "api":path.resolve(__dirname,"./src/api/")
             }
         }
     }
 }