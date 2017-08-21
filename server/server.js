var express = require('express');
var app = express();

var offbtn = true;
app.get('/api/joblist',function(req,res){
	if(offbtn){
		offbtn = !offbtn;
		res.json({joblist:joblist1});
	}else{
		offbtn = !offbtn;
		res.json({joblist:joblist2});
	}
});
console.log('服务器开启');
app.listen(8090);

var joblist1 = [
					{
                        "positionId":1474689,
                        "positionName":"产品经理",
                        "city":"北京",
                        "createTime":"今天 18:05",
                        "salary":"15k-25k",
                        "companyId":114781,
                        "companyLogo":"./img/job1.jpg",
                        "companyName":"新浪法院频道",
                        "companyFullName":"北京新视云网络科技有限公司"
                    },
                    {
                        "positionId":2290711,
                        "positionName":"★网络运营推广★",
                        "city":"深圳",
                        "createTime":"今天 18:03",
                        "salary":"4K-6K",
                        "companyId":1127,
                        "companyLogo":"./img/job2.jpg",
                        "companyName":"易站云商",
                        "companyFullName":"深圳市易智创想科技有限公司"
                    },
                    {
                        "positionId":1446968,
                        "positionName":"UI设计师",
                        "city":"北京",
                        "createTime":"今天 18:01",
                        "salary":"8k-16k",
                        "companyId":48640,
                        "companyLogo":"./img/job3.jpg",
                        "companyName":"加和科技",
                        "companyFullName":"加和（北京）信息科技有限公司"
                    },
                    {
                        "positionId":2272153,
                        "positionName":"UI设计师",
                        "city":"苏州",
                        "createTime":"今天 18:01",
                        "salary":"4k-8k",
                        "companyId":8464,
                        "companyLogo":"./img/job4.jpg",
                        "companyName":"苏州天魂网络",
                        "companyFullName":"苏州天魂网络科技有限公司"
                    },
                    {
                        "positionId":1547761,
                        "positionName":"大客户代表",
                        "city":"成都",
                        "createTime":"今天 18:01",
                        "salary":"4k-8k",
                        "companyId":20251,
                        "companyLogo":"./img/job5.jpg",
                        "companyName":"初唐科技",
                        "companyFullName":"成都初唐网络科技股份有限公司"
                    },
                    {
                        "positionId":1492005,
                        "positionName":"测试工程师",
                        "city":"上海",
                        "createTime":"今天 17:59",
                        "salary":"6k-10k",
                        "companyId":59330,
                        "companyLogo":"./img/job6.jpg",
                        "companyName":"要买车",
                        "companyFullName":"上海运图贸易有限公司"
                    },
                    {
                        "positionId":1671541,
                        "positionName":"新媒体编辑",
                        "city":"北京",
                        "createTime":"今天 17:59",
                        "salary":"5k-7k",
                        "companyId":123174,
                        "companyLogo":"./img/job7.jpg",
                        "companyName":"军朗广告",
                        "companyFullName":"北京军朗广告有限公司"
                    },
                    {
                        "positionId":1648557,
                        "positionName":"资深硬件工程师",
                        "city":"北京",
                        "createTime":"今天 17:56",
                        "salary":"20K-40K",
                        "companyId":122072,
                        "companyLogo":"./img/job8.jpg",
                        "companyName":"悉见科技",
                        "companyFullName":"北京悉见科技有限公司"
                    },
                    {
                        "positionId":2262734,
                        "positionName":"广告业务经理",
                        "city":"长沙",
                        "createTime":"今天 17:55",
                        "salary":"3k-5k",
                        "companyId":117402,
                        "companyLogo":"./img/job9.jpg",
                        "companyName":"顺风传媒",
                        "companyFullName":"湖南顺风传媒有限公司"
                    }

	];

var joblist2 = [
	 				{
                        "positionId":1462153,
                        "positionName":"PHP高级开发工程师",
                        "city":"北京",
                        "createTime":"今天 18:45",
                        "salary":"15k-20k",
                        "companyId":4158,
                        "companyLogo":"./img/job1.jpg",
                        "companyName":"美秒科技",
                        "companyFullName":"北京美秒科技有限公司"
                    },
                    {
                        "positionId":1520690,
                        "positionName":"VC实习生",
                        "city":"北京",
                        "createTime":"今天 18:45",
                        "salary":"5k-8k",
                        "companyId":4158,
                        "companyLogo":"./img/job2.jpg",
                        "companyName":"美秒科技",
                        "companyFullName":"北京美秒科技有限公司"
                    },
                    {
                        "positionId":1480966,
                        "positionName":"JAVA服务器程序员",
                        "city":"上海",
                        "createTime":"今天 18:15",
                        "salary":"13k-25k",
                        "companyId":85897,
                        "companyLogo":"./img/job3.jpg",
                        "companyName":"UTGAME",
                        "companyFullName":"上海游唐网络技术有限公司"
                    },
                    {
                        "positionId":1543193,
                        "positionName":"3D动作美术",
                        "city":"上海",
                        "createTime":"今天 18:15",
                        "salary":"6k-10k",
                        "companyId":85897,
                        "companyLogo":"./img/job4.jpg",
                        "companyName":"UTGAME",
                        "companyFullName":"上海游唐网络技术有限公司"
                    },
                    {
                        "positionId":1636899,
                        "positionName":"内容运营专员（实习岗）",
                        "city":"深圳",
                        "createTime":"今天 18:10",
                        "salary":"2k-3k",
                        "companyId":29447,
                        "companyLogo":"./img/job5.jpg",
                        "companyName":"世强",
                        "companyFullName":"深圳市世强先进科技有限公司"
                    },
                    {
                        "positionId":1661821,
                        "positionName":"品牌广告销售经理",
                        "city":"北京",
                        "createTime":"今天 18:08",
                        "salary":"10k-20k",
                        "companyId":7835,
                        "companyLogo":"./img/job6.jpg",
                        "companyName":"金山办公软件",
                        "companyFullName":"北京金山软件有限公司"
                    },
                    {
                        "positionId":2277975,
                        "positionName":"移动端商业化运营经理",
                        "city":"北京",
                        "createTime":"今天 18:08",
                        "salary":"15k-25k",
                        "companyId":7835,
                        "companyLogo":"./img/job7.jpg",
                        "companyName":"金山办公软件",
                        "companyFullName":"北京金山软件有限公司"
                    },
                    {
                        "positionId":1681924,
                        "positionName":"运维实习生",
                        "city":"北京",
                        "createTime":"今天 18:08",
                        "salary":"2k-4k",
                        "companyId":9475,
                        "companyLogo":"./img/job8.jpg",
                        "companyName":"魔诺克思",
                        "companyFullName":"魔诺克思(北京)科技发展有限公司"
                    },
                    {
                        "positionId":2269848,
                        "positionName":"3D游戏动作设计师",
                        "city":"北京",
                        "createTime":"今天 18:07",
                        "salary":"8k-15k",
                        "companyId":31314,
                        "companyLogo":"./img/job9.jpg",
                        "companyName":"天锋网络",
                        "companyFullName":"北京天锋网络科技有限公司"
                    },
                    {
                        "positionId":1474689,
                        "positionName":"产品经理",
                        "city":"北京",
                        "createTime":"今天 18:05",
                        "salary":"15k-25k",
                        "companyId":114781,
                        "companyLogo":"./img/job1.jpg",
                        "companyName":"新浪法院频道",
                        "companyFullName":"北京新视云网络科技有限公司"
                    },
                    {
                        "positionId":2290711,
                        "positionName":"★网络运营推广★",
                        "city":"深圳",
                        "createTime":"今天 18:03",
                        "salary":"4K-6K",
                        "companyId":1127,
                        "companyLogo":"./img/job2.jpg",
                        "companyName":"易站云商",
                        "companyFullName":"深圳市易智创想科技有限公司"
                    },
                    {
                        "positionId":1446968,
                        "positionName":"UI设计师",
                        "city":"北京",
                        "createTime":"今天 18:01",
                        "salary":"8k-16k",
                        "companyId":48640,
                        "companyLogo":"./img/job3.jpg",
                        "companyName":"加和科技",
                        "companyFullName":"加和（北京）信息科技有限公司"
                    },
                    {
                        "positionId":2272153,
                        "positionName":"UI设计师",
                        "city":"苏州",
                        "createTime":"今天 18:01",
                        "salary":"4k-8k",
                        "companyId":8464,
                        "companyLogo":"./img/job4.jpg",
                        "companyName":"苏州天魂网络",
                        "companyFullName":"苏州天魂网络科技有限公司"
                    },
                    {
                        "positionId":1547761,
                        "positionName":"大客户代表",
                        "city":"成都",
                        "createTime":"今天 18:01",
                        "salary":"4k-8k",
                        "companyId":20251,
                        "companyLogo":"./img/job5.jpg",
                        "companyName":"初唐科技",
                        "companyFullName":"成都初唐网络科技股份有限公司"
                    },
                    {
                        "positionId":1492005,
                        "positionName":"测试工程师",
                        "city":"上海",
                        "createTime":"今天 17:59",
                        "salary":"6k-10k",
                        "companyId":59330,
                        "companyLogo":"./img/job6.jpg",
                        "companyName":"要买车",
                        "companyFullName":"上海运图贸易有限公司"
                    }	
];