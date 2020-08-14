import * as actionTypes from "./actions";
import config from "./../config";

const initialState = {
  isOpen: [], //for active default menu
  isTrigger: [], //for active default menu, set blank for horizontal
  ...config,
  isFullScreen: false, // static can't change
  products: [],
  listPurchases: [],
  purchaseOrder: [],
  saleOrder: [],
  listSale: [],
  accounts: [],
  journals: [],
  total_products: 0,
  notifications: [],
  noti_count: 0,
  dashboard: {},
};

const reducer = (state = initialState, action) => {
  let trigger = [];
  let open = [];
  let { notifications, noti_count } = state;

  switch (action.type) {
    case actionTypes.COLLAPSE_MENU:
      return {
        ...state,
        collapseMenu: !state.collapseMenu,
      };

    case actionTypes.COLLAPSE_TOGGLE:
      if (action.menu.type === "sub") {
        open = state.isOpen;
        trigger = state.isTrigger;

        const triggerIndex = trigger.indexOf(action.menu.id);
        if (triggerIndex > -1) {
          open = open.filter((item) => item !== action.menu.id);
          trigger = trigger.filter((item) => item !== action.menu.id);
        }

        if (triggerIndex === -1) {
          open = [...open, action.menu.id];
          trigger = [...trigger, action.menu.id];
        }
      } else {
        open = state.isOpen;
        const triggerIndex = state.isTrigger.indexOf(action.menu.id);
        trigger = triggerIndex === -1 ? [action.menu.id] : [];
        open = triggerIndex === -1 ? [action.menu.id] : [];
      }

      return {
        ...state,
        isOpen: open,
        isTrigger: trigger,
      };

    case actionTypes.NAV_CONTENT_LEAVE:
      return {
        ...state,
        isOpen: open,
        isTrigger: trigger,
      };

    case actionTypes.NAV_COLLAPSE_LEAVE:
      if (action.menu.type === "sub") {
        open = state.isOpen;
        trigger = state.isTrigger;

        const triggerIndex = trigger.indexOf(action.menu.id);
        if (triggerIndex > -1) {
          open = open.filter((item) => item !== action.menu.id);
          trigger = trigger.filter((item) => item !== action.menu.id);
        }
        return {
          ...state,
          isOpen: open,
          isTrigger: trigger,
        };
      }
      return { ...state };

    case actionTypes.FULL_SCREEN:
      return {
        ...state,
        isFullScreen: !state.isFullScreen,
      };

    case actionTypes.FULL_SCREEN_EXIT:
      return {
        ...state,
        isFullScreen: false,
      };

    case actionTypes.CHANGE_LAYOUT:
      return {
        ...state,
        layout: action.layout,
      };

    case actionTypes.ADD_PRODUCT:
      const payloadProduct = action.payload;
      return { ...state, products: payloadProduct };

    case actionTypes.ADD_PURCHASE:
      const payloadPurchase = action.payload;
      return { ...state, purchaseOrder: payloadPurchase };

    case actionTypes.ADD_LIST_PURCHASE:
      const payloadListPurchase = action.payload;
      return { ...state, listPurchases: payloadListPurchase };

    case actionTypes.ADD_SALE_ORDER:
      const payloadSaleorder = action.payload;
      return { ...state, saleOrder: payloadSaleorder };

    case actionTypes.ADD_LIST_SALE:
      const payloadListsale = action.payload;
      return { ...state, listSale: payloadListsale };

    case actionTypes.ADD_ACCOUNT:
      const payloadAccounts = action.payload;
      return { ...state, accounts: payloadAccounts };

    case actionTypes.ADD_JOURNAL:
      const payloadJournal = action.payload;
      return { ...state, journals: payloadJournal };

    case actionTypes.TOTAL_PRODUCT:
      const payloadAmount = action.payload;
      return { ...state, total_products: payloadAmount };

    case actionTypes.DASHBOARD:
      const dashboard = action.payload;
      return { ...state, dashboard: dashboard };

    case actionTypes.ADD_NOTIFICATIONS:
      const payloadNotification = action.payload;
      noti_count += 1;
      notifications.push(payloadNotification);
      return { ...state, noti_count: noti_count };

    case actionTypes.CLEAR_NOTIFICATIONS:
      return { ...state, noti_count: 0, notifications: [] };

    default:
      return state;
  }
};

export default reducer;
