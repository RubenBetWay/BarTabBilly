import { StockItemCardConfig } from 'src/app/shared/components/stock-item-card/stock-item-card.model';

export enum OrderViewState {
  SelectTab,
  ProductMenu,
  OrderConfirmation,
}

export const ProductMenu: StockItemCardConfig[] = [
  {
    title: 'Beer',
    price: 45,
    details: `Celebrate with a cold one! Beer is the perfect \
        companion for any occasion. From crisp lagers \
        to rich ales, our beer selection has something \
        for every taste. Whether you're watching the \
        game, grilling with friends, or just unwinding \
        after a long day, beer is the perfect way to \
        relax \and have a good time. Pair it with our \
        Bar Tab Billy app to keep track of your tabs and \
        make drinking with friends even more enjoyable!`,
  },
  {
    title: 'Cider',
    price: 52,
    details: `Get your apple on! Cider is a refreshing twist \
        on traditional drinks. From sweet and fruity to \
        dry and tangy, our cider selection offers a range \
        of flavors to suit every palate. Perfect for \
        sipping on a warm day or pairing with your favorite \
        foods, cider is a delicious choice. Track your \
        cider purchases and tabs with Bar Tab Billy and \
        make every sip even more enjoyable!`,
  },
  {
    title: 'Pre-mix',
    price: 59,
    details: `Convenience in a can! Pre-mix drinks are the \
        perfect choice when you want a hassle-free \
        drinking experience. With a range of flavors \
        and brands to choose from, you're sure to find \
        the perfect pre-mix to suit your taste. Whether \
        you're at a party, BBQ, or just relaxing with \
        friends, pre-mix drinks are an easy and enjoyable \
        option. Use Bar Tab Billy to keep track of your \
        pre-mix purchases and tabs, and take the stress \
        out of drinking!`,
  },
];

