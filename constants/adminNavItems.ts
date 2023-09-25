interface INavItem {
  href?: any;
  content: string;
  childrenItems?: INavItem[];
  icon?: any;
  cover?: string;
  active?: boolean;
}

export const ADMIN_NAV_ITEMS: INavItem[] = [
  // {
  //   content: "Dashboard",
  //   href: "/admin/dashboard",
  //   childrenItems: [],
  //   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"> <path d="M0.833333 8.33333H5.83333C6.29167 8.33333 6.66667 7.95833 6.66667 7.5V0.833333C6.66667 0.375 6.29167 0 5.83333 0H0.833333C0.375 0 0 0.375 0 0.833333V7.5C0 7.95833 0.375 8.33333 0.833333 8.33333ZM0.833333 15H5.83333C6.29167 15 6.66667 14.625 6.66667 14.1667V10.8333C6.66667 10.375 6.29167 10 5.83333 10H0.833333C0.375 10 0 10.375 0 10.8333V14.1667C0 14.625 0.375 15 0.833333 15ZM9.16667 15H14.1667C14.625 15 15 14.625 15 14.1667V7.5C15 7.04167 14.625 6.66667 14.1667 6.66667H9.16667C8.70833 6.66667 8.33333 7.04167 8.33333 7.5V14.1667C8.33333 14.625 8.70833 15 9.16667 15ZM8.33333 0.833333V4.16667C8.33333 4.625 8.70833 5 9.16667 5H14.1667C14.625 5 15 4.625 15 4.16667V0.833333C15 0.375 14.625 0 14.1667 0H9.16667C8.70833 0 8.33333 0.375 8.33333 0.833333Z" fill="#2B79D3"/> </svg>',
  // },
  {
    content: "Blogs",
    href: "/admin/blogs",
    childrenItems: [],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none"> <path d="M12.1869 0.259936L13.424 1.49705C13.7662 1.83923 13.7662 2.39198 13.424 2.73416L9.65123 6.51569V15H0V1.83923H9.3617L10.941 0.259936C11.2919 -0.0822444 11.8447 -0.0910183 12.1869 0.259936ZM7.22088 7.70016L11.9324 2.99738L10.6865 1.75149L5.98376 6.46305L5.36082 8.3231L7.22088 7.70016Z" fill="#2B79D3"/> </svg>',
  },
];