
export const menuItems = [
  {
    title: 'Titles',
    url: '/titles',
    submenu: [
      {
        title: 'Title Search',
        url: '/title/search'
      },
      {
        title: 'Add Title',
        url: '/title/add'
      }
    ],
  },
  {
    title: 'Contracts',
    url: '/contracts',
    submenu: [
      {
        title: 'Contract Search',
        url: '/contract/search'
      },
      {
        title: 'Add Contract',
        url: '/contract/add'
      }
    ],
  },
  {
    title: 'Reports',
    url: '/reports',
    submenu: [],
  },
  {
    title: 'Settings',
    url: '/settings',
    submenu: [],
  },
  {
    title: 'Login',
    url: '/login',
    submenu: [],
  },
];




export interface MenuItemType {
  title: string,
  url: string
  submenu?: {
    title: string,
    url: string
  }[]
}

export interface MenuItemsType {
  menus: [MenuItemType]
}

