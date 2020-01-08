const state = {
	profilePage: {
		userInfo: {
			userName: 'Алисэр',
			userLastName: 'Торнэ',
			userState: 'Компонента, ты чем занимаешься? Отрисовкой, мать твою!'
		},
		posts: [
			{
				id: 1,
				text: 'Владыка Света хочет, чтобы врагов сжигали, Утонувший Бог — чтобы их топили. Почему все боги такие жестокие скоты? Где Бог титек и вина?'
			},
			{
				id: 2,
				text: 'Слушайте мою клятву и будьте свидетелями моего обета... Ночь собирается, и начинается мой дозор. Он не окончится до самой моей смерти. Я не возьму себе ни жены, ни земель, не буду отцом детям. Я не надену корону и не буду добиваться славы. Я буду жить и умру на своем посту. Я — меч во тьме; я — Дозорный на Стене; я — щит, охраняющий царство людей. Я отдаю свою жизнь и честь Ночному Дозору в эту ночь и все грядущие...'
			},
			{
				id: 3,
				text: 'А теперь иди и пей, пока не покажется, что ты всё сделал правильно.'
			},
			{
				id: 4,
				text: 'Есть только один бог. И его имя Смерть. А Смерти мы говорим лишь одно: «Не сегодня».'
			}
		]
	},
	skillsPage: {
		searchRequest: ''
	},
	skills: [
		{
			name: 'html',
			category: 'frontend',
			img: 'https://pngicon.ru/file/uploads/html5.png',
			descriptionText: 'Lorem html ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur at autem beatae blanditiis, dolorem eligendi et impedit iure molestiae nulla numquam, quidem soluta ullam, veniam veritatis voluptatem voluptatibus'
		},
		{
			name: 'css',
			category: 'frontend',
			img: 'https://pngicon.ru/file/uploads/css3.png',
			descriptionText: 'Lorem css ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur at autem beatae blanditiis, dolorem eligendi et impedit iure molestiae nulla numquam, quidem soluta ullam, veniam veritatis voluptatem voluptatibus'
		},
		{
			name: 'js',
			category: 'frontend',
			img: 'https://img.icons8.com/color/96/000000/javascript.png',
			descriptionText: 'Lorem js ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur at autem beatae blanditiis, dolorem eligendi et impedit iure molestiae nulla numquam, quidem soluta ullam, veniam veritatis voluptatem voluptatibus'
		},
		{
			name: 'react',
			category: 'frontend',
			img: 'https://img.icons8.com/color/96/000000/react-native.png',
			descriptionText: 'Lorem react ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur at autem beatae blanditiis, dolorem eligendi et impedit iure molestiae nulla numquam, quidem soluta ullam, veniam veritatis voluptatem voluptatibus'
		},
		{
			name: 'redux',
			category: 'frontend',
			img: 'http://ielkanyuk.ru/img/skills/redux.png',
			descriptionText: 'Lorem redux ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur at autem beatae blanditiis, dolorem eligendi et impedit iure molestiae nulla numquam, quidem soluta ullam, veniam veritatis voluptatem voluptatibus'
		},
		{
			name: 'git',
			category: 'command',
			img: 'https://img.icons8.com/color/96/000000/git.png',
			descriptionText: 'Lorem git ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur at autem beatae blanditiis, dolorem eligendi et impedit iure molestiae nulla numquam, quidem soluta ullam, veniam veritatis voluptatem voluptatibus'
		},
		{
			name: 'python',
			category: 'other',
			img: 'https://img.icons8.com/color/96/000000/python.png',
			descriptionText: 'Lorem phyton ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur at autem beatae blanditiis, dolorem eligendi et impedit iure molestiae nulla numquam, quidem soluta ullam, veniam veritatis voluptatem voluptatibus'
		},
		{
			name: 'postgresql',
			category: 'other',
			img: 'https://img.icons8.com/color/96/000000/postgreesql.png',
			descriptionText: 'Lorem PostgreSQL ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur at autem beatae blanditiis, dolorem eligendi et impedit iure molestiae nulla numquam, quidem soluta ullam, veniam veritatis voluptatem voluptatibus'
		},
		{
			name: 'php',
			category: 'other',
			img: 'http://pngimg.com/uploads/php/php_PNG25.png',
			descriptionText: 'Lorem PHP ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur at autem beatae blanditiis, dolorem eligendi et impedit iure molestiae nulla numquam, quidem soluta ullam, veniam veritatis voluptatem voluptatibus'
		},
		{
			name: 'mysql',
			category: 'other',
			img: 'http://pngimg.com/uploads/mysql/mysql_PNG23.png',
			descriptionText: 'Lorem MySQL ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur at autem beatae blanditiis, dolorem eligendi et impedit iure molestiae nulla numquam, quidem soluta ullam, veniam veritatis voluptatem voluptatibus'
		},
	],
	contacts: [
		{
			name: 'gh',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png',
			link: 'https://github.com/leonidleonid',
			style: {
				width: 180,
				height: 180,
				top: -95,
				left: 10,
			},
			smallStyle: {
				width: 90,
				height: 90,
				top: 10,
				left: 180,
			},
			initTop: -90,
			initLeft: 10,
			deltaMove: 35,
		},
		{
			name: 'hh',
			img: 'https://upload.wikimedia.org/wikipedia/commons/7/79/HeadHunter_logo.png',
			link: 'https://spb.hh.ru/resume/8ceb9cadff059e689b0039ed1f5764364d3338',
			style: {
				width: 120,
				height: 120,
				top: -105,
				left: -90,
			},
			smallStyle: {
				width: 60,
				height: 60,
				top: 10,
				left: 0,
			},
			initTop: -100,
			initLeft: -90,
			deltaMove: 22,
		},
		{
			name: 'email',
			img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png',
			link: 'mailto:lifeisgym@gmail.com?subject=Работа, frontend-разработчик',
			style: {
				width: 204,
				height: 204,
				top: -165,
				left: 300,
			},
			smallStyle: {
				width: 120,
				height: 120,
				top: 20,
				left: 60,
			},
			initTop: -160,
			initLeft: 300,
			deltaMove: 18,
		},
		{
			name: 'tg',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png',
			link: 'https://t.me/belikov_LL',
			style: {
				width: 360,
				height: 360,
				top: -75,
				left: -100,
			},
			smallStyle: {
				width: 120,
				height: 120,
				top: 100,
				left: 10,
			},
			initTop: -70,
			initLeft: -100,
			deltaMove: 12,
		},
		{
			name: 'ig',
			img: 'https://pngicon.ru/file/uploads/instagram.png',
			link: 'https://www.instagram.com/belikov_web_dev/',
			style: {
				width: 512,
				height: 512,
				top: -205,
				left: 65,
			},
			smallStyle: {
				width: 90,
				height: 90,
				top: 130,
				left: 170,
			},
			initTop: -200,
			initLeft: 65,
			deltaMove: 4,
		},
		{
			name: 'vk',
			img: 'https://pngicon.ru/file/uploads/vk-256x256.png',
			link: 'https://vk.com/id130355',
			style: {
				width: 256,
				height: 256,
				top: -5,
				left: 200,
			},
			smallStyle: {
				width: 60,
				height: 60,
				top: 130,
				left: 120,
			},
			initTop: 0,
			initLeft: 200,
			deltaMove: 8,
		},
	],
	expPage: {
		exp: [
			{
				year: 2017,
				stages: [
					{
						title: 'Ради интереса изучил HTML и CSS в свободное время',
						period: 'С ноября',
						skills: ['html', 'css'],
						description: [
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos enim facere id labore maiores ullam.',
							'Accusantium alias assumenda aut autem commodi cupiditate earum, eius eum exercitationem, fuga iste laborum libero magnam minus rem sint tempore ullam unde vel voluptate.'
						]
					},
				]
			},
			{
				year: 2018,
				stages: [
					{
						title: 'Прошел обучение на курсах профессиональной переподготовки в университете ИТМО',
						period: 'С февраля по июнь',
						skills: ['git', 'js', 'php', 'mysql'],
						description: [
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos enim facere id labore maiores ullam.',
							'Accusantium alias assumenda aut autem commodi cupiditate earum, eius eum exercitationem, fuga iste laborum libero magnam minus rem sint tempore ullam unde vel voluptate.']
					},
					{
						title: 'Ушел с прежней работы в IT-компанию на должность frontend-разработчика',
						period: 'С октября',
						skills: [],
						description: [
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos enim facere id labore maiores ullam.',
							'Accusantium alias assumenda aut autem commodi cupiditate earum, eius eum exercitationem, fuga iste laborum libero magnam minus rem sint tempore ullam unde vel voluptate.']
					},
				]
			},
			{
				year: 2019,
				stages: [
					{
						title: 'При менторcтве коллег изучил Python и PostgreSQL для помощи в backend-разработке',
						period: 'С апреля',
						skills: ['python', 'postgresql'],
						description: [
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos enim facere id labore maiores ullam.',
							'Accusantium alias assumenda aut autem commodi cupiditate earum, eius eum exercitationem, fuga iste laborum libero magnam minus rem sint tempore ullam unde vel voluptate.']
					},
					{
						title: 'Самостоятельно изучил React и Redux для погружения во frontend',
						period: 'С ноября',
						skills: ['react', 'redux'],
						description: [
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos enim facere id labore maiores ullam.',
							'Accusantium alias assumenda aut autem commodi cupiditate earum, eius eum exercitationem, fuga iste laborum libero magnam minus rem sint tempore ullam unde vel voluptate.']
					},
				]
			},
			{
				year: 2020,
				stages: [
					{
						title: 'Опубликовал свой первый сайт на React в сети',
						period: 'С января',
						skills: [],
						description: [
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos enim facere id labore maiores ullam.',
							'Accusantium alias assumenda aut autem commodi cupiditate earum, eius eum exercitationem, fuga iste laborum libero magnam minus rem sint tempore ullam unde vel voluptate.']
					},
				]
			},
		],
		selectedYear: 2020
	},

	backTitle: ''
};

export default state;
