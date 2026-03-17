// parser.js
import { User, Product } from '../models';

const parseUserResponse = (data) => {
  const users = [];

  data.forEach((user) => {
    users.push({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  });

  return users;
};

const parseProductResponse = (data) => {
  const products = [];

  data.forEach((product) => {
    products.push({
      id: product.id,
      name: product.name,
      price: product.price,
    });
  });

  return products;
};

const parseDashboardData = (userData, productData) => {
  const dashboardData = {};

  dashboardData.users = parseUserResponse(userData);
  dashboardData.products = parseProductResponse(productData);

  return dashboardData;
};

export {
  parseUserResponse,
  parseProductResponse,
  parseDashboardData,
};