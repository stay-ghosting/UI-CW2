import Logo from "./Logo";

interface FooterItem {
  name: string;
  link: string;
}

interface FooterList {
  title: string;
  items: FooterItem[];
}

const footerLists: FooterList[] = [
  {
    title: "Official Lists",
    items: [
      {
        name: "Music",
        link: "/event-list/events_company_list4",
      },
      {
        name: "Food And Drink",
        link: "/event-list/events_company_list3",
      },
      {
        name: "Gaming",
        link: "/event-list/events_company_list1",
      },
      {
        name: "Dance",
        link: "/event-list/events_company_list2",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        name: "Login",
        link: "/login",
      },
      {
        name: "Register",
        link: "/register",
      },
    ],
  },
  {
    title: "Plan",
    items: [
      {
        name: "Create Event List",
        link: "/event-list",
      },
      {
        name: "My Event Lists",
        link: "/Dashboard",
      },
    ],
  },
  {
    title: "Social",
    items: [
      {
        name: "Find User",
        link: "/following",
      },
      {
        name: "Following",
        link: "/following",
      },
    ],
  },
  {
    title: "Legal",
    items: [
      {
        name: "Terms and Conditions",
        link: "#",
      },
      {
        name: "Privacy Policy",
        link: "#",
      },
      {
        name: "Your Data",
        link: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="h-[15rem] bg-footer-gray text-gray-200 flex flex-row space-x-20 pt-16 justify-center">
      <div>
        <Logo className="text-left"/>
        <p>© 2024 Event Company</p>
      </div>
      {footerLists.map(({ title, items }) => {
        return (
          <div className="flex flex-col space-y-1">
            <p className="text-lg">{title}</p>
            {items.map(({ name, link }) => {
              return (
                <a className="font-[300] text-sm" href={link}>
                  {name}
                </a>
              );
            })}
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
