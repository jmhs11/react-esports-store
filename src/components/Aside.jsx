import { LogoIcon } from './LogoIcon';
import {
	CubeTransparentIcon,
	FlagIcon,
	GiftIcon,
	GlobeAltIcon,
	HeartIcon,
	HomeIcon,
	LightningBoltIcon,
	ShoppingCartIcon,
	VideoCameraIcon
} from '@heroicons/react/outline';

const Aside = () => {
	return (
		<aside className='fixed h-screen w-[20%] border-r-2 border-[#1b1f2d] px-4'>
			<div className='flex items-center justify-center h-20 gap-2'>
				<LogoIcon className='w-16 h-16 text-blue-500' />
				<div className='flex flex-col leading-none'>
					<span>ESPORTS PLATFORM</span>
					<span className='text-sm opacity-20'>INFINITY UI SYSTEM</span>
				</div>
			</div>
			<div>
				<h3 className='mb-3'>MENU</h3>
				<ul>
					<li className='grid items-center py-2 -mr-4 border-r-2 border-transparent grid-cols-menu hover:border-white'>
						<HomeIcon className='icon p-[0!important]' />
						<p>Dashboard</p>
					</li>
					<li className='grid items-center py-2 -mr-4 border-r-2 border-transparent grid-cols-menu hover:border-white'>
						<HeartIcon className='icon p-[0!important]' />
						<p>Favorites</p>
					</li>
					<li className='grid items-center py-2 -mr-4 border-r-2 border-transparent grid-cols-menu hover:border-white'>
						<ShoppingCartIcon className='icon p-[0!important]' />
						<p>My Basket</p>
					</li>
					<li className='grid items-center py-2 -mr-4 border-r-2 border-transparent grid-cols-menu hover:border-white'>
						<VideoCameraIcon className='icon p-[0!important]' />
						<p>Stream - Premium</p>
					</li>
				</ul>
			</div>
			<div>
				<h3 className='my-3'>CATEGORIES</h3>
				<ul>
					<li className='grid items-center py-2 -mr-4 border-r-2 border-transparent grid-cols-menu hover:border-white'>
						<FlagIcon className='icon p-[0!important]' />
						<p>BestSellers</p>
					</li>
					<li className='grid items-center py-2 -mr-4 border-r-2 border-transparent grid-cols-menu hover:border-white'>
						<LightningBoltIcon className='icon p-[0!important]' />
						<p>Recently Updated</p>
					</li>
					<li className='grid items-center py-2 -mr-4 border-r-2 border-transparent grid-cols-menu hover:border-white'>
						<GlobeAltIcon className='icon p-[0!important]' />
						<p> News</p>
					</li>
					<li className='grid items-center py-2 -mr-4 border-r-2 border-transparent grid-cols-menu hover:border-white'>
						<GiftIcon className='icon p-[0!important]' />
						<p>Special Offers</p>
					</li>
					<li className='grid items-center py-2 -mr-4 border-r-2 border-transparent grid-cols-menu hover:border-white'>
						<CubeTransparentIcon className='icon p-[0!important]' />
						<p>Virtual Reality</p>
					</li>
				</ul>
			</div>
		</aside>
	);
};
export default Aside;
