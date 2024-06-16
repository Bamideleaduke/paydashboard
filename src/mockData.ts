import Img from "./Assets/icons/dashboardIcon.svg"
import Transaction from "./Assets/icons/transactionIcon.svg"
import Refund from "./Assets/icons/refundIcon.svg"
import Payment from "./Assets/icons/paymentIcon.svg"
import Card from "./Assets/icons/cardIcon.svg"
import Account from "./Assets/icons/accountIcon.svg"
import MangeBill from "./Assets/icons/manageBillIcon.svg"
import Ecommerce from "./Assets/icons/ecommerceIcon.svg"

export const menuData = [
    { page: 'Dashboard', icon: Img, route: '/' },
    { page: 'Transactions', icon: Transaction, route: '#' },
    { page: 'Refunds', icon: Refund, route: '#' },
    { page: 'Payments', icon: Payment, route: '#' },
    { page: 'Cards', icon: Card, route: '#' },
    { page: 'Accounts', icon: Account, route: '#' },
    { page: 'Manage Bills', icon: MangeBill, route: '#' },
    { page: 'Ecommerce', icon: Ecommerce, route: '#' },
  ];