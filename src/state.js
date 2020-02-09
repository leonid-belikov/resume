const state = {
	skillsPage: {
		searchRequest: ''
	},
	skills: [
		{
			name: 'html',
			category: 'frontend',
			img: '/icons/html5.png',
			level: 5,
			descriptionText: 'При верстке применяю общепринятые правила оформления HTML-кода, а также семантические элементы HTML5'
		},
		{
			name: 'css',
			category: 'frontend',
			img: '/icons/css3.png',
			level: 5,
			descriptionText: 'Стилизирую, трансформирую, создаю анимацию элементов DOM с помощью CSS-свойств, применяю методологию БЭМ'
		},
		{
			name: 'sass',
			category: 'frontend',
			img: '/icons/sass.png',
			level: 4,
			descriptionText: 'Оптимизирую написание стилей с помощью вложенности, фрагментирования и импорта кода, использования переменных'
		},
		// {
		// 	name: 'bootstrap',
		// 	category: 'frontend',
		// 	img: '/icons/bootstrap.png',
		// 	level: 3,
		// 	descriptionText: 'Использую сетку из библиотеки bootstrap-grid для оптимизации разметки'
		// },
		{
			name: 'js',
			category: 'frontend',
			img: '/icons/js.png',
			level: 5,
			descriptionText: 'Организую код в виде отдельно подключаемых JS-файлов или модулей на основе require.js, описываю взаимодейтвие с элементами DOM на чистом JS или с помощью JQuery, для запросов на сервер использую XHR, fetch, применяю синтаксис и инструменты ES6+, архитектуру MV*'
		},
		{
			name: 'react',
			category: 'frontend',
			img: '/icons/react.png',
			level: 4,
			descriptionText: 'Создаю полноценные SPA c применением функциональных и классовых компонентов, роутинга, манипулировать состоянием классовых компонентов на разных этапах жизненного цикла'
		},
		{
			name: 'redux',
			category: 'frontend',
			img: '/icons/redux.png',
			level: 4,
			descriptionText: 'Оптимизирую работу с хранилищем данных о состоянии приложения и обработчиками событий с помощью mapStateToProps(), mapDispatchToProps()'
		},
		{
			name: 'git',
			category: 'command',
			img: '/icons/git.png',
			level: 5,
			descriptionText: 'Настраиваю конфигурацию, создаю алиасы, выполняю подключение и синхронизацию с удаленным репозиторием, перебазирование веток, копирование, слияние, откат коммитов, умею работать в команде по принципу Git-flow'
		},
		{
			name: 'gulp',
			category: 'other',
			img: '/icons/gulp.png',
			level: 3,
			descriptionText: 'Применяю для автоматической компиляции SASS в CSS, минификации HTML, CSS, JS-файлов, сжатия изображений, копирования и перемещения файлов и директорий'
		},
		{
			name: 'python',
			category: 'backend',
			img: '/icons/python.png',
			level: 4,
			descriptionText: 'Имею опыт в написании логики серверной части web-приложений (обработке данных, получаемых от клиента, отправке запросов к БД, отправке данных, полученных из БД, на клиент) с применением функционального и объектно-ориентированного стиля'
		},
		{
			name: 'postgresql',
			category: 'backend',
			img: '/icons/postgresql.png',
			level: 3,
			descriptionText: 'Имею опыт составления и оптимизации запросов к БД для чтения, создания и обновления записей с использованием JOIN, UNION, вложенных запросов, EXIST, CASE и др.'
		},
		{
			name: 'django',
			category: 'other',
			img: '/icons/django.png',
			level: 3,
			descriptionText: 'Lorem django ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur at autem beatae blanditiis, dolorem eligendi et impedit iure molestiae nulla numquam, quidem soluta ullam, veniam veritatis voluptatem voluptatibus'
		},
		// {
		// 	name: 'php',
		// 	category: 'backend',
		// 	img: '/icons/php.png',
		// 	level: 3,
		// 	descriptionText: 'Lorem PHP ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur at autem beatae blanditiis, dolorem eligendi et impedit iure molestiae nulla numquam, quidem soluta ullam, veniam veritatis voluptatem voluptatibus'
		// },
		// {
		// 	name: 'mysql',
		// 	category: 'backend',
		// 	img: '/icons/mysql.png',
		// 	level: 3,
		// 	descriptionText: 'Lorem MySQL ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur at autem beatae blanditiis, dolorem eligendi et impedit iure molestiae nulla numquam, quidem soluta ullam, veniam veritatis voluptatem voluptatibus'
		// },
	],
	contacts: [
		{
			name: 'gh',
			img: '/icons/gh.png',
			link: 'https://github.com/leonidleonid',
			title: 'GitHub',
		},
		{
			name: 'linn',
			img: '/icons/linn.png',
			link: 'https://www.linkedin.com/in/belikov-web-dev',
			title: 'LinkedInn',
		},
		{
			name: 'email',
			img: '/icons/gmail.png',
			link: 'mailto:lifeisgym@gmail.com?subject=Работа, frontend-разработчик',
			title: 'Gmail',
		},
		{
			name: 'tg',
			img: '/icons/tg.png',
			link: 'https://t.me/belikov_LL',
			title: 'Telegram',
		},
		{
			name: 'ig',
			img: '/icons/ig.png',
			link: 'https://www.instagram.com/belikov_web_dev/',
			title: 'Instagram',
		},
		{
			name: 'vk',
			img: '/icons/vk.png',
			link: 'https://vk.com/id130355',
			title: 'VKontakte',
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
						title: 'Добавить описание',
						period: 'Добавить период',
						skills: ['gulp', 'bootstrap', 'sass'],
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
						title: 'При менторcтве коллег изучил Python и PostgreSQL для участия в backend-разработке',
						period: 'С апреля',
						skills: ['python', 'postgresql'],
						description: [
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos enim facere id labore maiores ullam.',
							'Accusantium alias assumenda aut autem commodi cupiditate earum, eius eum exercitationem, fuga iste laborum libero magnam minus rem sint tempore ullam unde vel voluptate.']
					},
					{
						title: 'Под впечатлением от Python самостоятельно изучил основы django',
						period: 'С мая',
						skills: ['django'],
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
	portfolioPage: {
		projects: [
			{
				title: 'Лэндинг для автошколы',
				img: './img/portfolio/wroom_1.png',
				src: 'https://github.com/leonidleonid/wrooom',
				link: null,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore esse et expedita maxime numquam pariatur quas tempora vitae, voluptates! Consequatur culpa cum earum hic, nihil odio officiis quaerat vero!'
			},
			{
				title: 'Сайт-резюме',
				img: './img/portfolio/resume.png',
				src: 'https://github.com/leonidleonid/resume',
				link: '/',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore esse et expedita maxime numquam pariatur quas tempora vitae, voluptates! Consequatur culpa cum earum hic, nihil odio officiis quaerat vero!'
			},
			{
				title: 'Приложение для учета личных финансов',
				img: './img/portfolio/fire_app_1.png',
				src: 'https://github.com/leonidleonid/fire_app',
				link: null,
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore esse et expedita maxime numquam pariatur quas tempora vitae, voluptates! Consequatur culpa cum earum hic, nihil odio officiis quaerat vero!'
			},
			{
				title: 'Прототип "Интернет-магазин"',
				img: './img/portfolio/online_store_1.png',
				src: 'https://github.com/leonidleonid/onlinestore',
				link: 'https://leonidleonid.github.io/onlinestore',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore esse et expedita maxime numquam pariatur quas tempora vitae, voluptates! Consequatur culpa cum earum hic, nihil odio officiis quaerat vero!'
			},
			{
				title: 'Прототип "Текстовые блоки"',
				img: './img/portfolio/blocks_1.png',
				src: 'https://github.com/leonidleonid/blocks',
				link: 'https://leonidleonid.github.io/blocks',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore esse et expedita maxime numquam pariatur quas tempora vitae, voluptates! Consequatur culpa cum earum hic, nihil odio officiis quaerat vero!'
			},
			{
				title: 'Прототип "Галерея событий"',
				img: './img/portfolio/gallery.png',
				src: 'https://github.com/leonidleonid/gallery',
				link: 'https://leonidleonid.github.io/gallery',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolore esse et expedita maxime numquam pariatur quas tempora vitae, voluptates! Consequatur culpa cum earum hic, nihil odio officiis quaerat vero!'
			},
		],
		selectedProject: 0
	},

	backTitle: ''
};

export default state;
