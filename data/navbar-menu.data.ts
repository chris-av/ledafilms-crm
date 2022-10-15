
export const menuItems = [
  {
    title: 'Titles',
    url: '/titles',
    submenu: [
      {
        title: 'Title Search',
        url: '/titles'
      },
      {
        title: 'Add Title',
        url: '/titles/add'
      }
    ],
  },
  {
    title: 'Contracts',
    url: '/contracts',
    submenu: [
      {
        title: 'Contract Search',
        url: '/contracts'
      },
      {
        title: 'Add Contract',
        url: '/contracts/add'
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
  url: string,
  id?: string | number,
  submenu: {
    title: string,
    url: string
  }[]
}

export interface SubMenuType {
  submenu: {
    title: string,
    url: string
  }[]
}


export interface MenuItemsType {
  menus: [MenuItemType]
}

