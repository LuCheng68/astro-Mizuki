// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	XiaoMi: [
		{
			name: "XiaoMi 15",
			image: "/images/device/xiaomi15.webp",
			specs: "Lilac / 16G + 512GB",
			description: "",
			link: "https://www.mi.com/prod/xiaomi-15",
		},		
		{
			name: "XiaoMi MIX 4",
			image: "/images/device/MIX4.webp",
			specs: "Gray / 12G + 256GB",
			description: "MIX系列最后的绝唱",
			link: "https://www.mi.com/mix4",
		},		
		{
			name: "Redmi K20 PRO",
			image: "/images/device/RedmiK20Pro.webp",
			specs: "Red / 8G + 256GB",
			description: "真旗舰 敢K.O.",
			link: "https://www.mi.com/redmik20pro",
		},
		{
			name: "XiaoMi Pad 5 PRO",
			image: "/images/device/xiaomipad5pro.webp",
			specs: "Black / 6G + 128GB",
			description: "",
			link: "https://www.mi.com/xiaomipad5pro",
		},
	],
	Cudy: [
		{
			name: "TR3000",
			image: "/images/device/tr3000.webp",
			specs: "2402Mbps / 2.5G / 256MB ROM",
			description:
				"",
			link: "https://www.cudy.com/zh-cn/products/tr3000-1-0",
		},
	],
};
