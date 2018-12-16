import { fetch } from './http'
import { ipurl } from './ipurl'

//==============================上传图片==========================
const upload = (data)=>{
    return fetch('post',ipurl+'/kxk01xyyj_nhqey/Uploader/add',data);
}

const getmsg = (data)=>{
    return fetch('post','http://192.168.0.102/public/?s=admin/Contactus/addCustomer',data);
}
//提交表单
const upFrom = (data)=>{
    return fetch('post',ipurl+'/public/?s=admin/Contactus/addCustomer',data);
}
//获取所有案例 
const getAll = (data)=>{
    return fetch('post',ipurl+'/public/?s=admin/Ago/getAll',data);
}
//获取案例详情
const detailed = (data)=>{
    return fetch('post',ipurl+'/public/?s=admin/Ago/detailed',data);
}
//主页案例  
const getCase = (data)=>{
    return fetch('post',ipurl+'/public/?s=admin/Ago/getCase',data);
}
//案例分类查询
const getAllCases = (data)=>{
    return fetch('post',ipurl+'/public/?s=admin/Ago/getAllCases',data);
}


//===================================  报价  =========================
//根据ID查询分类
const getOffer = (data)=>{
    return fetch('post',ipurl+'/public/?s=admin/Offerweb/getOffer',data);
}
//查询端口
const getPort = (data)=>{
    return fetch('post',ipurl+'/public/?s=admin/Offerweb/getPort',data);
}
//报价计算
const sums = (data)=>{
    return fetch('post',ipurl+'/public/?s=admin/Offerweb/sums',data);
}

export {
    upload,
    getmsg,
    upFrom,
    getAll,
    detailed,
    getCase,
    getAllCases,
                //报价
    getOffer,
    getPort,
    sums
}