import {
	ArrowLeftIcon,
	ArrowRightIcon,
	BellIcon,
	ChevronDownIcon,
	MailIcon,
	MenuIcon,
	SearchIcon,
	UserCircleIcon
} from '@heroicons/react/outline';
import { LogoIcon } from './LogoIcon';

const Header = () => {
	return (
		<>
			<header className='fixed left-[20%] hidden h-[10%] w-full border-b-2 border-[#1b1f2d] dark:bg-[#030616] md:block'>
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

			<header className='fixed flex w-full items-center justify-between border-b-2 border-[#1b1f2d] px-4 dark:bg-[#030616] md:hidden'>
				<MenuIcon
					className='icon p-[0!important]'
					onClick={() => alert('Open Menu')}
				/>
				<div className='flex items-center justify-center gap-2'>
					<LogoIcon className='w-16 h-16 text-blue-500' />
					<div className='flex-col hidden leading-none sm:flex'>
						<span>ESPORTS PLATFORM</span>
						<span className='text-sm opacity-20'>INFINITY UI SYSTEM</span>
					</div>
				</div>
				<div
					className='flex items-center '
					onClick={() => alert('Open Profile Dropdown')}
				>
					<UserCircleIcon className='icon p-[0!important]' />
					<ChevronDownIcon className='icon h-[1rem!important] w-[1rem!important] p-[0!important]' />
				</div>
			</header>
		</>
	);
};
export default Header;
