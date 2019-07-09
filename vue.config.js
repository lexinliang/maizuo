const path = require("path");

module.exports = {
    devServer:{
        open:true,
        proxy:{
            "/gateway":{
                target:"https://m.maizuo.com",
                changOrigin:true
            },
            "/active":{
                target:"https://m.sdyxmall.com",
                changOrigin:true,
                pathRewrite:{
                    "^/active":"gateway"
                }
            },

        }
    },
    configureWebpack:{
        resolve:{
            alias: {
                "@":path.resolve(__dirname,"./src/"),
                "common":path.resolve(__dirname,"./src/common"),
                "components":path.resolve(__dirname,"./src/components"),
                "router":path.resolve(__dirname,"./src/router"),
                "store":path.resolve(__dirname,"./src/store"),
                "utils":path.resolve(__dirname,"./src/utils"),
                "views":path.resolve(__dirname,"./src/views"),
                "api":path.resolve(__dirname,"./src/api")
            }
            
        }
    }
}