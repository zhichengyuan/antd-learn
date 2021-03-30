export default {
    // scripts:[{src:'./a.js'},{src:'./b.js'}],//引入额外的js
    dva:{
      immer: { enableES5: true },//不建议使用
      hmr:true
    },//开启dva
    antd:{
        
    },
    theme: {
        '@primary-color': '#1DA57A',
    },
    proxy:{//相当于webpack中的devServer中的proxy配置
      "/api/upload":{
        target:'http://49.235.59.159:3030',
        changeOrigin:true //修改源
      },
      "/api":{
        target:'http://api.duyiedu.com',
        changeOrigin:true //修改源
      }
      
    }
};