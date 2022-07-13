const Header = () => {
	return (
		<header className='fixed left-[20%] h-[10%] w-full bg-blue-500 px-4'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<div className='flex items-center h-full gap-1 w-fit'>
						<p className='border rounded-md'>arrow-left</p>
						<p className='border rounded-md'>arrow-right</p>
					</div>
					<div className='flex items-center gap-2'>
						<p className='border rounded-md'>searchIcon</p>
						<input
							type='search'
							name='search'
							id='search'
							placeholder='Search name or type games, players...'
							className='p-2 border-0 rounded w-96'
						/>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<div className='flex flex-col items-center h-full gap-1 text-xs w-fit'>
						<p>LogoIcon {'1234'}</p>
						<p>YOUR COINS</p>
					</div>
					<div className='flex items-center h-full gap-1 w-fit'>
						<p className='border rounded-md'>MDs</p>
						<p className='border rounded-md'>Notifications</p>
					</div>
				</div>
			</div>
			<div className='flex items-center border-l'>
				<div className='grid w-10 h-10 text-white bg-red-500 rounded-full aspect-square place-content-center'>
					JH
				</div>
				<div className='flex flex-col'>
					<div>Nombre</div>
					<div>Email</div>
				</div>
				<div>Arrow-down Icon</div>
			</div>
		</header>
	);
};
export default Header;
