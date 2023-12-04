export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        login:undefined;
        singin:undefined;
        home: undefined;
        balance: undefined;
        release: undefined;//tem que passar a data como parametros
        reports: undefined;
        expenses: undefined;//tem que passar a data como parametros
        revenue: undefined;
        cards: undefined;
        cardDetails: { cardDetails: Item };
        addCard: undefined;
        addCardF: {cardData};
        addBills: undefined;
        addBillsF: {cardData};
        addRevenue: undefined;
        addRevenueF: {cardData};

      }
    }
  }