export interface IRequire{
  id?:number,
  date:string,
  name?:string,
  phone?: string,
  email?: string
  weight?: IWeight,
  receiver: string,
  receiverAddresse: string,
  receiverPhone?: string,
  sender: string,
  senderAddresse: string,
  senderPhone?: string,
  payment?: IPayment,
  status?: IStatus,
}
export enum IWeight{
small='до 1 кг',
middle='1 - 5 кг',
big='5 - 10 кг',
large='10 - 15 кг'

}
export enum IPayment{
  client='Заказчик',
  receiver='Получатель',
  sender='Отправитель',

  }
  export enum IStatus{
    start='В обработке',
    process='Выполняется',
    ready='Доставлен',

    }
export const requires:IRequire[]=[
  {
    id: 1,
    date: '05.02.2022',
    name: 'Евгений Лукашин',
    phone: '495-66-66',
    email: 'gesha@mail.ru',
    weight: IWeight.small,
    receiver: 'ООО "Рога и Копыта"',
    receiverAddresse: 'г. Москва, ул. ак. Королева, 12',
    receiverPhone: '495-99-99',
    sender: 'Евгений Лукашин',
    senderAddresse: 'г. Москва, ул. Окружная, 11, кв. 3',
    senderPhone:'495-66-66',
    payment: IPayment.client,
    status:IStatus.ready
  },
  {
    id: 2,
    date: '12.02.2022',
    name: 'Анатолий Ефремович Новосельцев',
    phone: '89015678934',
    email: 'nov@mail.ru',
    weight: IWeight.large,
    receiver: 'ООО "Хвосты и Уши"',
    receiverAddresse: 'г. Санкт-Петербург, пр-т Ленина, 9',
    receiverPhone: '489-90-90',
    sender: 'ООО "Импульс"',
    senderAddresse: 'г. Москва, ул. Полтавская, 12',
    senderPhone:'89015678934',
    payment: IPayment.receiver,
    status:IStatus.process
  },
  {
    id: 3,
    date: '05.03.2022',
    name: 'Людмила Калугина',
    phone: '890156273894',
    email: 'kalugina@mail.ru',
    weight: IWeight.middle,
    receiver: 'Анатолий Иванов',
    receiverAddresse: 'г. Калуга, ул. Кирова, 9б кв. 65',
    receiverPhone: '8-910-673-89-89',
    sender: 'Людмила Калугина',
    senderAddresse: 'г. Москва, ул. Образцова, 12б кв. 4',
    senderPhone:'89898934',
    payment: IPayment.receiver,
    status:IStatus.process
  },
  {
    id: 4,
    date: '05.03.2022',
    name: 'ООО "Катапульта"',
    phone: '8-930-578-89-89',
    email: 'kart@mail.ru',
    weight: IWeight.big,
    receiver: 'ООО "Статус"',
    receiverAddresse: 'пос. Ивантеевка, ул. Ленина, 8',
    receiverPhone: '8-910-673-89-89',
    sender: 'ООО "Катапульта"',
    senderAddresse: 'г. Москва, ул. Степанова, 1 кв. 4',
    senderPhone:'8989098934',
    payment: IPayment.sender,
    status:IStatus.start
  },
  {
    id: 5,
    date: '21.01.2022',
    name: 'ООО "Сигнал"',
    phone: '8-990-578-89-89',
    email: 'signal@mail.ru',
    weight: IWeight.big,
    receiver: 'Юрий Самохвалов',
    receiverAddresse: 'г. Владимир, ул. Пушкина, 9аб кв. 65',
    receiverPhone: '+7(920) 789 78 78',
    sender: 'ООО "Сигнал"',
    senderAddresse: 'г. Москва, ул. Штольца, 5 кв. 48',
    senderPhone:'8-990-578-89-89',
    payment: IPayment.sender,
    status:IStatus.ready
  },
]


