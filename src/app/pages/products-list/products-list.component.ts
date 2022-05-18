import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	products: {
		feedbacksCount: number;
		images: {
			source: string;
			url: string;
		}[];
		name: string;
		price: number;
		rating: number;
		status: number;
		subCategory: string;
		_id: string;
		roundedRating: number;
	}[] = [];
	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit(): void {
		// simulate api response
		setTimeout(() => {
			this.products = [
				{
					_id: 'eksn-videokamera-x-try-xtg377-uhd-4k-cernyj',
					feedbacksCount: 1,
					subCategory: 'fototexnika',
					images: [
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/34fccc01a405532f83e4fab605ef64df/6a576ec60c5779fb96fa6fc4efae979acfd49678d81a2ddff83f9955580ca7d4.jpg',
							source: '6a576ec60c5779fb96fa6fc4efae979acfd49678d81a2ddff83f9955580ca7d4.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/b347590355e7c271e3bfb11b714d8db0/aec6a861d7553cd0e666bccd903f06c926c62311cecc270473910f59cab0a208.jpg',
							source: 'aec6a861d7553cd0e666bccd903f06c926c62311cecc270473910f59cab0a208.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/871a3c9c0ba45960a075f68c80febadd/23ffb9d8fed7cfe16a518995296f33b454cb9ff9d685253544c6d4b4bac11bcb.jpg',
							source: '23ffb9d8fed7cfe16a518995296f33b454cb9ff9d685253544c6d4b4bac11bcb.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/b55ef7bd180d6fa8bd99f24e588ff348/3781dd5fb437ef6afe77216844c726117f1eabbfdde7c4ea5f11dcc5e7968b26.jpg',
							source: '3781dd5fb437ef6afe77216844c726117f1eabbfdde7c4ea5f11dcc5e7968b26.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/414ea841dde2d61e31c344ee5c42b4b4/647e504012dd6074d6c6b84a1dc6dbead7b41598f5957d4dc85e4b11370a9c07.jpg',
							source: '647e504012dd6074d6c6b84a1dc6dbead7b41598f5957d4dc85e4b11370a9c07.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/2fecd9345eef246c372d2cbac3385595/6972746f576253b97e67992fd88743631f9c19aa20decbc58c79af2e74f47139.jpg',
							source: '6972746f576253b97e67992fd88743631f9c19aa20decbc58c79af2e74f47139.jpg',
						},
					],
					name: 'Экшн видеокамера X-TRY XTG377 UHD 4K черный',
					price: 171,
					rating: 4,
					status: 1,
				},
				{
					_id: 'sumka-lowepro-nova-170-aw-ii-cernyj',
					feedbacksCount: 2,
					subCategory: 'fototexnika',
					images: [
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/1866/b1f9ffcdbe8ed69b8b2391d469b6488f/e5047d78ffaf1998c7239f3cd7d7c10678bed746f9f8adf0ffabef15a7df77e8.jpg',
							source: 'e5047d78ffaf1998c7239f3cd7d7c10678bed746f9f8adf0ffabef15a7df77e8.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/1500/285ed7647e2e7ebd64a7ca72004674a1/928b079715f464943385820efa2c06aeccab1a12c7e1de84c1f2ed07ff1daaea.jpg',
							source: '928b079715f464943385820efa2c06aeccab1a12c7e1de84c1f2ed07ff1daaea.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/1499/2000/5359c1ba3b6f874ab71b55b94738a982/e5f81ce18a2de832b4e0a2e68da3948dc089586cfbda303c835f6779cf2612f9.jpg',
							source: 'e5f81ce18a2de832b4e0a2e68da3948dc089586cfbda303c835f6779cf2612f9.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/1500/e2d6052df510a4898fdd8b0c0d0e0bcf/07e8cc95b57c1750dfe94f9cbcf7a5ad4ce10371bf5b42bff70d89263cf20375.jpg',
							source: '07e8cc95b57c1750dfe94f9cbcf7a5ad4ce10371bf5b42bff70d89263cf20375.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/1500/e3c4575ae0f22af3cd12f19fecbefa01/4942c43e37ec1ca8ceb444af5723ee8d7193293b6a5a42f9ff0ea3a35c564a20.jpg',
							source: '4942c43e37ec1ca8ceb444af5723ee8d7193293b6a5a42f9ff0ea3a35c564a20.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/1500/28220da0dca12fc4758ec8df13cb22c5/f26da1fb72bad10c9b0259df7aee491acf4467a96eb9300bfa1baafd2bd4ccd1.jpg',
							source: 'f26da1fb72bad10c9b0259df7aee491acf4467a96eb9300bfa1baafd2bd4ccd1.jpg',
						},
					],
					name: 'Сумка LowePro Nova 170 AW II черный',
					price: 64,
					rating: 4,
					status: 1,
				},
				{
					_id: 'susilka-dla-bela-nastennaa-gimi-lift-160',
					feedbacksCount: 4,
					subCategory: 'tovary-dlya-doma',
					images: [
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/60820d28d63245f1bd8b59743ff8c97b/d7dafc167e58b40dcb180c76317ca1527f7d6e1ad5a619548077c1a6fb2bcd68.jpg',
							source: 'd7dafc167e58b40dcb180c76317ca1527f7d6e1ad5a619548077c1a6fb2bcd68.jpg',
						},
					],
					name: 'Сушилка для белья настенная GIMI LIFT 160',
					price: 31,
					rating: 3.75,
					status: 0,
				},
				{
					_id: 'provodnaa-stereogarnitura-pioneer-se-cl502t-w-belyj',
					feedbacksCount: 2,
					subCategory: 'audiotexnika',
					images: [
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/cb64ea69d48099e2999994a04433e1c0/13d7609a13e7f19d851a45cfdeacb4b37faf02f58b6a6d6752ec2cebaf7e019c.jpg',
							source: '13d7609a13e7f19d851a45cfdeacb4b37faf02f58b6a6d6752ec2cebaf7e019c.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/317f20cc6693dea14ef07d16a35a994a/c8130c8f2885137ab53b14096a91ab31e11bde5c598b21c0525018c226c2cd0f.jpg',
							source: 'c8130c8f2885137ab53b14096a91ab31e11bde5c598b21c0525018c226c2cd0f.jpg',
						},
					],
					name: 'Проводная стереогарнитура Pioneer SE-CL502T-W белый',
					price: 14,
					rating: 3,
					status: 1,
				},
				{
					_id: '8-planset-dexp-ursus-p380i-16-gb-3g-lte-seryj',
					feedbacksCount: 2,
					subCategory: 'planshety-elektronnye-knigi',
					images: [
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/0/0/8c751d67df3fc79254c2663b215a7166/38e29107b221dc3398bc9e726f46c7bb411ac15434623ba80564761691890459.jpg',
							source: '38e29107b221dc3398bc9e726f46c7bb411ac15434623ba80564761691890459.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/22953015496d0870ea56e5b2c8cfa671/5d0187a1a087a700bc9e42bc6beeff8d9a4af8065be42b2b6373b5a899d19c7e.jpg',
							source: '5d0187a1a087a700bc9e42bc6beeff8d9a4af8065be42b2b6373b5a899d19c7e.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/16eddd79cc0fbf34c942bb98a86fce71/56677a8f4c3b8a0b838673b68148a5bf268b4f1f522d2b9adbb9fe7be8753d15.jpg',
							source: '56677a8f4c3b8a0b838673b68148a5bf268b4f1f522d2b9adbb9fe7be8753d15.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/90861a97dba9e6aaf6719919a68500da/0d59443b93e0e37ebebd1f7d8bc3f8e1acbf5821a791335a0a1e270aed0d7309.jpg',
							source: '0d59443b93e0e37ebebd1f7d8bc3f8e1acbf5821a791335a0a1e270aed0d7309.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/1db2eaad5e46fe97e1cd0b2cecaeea79/94951a7b8eb925afe6c3ac16c211ee1157b17d73b97a155c4dfddcebe9d2ed5f.jpg',
							source: '94951a7b8eb925afe6c3ac16c211ee1157b17d73b97a155c4dfddcebe9d2ed5f.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/b47005952ffdf97fc4e3d84a4baba3d9/9418c25208823d56a1d80257434b35de39474e8d1b05c4da0c37d7f3aa8a3a10.jpg',
							source: '9418c25208823d56a1d80257434b35de39474e8d1b05c4da0c37d7f3aa8a3a10.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/708519e019fdca170d31c2f251e63c85/b39ea77a2040406eec1cd42593de90ff2f752227537fbbb3720e15034c984cab.jpg',
							source: 'b39ea77a2040406eec1cd42593de90ff2f752227537fbbb3720e15034c984cab.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/a59642233a5a8369b89be8bd4b8f4cfb/15fe32fc0813039f3ea50dc1a363936ede230ea29ea5e2f4555e8b39d6e29bd5.jpg',
							source: '15fe32fc0813039f3ea50dc1a363936ede230ea29ea5e2f4555e8b39d6e29bd5.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/8330b72c0859d9f480fa8f3f42da2deb/43ea96bb4af4907446267ea347424ed893fccf9fc1f1495d4a4bb7ff3a5fe317.jpg',
							source: '43ea96bb4af4907446267ea347424ed893fccf9fc1f1495d4a4bb7ff3a5fe317.jpg',
						},
					],
					name: '8" Планшет Dexp Ursus P380i 16 ГБ 3G, LTE серый',
					price: 67,
					rating: 5,
					status: 0,
				},
				{
					_id: 'strubcina-kobalt-244-629',
					feedbacksCount: 1,
					subCategory: 'ruchnoj-instrument-i-osnastka',
					images: [
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/0/0/eb82598725f876a563fe017c0beadbfb/e7ce7a34cbd26cbb2464f5ab53408f432c66b6b5382be2451725a6c613007da8.jpg',
							source: 'e7ce7a34cbd26cbb2464f5ab53408f432c66b6b5382be2451725a6c613007da8.jpg',
						},
					],
					name: 'Струбцина Кобальт 244-629',
					price: 11,
					rating: 4,
					status: 0,
				},
				{
					_id: 'svetofiltr-marumi-wide-mc-uv-52mm',
					feedbacksCount: 3,
					subCategory: 'fototexnika',
					images: [
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/1500/aec0c3324abfa847ad257e4ad7faabb2/6db8c934b15da56d39431a11d324f0b347481e8af90522be35907805f3cda49f.jpg',
							source: '6db8c934b15da56d39431a11d324f0b347481e8af90522be35907805f3cda49f.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/1499/56746bf574a8f845232c6eaf6543626f/dc3871f8e7b7c594a92ad92c55b9afea17ec7d749bfe01c99722c76d52cf8880.jpg',
							source: 'dc3871f8e7b7c594a92ad92c55b9afea17ec7d749bfe01c99722c76d52cf8880.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/1500/2000/6c776409735042b2eca73be067ee352f/a0f3b10922bbfdabe5a591918806634b1c7dd2fde0e624689b80922d2dc04947.jpg',
							source: 'a0f3b10922bbfdabe5a591918806634b1c7dd2fde0e624689b80922d2dc04947.jpg',
						},
					],
					name: 'Светофильтр Marumi WIDE MC-UV 52mm',
					price: 16,
					rating: 3.6666666666666665,
					status: 1,
				},
				{
					_id: 'svarocnyj-apparat-wester-iwt120',
					feedbacksCount: 3,
					subCategory: 'stroitelstvo-izmerenie-i-uborka',
					images: [
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/1500/e487fdcc762e7a432911e8b523425369/9bd7b8ae0cd374aead5a7a00649c2fcbc2bdf99014c5747af9e6be0c0f46071a.jpg',
							source: '9bd7b8ae0cd374aead5a7a00649c2fcbc2bdf99014c5747af9e6be0c0f46071a.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/1500/2000/189aee9cf40106d0b8b604498c0352aa/43f71536ea1e20c1f76fb616ad3b99c3df9794523f65d091b5087baf5d76e2b1.jpg',
							source: '43f71536ea1e20c1f76fb616ad3b99c3df9794523f65d091b5087baf5d76e2b1.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/1500/8ba63358ccae09e4e49e2b72cd3a38ba/40e7cdf619858d8b061d40559980efbd1f6c33083be1ddbd7eae64834408485c.jpg',
							source: '40e7cdf619858d8b061d40559980efbd1f6c33083be1ddbd7eae64834408485c.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/1500/05fa4c79210ef97a0ad3f11486a892fb/b1ab262c82fd8de9fbb2f92e751d3d7bf57c73876de73765b5a1e3e30995a184.jpg',
							source: 'b1ab262c82fd8de9fbb2f92e751d3d7bf57c73876de73765b5a1e3e30995a184.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/1500/fdea2b62ef7d0b54d9b72ff11baedb67/138f997490c20175466195d62f17d6a233ea3cfcceca263ed9f79c8d7041b274.jpg',
							source: '138f997490c20175466195d62f17d6a233ea3cfcceca263ed9f79c8d7041b274.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/1500/c125d8fde0f76e0cac972815d63e5f63/bcdbe82520a1d79dc28a788710eb43e4b74bd4d55dce2e005710a72ab8b4a2b0.jpg',
							source: 'bcdbe82520a1d79dc28a788710eb43e4b74bd4d55dce2e005710a72ab8b4a2b0.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/1500/1f5fb1cc97c4df8884a50525cb4e97fd/1d31f43f35b3aad450ed896e4553e4787baede75d4588631ee06a00490e4499e.jpg',
							source: '1d31f43f35b3aad450ed896e4553e4787baede75d4588631ee06a00490e4499e.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/1500/be7729d902d1d409e31832e93f0bfde1/3ad95f01b1235181ffb50accb1e40a81b62c4551b7fbda912e0fbdb374383f00.jpg',
							source: '3ad95f01b1235181ffb50accb1e40a81b62c4551b7fbda912e0fbdb374383f00.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/1500/7c19042242428a0d920149dbfebb74b1/ed31e6ce3dba7bab40b5756b78cc3ca93210cd516f95d4cc8f4d162e030bc271.jpg',
							source: 'ed31e6ce3dba7bab40b5756b78cc3ca93210cd516f95d4cc8f4d162e030bc271.jpg',
						},
					],
					name: 'Сварочный аппарат Wester IWT120',
					price: 86,
					rating: 5,
					status: 1,
				},
				{
					_id: 'radioupravlaemaa-masina-krauler-wltoys-10428-d',
					feedbacksCount: 1,
					subCategory: 'igry-i-xobbi',
					images: [
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/4f5b5bd2a4c19845529392473db934c6/6c27b6e4f249d6b8e95798ff38e4e4e449e961eaff54e987e116c3ac385c72f5.jpg',
							source: '6c27b6e4f249d6b8e95798ff38e4e4e449e961eaff54e987e116c3ac385c72f5.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/51086623e7b787fdef292503c2c4da33/b592ad3571f9aa281f63d0a5cb40dc2eb691ebc85a2d8f908d2ed8f419fce36b.jpg',
							source: 'b592ad3571f9aa281f63d0a5cb40dc2eb691ebc85a2d8f908d2ed8f419fce36b.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/f8ec690b623f0f9fd76613ceec815478/8e8a78f12514721d9556c991fe667e49b846951cbe9ce2fd5808a13033e396dd.jpg',
							source: '8e8a78f12514721d9556c991fe667e49b846951cbe9ce2fd5808a13033e396dd.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/c30467fb7613983d7a04c7249222118d/4033439115ec4fb5e6a70ee8cefb8232fa228c6b4024efad1a58e462af196589.jpg',
							source: '4033439115ec4fb5e6a70ee8cefb8232fa228c6b4024efad1a58e462af196589.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/1999/2000/6b3fde5cce9495723e8f356870618bbf/84fa5580333a7dcad069cb1db3fb1fe3b173ba51195826568624abe76ddbb15c.jpg',
							source: '84fa5580333a7dcad069cb1db3fb1fe3b173ba51195826568624abe76ddbb15c.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/1999/8d339d6335078cf1b5c11945baeffb3e/0d534a9cf84ba6ee180c7f3d015988f225bc808c893b35a7fb020072b8dc6004.jpg',
							source: '0d534a9cf84ba6ee180c7f3d015988f225bc808c893b35a7fb020072b8dc6004.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/a9847d3ebd8e71c14450aa5cc6ce4a7f/11b39e6a4d02fc75560afb215faa0ac3f3aef7a4805834ae371e10ef773cb934.jpg',
							source: '11b39e6a4d02fc75560afb215faa0ac3f3aef7a4805834ae371e10ef773cb934.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/f57d173d8bd92c07305e46ef8119b3c4/cc037f2a76fb5b3e0562f21e7b550b03eba672becbac55648f0fe644b8e94108.jpg',
							source: 'cc037f2a76fb5b3e0562f21e7b550b03eba672becbac55648f0fe644b8e94108.jpg',
						},
						{
							url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/1999/2155899ec3ec34fd2620d51d8902b630/b6262c02c14e5f68e40ae5dffb25a5f48e3f8dd474cbbf6c31174ae36d58a5eb.jpg',
							source: 'b6262c02c14e5f68e40ae5dffb25a5f48e3f8dd474cbbf6c31174ae36d58a5eb.jpg',
						},
					],
					name: 'Радиоуправляемая машина краулер WLToys 10428-D',
					price: 58,
					rating: 5,
					status: 1,
				},
			].map((product) => ({
				...product,
				roundedRating: Math.round(product.rating),
			}));
			this.changeDetectorRef.markForCheck();
		}, 1000);
	}
}
