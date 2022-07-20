import {
	ArrowLeftIcon,
	ArrowRightIcon,
	BellIcon,
	ChevronDownIcon,
	MailIcon,
	SearchIcon
} from '@heroicons/react/outline';

const Header = () => {
	return (
		<header className='fixed left-[20%] h-[10%] w-full border-b-2 border-[#1b1f2d] dark:bg-[#030616]'>
			<div className='flex items-center justify-between px-4'>
				<div className='flex items-center gap-2'>
					<div className='flex items-center h-full gap-1 w-fit'>
						<ArrowLeftIcon className='icon-rounded' />
						<ArrowRightIcon className='icon-rounded' />
					</div>
					<div className='flex items-center gap-2'>
						<SearchIcon className='icon' />
						<input
							type='search'
							name='search'
							id='search'
							placeholder='Search name or type games, players...'
							className='p-2 bg-transparent border-0 rounded w-96'
						/>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<div className='flex flex-col items-center h-full gap-1 text-xs w-fit'>
						<p>LogoIcon {'1234'}</p>
						<p>YOUR COINS</p>
					</div>
					<div className='flex items-center h-full gap-1 w-fit'>
						<MailIcon className='icon-rounded' />
						<BellIcon className='icon-rounded' />
					</div>
				</div>
			</div>
			<div className='flex items-center border-l-2 border-[#1b1f2d] px-4'>
				<div className='grid w-10 h-10 text-white bg-blue-500 rounded-full aspect-square place-content-center'>
					JH
				</div>
				<div className='flex flex-col'>
					<div>Nombre</div>
					<div>Email</div>
				</div>
				<ChevronDownIcon className='icon' />
			</div>
		</header>
	);
};
export default Header;
