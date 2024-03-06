import { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';

// fonts
import { baseFont } from '@/_fonts';

// icons
import { Bars3Icon } from '@heroicons/react/24/outline';

// styles
import './layout.css';

//https://interland3.donorperfect.net/weblink/WebLink.aspx?name=E10328&id=15
type LayoutProps = PropsWithChildren<{}>;

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<html lang='en' data-theme='dsmith'>
			<body className={`bg-gray-200 ${baseFont.className}`}>
				<div className='bg-white container max-w-screen-xl border-r-2 border-r-primary'>
					<div className='navbar bg-transparent/0 sticky top-0 z-10'>
						<div className='navbar-start'>Derry Smith</div>
						<div className='navbar-end'>
							{/* <Bars3Icon className='w-6 h-6 text-white' /> */}
							<ul className='menu menu-horizontal menu-sm rounded-sm text-primary'>
								<li><a href='https://interland3.donorperfect.net/weblink/WebLink.aspx?name=E10328&id=15' target='_blank' className='rounded-sm'>SM Education Foundation</a></li>
								<li><a href='#' className='rounded-sm'>Gallery</a></li>
								<li><a href='#' className='rounded-sm'>About</a></li>
								<li><a href='#' className='rounded-sm'>Donate</a></li>
							</ul>
						</div>
					</div>

					{children}
				</div>
			</body>
		</html>
	);
};

export const metadata: Metadata = {
	title: 'The Derry D. Smith Memorial Scholarship',
};

export default Layout;
