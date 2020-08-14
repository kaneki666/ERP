export default {
  items: [
    {
      id: "navigation",
      title: "Home",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: "/dashboard/default",
          icon: "feather icon-home",
        },
      ],
    },

    {
      id: "products-section",
      title: "Products Section",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "products",
          title: "Products",
          type: "collapse",
          icon: "feather icon-box",
          children: [
            {
              id: "listproducts",
              title: "List Products|Add Product",
              type: "item",
              url: "/products/list-products",
            },
            {
              id: "addcatagories",
              title: "Add Catagories",
              type: "item",
              url: "/products/addcatagories",
            },
            {
              id: "addbrands",
              title: "Add Brands",
              type: "item",
              url: "/products/addbrands",
            },
          ],
        },
      ],
    },
    {
      id: "purchases-section",
      title: "Purchases Section",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "purchases",
          title: "Purchases",
          type: "collapse",
          icon: "feather icon-shopping-cart",
          children: [
            {
              id: "listpurchase",
              title: "List Purchases|Add Purchase",
              type: "item",
              url: "/purchases/list-purchases",
            },
          ],
        },
      ],
    },

    {
      id: "sales-section",
      title: "Sales-section",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "sales",
          title: "Sales",
          type: "collapse",
          icon: "feather icon-activity",
          children: [
            {
              id: "listsale",
              title: "Add New Sale",
              type: "item",
              url: "/sales/add-sale",
            },
          ],
        },
      ],
    },
    {
      id: "report-section",
      title: "Report-section",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "reports",
          title: "Reports",
          type: "collapse",
          icon: "feather icon-clipboard",
          children: [
            {
              id: "salesreport",
              title: "Sale Report",
              type: "item",
              url: "/report/sale-report",
            },
          ],
        },
      ],
    },
    {
      id: "supplier-section",
      title: "Supplier Section",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "Supplier",
          title: "Supplier",
          type: "collapse",
          icon: "feather icon-tag",
          children: [
            {
              id: "supplierlist",
              title: "List Supplier|Add Supplier",
              type: "item",
              url: "/supplier/list-supplier",
            },
          ],
        },
      ],
    },
    {
      id: "user-section",
      title: "User Section",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "User",
          title: "User",
          type: "collapse",
          icon: "feather icon-tag",
          children: [
            {
              id: "supplierlist",
              title: "Add User",
              type: "item",
              url: "/user/add-user",
            },
            {
              id: "listuser",
              title: "List User",
              type: "item",
              url: "/user/list-user",
            },
          ],
        },
      ],
    },
    {
      id: "expense-section",
      title: "Expense Section",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "expense",
          title: "Expense List|Add Expense",
          type: "item",
          url: "/expense",
          icon: "feather icon-book",
        },
      ],
    },
    {
      id: "employee-section",
      title: "Employee Section",
      type: "group",
      icon: "icon-user",
      children: [
        {
          id: "employee",
          title: "Employee",
          type: "collapse",
          icon: "feather icon-users",
          children: [
            {
              id: "addemployee",
              title: "Add Employee",
              type: "item",
              url: "/addemployee",
            },
            {
              id: "employeelist",
              title: "List Employee",
              type: "item",
              url: "/employee",
            },
          ],
        },
      ],
    },
  ],
};
