// export type IUser = {
    //     id: number | string;
    //     name: string;
    //     email: string;
    //     password: string;
    // }
    
export type IUser = {
    id: number,
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: number,
      geo: {
        lat: number;
        lng: number;
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}