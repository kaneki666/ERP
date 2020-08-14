import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import("./Pages/Dashboard/Default"));
const ListProducts = React.lazy(() => import("./Pages/Products/ListProducts"));
const ProductDetails = React.lazy(() =>
  import("./Pages/Products/ProductDetails")
);
const AddCatagories = React.lazy(() =>
  import("./Pages/Products/AddCatagories")
);
const AddBrands = React.lazy(() => import("./Pages/Products/AddBrands"));

const PurchasesOrder = React.lazy(() =>
  import("./Pages/Purchases/PurchasesOrder")
);
const ListPurchase = React.lazy(() => import("./Pages/Purchases/ListPurchase"));
const ListPurchaseDetail = React.lazy(() =>
  import("./Pages/Purchases/ListPurchaseDetail")
);
const OrderDetails = React.lazy(() => import("./Pages/Purchases/OrderDetails"));
const SaleReport = React.lazy(() => import("./Pages/Report/SaleReport"));
const ReportDetails = React.lazy(() => import("./Pages/Report/ReportDetails"));
const ReportDetailsEmployee = React.lazy(() =>
  import("./Pages/Report/ReportDetailsEmployee")
);
const ListSale = React.lazy(() => import("./Pages/Sales/ListSale"));
const ListSaleDetails = React.lazy(() =>
  import("./Pages/Sales/ListSaleDetails")
);

const ListSupplier = React.lazy(() => import("./Pages/Supplier/Supplier"));
const Expense = React.lazy(() => import("./Pages/Expense/Expense"));
const ExpenseDetails = React.lazy(() =>
  import("./Pages/Expense/ExpenseDetails")
);
const ListAccount = React.lazy(() => import("./Pages/Accounts/ListAccount"));
const Profile = React.lazy(() => import("./Pages/Profile/Profile"));
const Employee = React.lazy(() => import("./Pages/Employees/Employee"));
const AddEmployee = React.lazy(() => import("./Pages/Employees/AddEmployee"));
const AddUser = React.lazy(() => import("./Pages/User/User"));
const ListUser = React.lazy(() => import("./Pages/User/ListUser"));
const routes = [
  {
    path: "/dashboard/default",
    exact: true,
    name: "Dashboard",
    component: DashboardDefault,
  },
  {
    path: "/products/list-products",
    exact: true,
    name: "ListProducts",
    component: ListProducts,
  },
  {
    path: "/products/product-details",
    exact: true,
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/products/addcatagories",
    exact: true,
    name: "AddCatagories",
    component: AddCatagories,
  },
  {
    path: "/products/addbrands",
    exact: true,
    name: "AddBrands",
    component: AddBrands,
  },
  {
    path: "/purchases/purchase-order",
    exact: true,
    name: "PurchasesOrder",
    component: PurchasesOrder,
  },
  {
    path: "/purchases/order-details",
    exact: true,
    name: "OrderDetails",
    component: OrderDetails,
  },
  {
    path: "/purchases/list-purchases",
    exact: true,
    name: "ListPurchase",
    component: ListPurchase,
  },
  {
    path: "/purchases/list-purchase-detail",
    exact: true,
    name: "ListPurchaseDetail",
    component: ListPurchaseDetail,
  },
  {
    path: "/sales/add-sale",
    exact: true,
    name: "ListSale",
    component: ListSale,
  },
  {
    path: "/sales/sale-details",
    exact: true,
    name: "ListSaleDetails",
    component: ListSaleDetails,
  },

  {
    path: "/supplier/list-supplier",
    exact: true,
    name: "ListSupplier",
    component: ListSupplier,
  },
  {
    path: "/expense",
    exact: true,
    name: "Expense",
    component: Expense,
  },
  {
    path: "/expense-details",
    exact: true,
    name: "Expense Detail",
    component: ExpenseDetails,
  },
  {
    path: "/list-account",
    exact: true,
    name: "ListAccount",
    component: ListAccount,
  },
  {
    path: "/profile",
    exact: true,
    name: "Profile",
    component: Profile,
  },
  {
    path: "/employee",
    exact: true,
    name: "Employee",
    component: Employee,
  },
  {
    path: "/addemployee",
    exact: true,
    name: "AddEmployee",
    component: AddEmployee,
  },
  {
    path: "/report/sale-report",
    exact: true,
    name: "SaleReport",
    component: SaleReport,
  },
  {
    path: "/report/report-details",
    exact: true,
    name: "DeatilsReport",
    component: ReportDetails,
  },
  {
    path: "/report/sale-details-employee",
    exact: true,
    name: "ReportDetailsEmployee",
    component: ReportDetailsEmployee,
  },
  {
    path: "/user/add-user",
    exact: true,
    name: "AddUser",
    component: AddUser,
  },
  {
    path: "/user/list-user",
    exact: true,
    name: "ListUser",
    component: ListUser,
  },
];

export default routes;
