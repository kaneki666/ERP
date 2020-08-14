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
  ],
};
