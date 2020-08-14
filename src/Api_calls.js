import axios from "axios";

const URL = "https://erp.bangabandhuolympiad.com";

export const Add_product_api = (product) => {
  console.log(product);
  return axios
    .post(`${URL}/api/v1/product`, {
      name: product.name,
      product_code: product.product_code,
      cat_id: product.cat_id,
      price: product.price,
      vat: product.vat,
      brand_id: product.brand_id,
      quantity: product.quantity,
    })
    .then((res) => console.log(res));
};

export const Get_products = () => {
  return axios
    .get(`${URL}/api/v1/product`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Delete_product = (id) => {
  return axios
    .delete(`${URL}/api/v1/product/${id}`)
    .then((res) => console.log(res));
};

export const Edit_product = (product) => {
  return axios
    .put(`${URL}/api/v1/product/${product.id}`, {
      name: product.name,
      product_code: product.product_code,
      cat_id: product.cat_id,
      price: product.price,
      vat: product.vat,
      tax: product.tax,
      brand_id: product.brand_id,
      quantity: product.qty,
    })
    .then((res) => console.log(res));
};

export const Add_sale_api = (sale_order) => {
  return axios
    .post(`${URL}/api/v1/sales`, {
      employee_id: sale_order.employee_id,
      products: sale_order.product_id,
      payment_method: sale_order.payment_method,
      discount: sale_order.discount,
      quantity: sale_order.quantity,
      total_amount: sale_order.total,
    })

    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const Get_sales_api = () => {
  return axios
    .get(`${URL}/api/sales`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Get_brands = (brand_name) => {
  return axios
    .get(`${URL}/api/v1/brand`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Add_brands = (brand_name) => {
  return axios
    .post(`${URL}/api/v1/brand`, {
      name: brand_name,
    })
    .then((res) => console.log(res));
};

export const Edit_brands = (data) => {
  return axios
    .put(`${URL}/api/v1/brand/${data.id}`, {
      name: data.name,
    })
    .then((res) => console.log(res));
};
export const Delete_brands = (id) => {
  return axios
    .delete(`${URL}/api/v1/brand/${id}`, {})
    .then((res) => console.log(res));
};

export const Get_catagories = () => {
  return axios
    .get(`${URL}/api/v1/category`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Add_catagories = (cate_name) => {
  return axios
    .post(`${URL}/api/v1/category`, {
      name: cate_name,
    })
    .then((res) => console.log(res));
};

export const Edit_catagories = (data) => {
  return axios
    .put(`${URL}/api/v1/category/${data.id}`, {
      name: data.name,
    })
    .then((res) => console.log(res));
};

export const Delete_catagories = (id) => {
  return axios
    .delete(`${URL}/api/v1/category/${id}`, {})
    .then((res) => console.log(res));
};

export const Add_employee_api = (data) => {
  return axios
    .post(`${URL}/api/v1/employee`, {
      name: data.name,
      address: data.address,
      designation: data.designation,
      joining_date: data.joining_date,
      nid: data.nid,
      phone: data.phone,
    })
    .then((res) => console.log(res));
};

export const Edit_employee_api = (data) => {
  return axios
    .put(`${URL}/api/v1/employee/${data.id}`, {
      name: data.name,
      address: data.address,
      designation: data.designation,
      joining_date: data.joining_date,
      nid: data.nid,
      phone: data.phone,
    })
    .then((res) => console.log(res));
};

export const Delete_employee_api = (id) => {
  return axios
    .delete(`${URL}/api/v1/employee/${id}`, {})
    .then((res) => console.log(res));
};

export const Get_employee_api = () => {
  return axios
    .get(`${URL}/api/v1/employee`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Add_supplier_api = (data) => {
  return axios
    .post(`${URL}/api/v1/supplier`, {
      name: data.name,
      address: data.address,
      nid: data.nid,
      company_name: data.company_name,
      // phone: data.phone,
    })
    .then((res) => console.log(res));
};

export const Edit_supplier_api = (data) => {
  return axios
    .put(`${URL}/api/v1/supplier/${data.id}`, {
      name: data.name,
      address: data.address,
      nid: data.nid,
      company_name: data.company_name,
      // phone: data.phone,
    })
    .then((res) => console.log(res));
};

export const Delete_supplier_api = (id) => {
  return axios
    .delete(`${URL}/api/v1/supplier/${id}`, {})
    .then((res) => console.log(res));
};

export const Get_supplier_api = () => {
  return axios
    .get(`${URL}/api/v1/supplier`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Add_purchase_api = (data) => {
  return axios
    .post(`${URL}/api/v1/purchase`, {
      date: data.date,
      cost: data.cost,
      supplier_id: data.supplier_id,
      product_id: data.product_id,
      payment_method: data.payment_method,
      desc: data.desc,
    })
    .then((res) => console.log(res));
};

export const Edit_purchase_api = (data) => {
  return axios
    .put(`${URL}/api/v1/purchase/${data.id}`, {
      date: data.date,
      cost: data.cost,
      supplier_id: data.supplier_id,
      product_id: data.product_id,
      payment_method: data.payment_method,
      desc: data.desc,
    })
    .then((res) => console.log(res));
};

export const Delete_purchase_api = (id) => {
  return axios
    .delete(`${URL}/api/v1/purchase/${id}`, {})
    .then((res) => console.log(res));
};

export const Get_purchase_api = () => {
  return axios
    .get(`${URL}/api/v1/purchase`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Get_report_api = (data) => {
  return axios
    .get(`${URL}/api/v1/report/sales/${data.fromDate}/${data.toDate}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Get_product_report_api = (data) => {
  return axios
    .get(
      `${URL}/api/v1/report/sales/product/${data.product_id}/${data.fromDate}/${data.toDate}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Get_employee_report_api = (data) => {
  return axios
    .get(
      `${URL}/api/v1/report/sales/employee/${data.employee_id}/${data.fromDate}/${data.toDate}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Add_expense_api = (data) => {
  return axios
    .post(`${URL}/api/v1/expense`, {
      employee_id: data.employee_id,
      name: data.name,
      amount: data.amount,
      description: data.description,
    })
    .then((res) => console.log(res));
};

export const Edit_expense_api = (data) => {
  return axios
    .put(`${URL}/api/v1/expense/${data.id}`, {
      employee_id: data.employee_id,
      name: data.name,
      amount: data.amount,
      description: data.description,
    })
    .then((res) => console.log(res));
};

export const Delete_expense_api = (id) => {
  return axios
    .delete(`${URL}/api/v1/expense/${id}`, {})
    .then((res) => console.log(res));
};

export const Get_expense_api = () => {
  return axios
    .get(`${URL}/api/v1/expense`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Dashboard_api = (id) => {
  return axios
    .get(`${URL}/api/v1/stats/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Login_api = (data) => {
  return axios
    .post(`${URL}/api/v1/login`, {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Add_user_api = (data) => {
  return axios
    .post(`${URL}/api/v1/user `, {
      name: data.name,
      email: data.email,
      password: data.password,
      employee_id: data.employee_id,
      role_id: data.role_id,
    })
    .then((res) => console.log(res));
};

export const Edit_user_api = (data) => {
  console.log(data);
  return axios
    .put(`${URL}/api/v1/user/${data.id}`, {
      name: data.name,
      email: data.email,
      password: data.password,
      employee_id: parseInt(data.employee_id),
      role_id: parseInt(data.role_id),
    })
    .then((res) => console.log(res));
};

export const Delete_user_api = (id) => {
  return axios
    .delete(`${URL}/api/v1/user${id}`, {})
    .then((res) => console.log(res));
};

export const Get_user_api = () => {
  return axios
    .get(`${URL}/api/v1/user`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
