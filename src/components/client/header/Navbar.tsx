import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';


function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation();

  console.log(location.pathname)
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Study Destination', href: '/study-destination' },
    { name: 'Contact', href: '/contact' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
  ]

  return (
    <div className="sticky top-0 bg-white z-50">
      <Disclosure as="nav">
        <div className="container mx-auto px-2 md:px-6 lg:px-8">
          <div className="relative flex h-16 md:h-24 items-center">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center lg:items-center">
              <div className="flex-shrink-0">
                <Link to='/'>
                  <img
                    alt="Your Company"
                    src="/images/logo.png"
                    className="h-10 w-auto md:h-20"
                  />
                </Link>
              </div>
              <div className="hidden flex-1 lg:block">
                <div className="flex items-center space-x-4 justify-center">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        location.pathname === item.href ? 'text-primary' : 'text-slate-800 hover:text-primary',
                        'rounded-md px-2 py-2 text-base font-medium xl:text-lg',
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className='lg:mx-10'>
              <Link to="/login" className='px-2 py-2 text-base font-medium text-slate-800'>Login <FontAwesomeIcon icon={faRightToBracket} /></Link>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-primary p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="/images/CEO-Picture-1.jpg"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                data-open="open"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div> */}
          </div>
        </div>

        <DisclosurePanel className="lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 bg-purple-200">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className={classNames(
                  item.href === location.pathname ? 'text-primary' : 'text-slate-800 hover:text-primary',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}